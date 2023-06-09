import { Box, Container } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify/lib';
import remarkParse from 'remark-parse/lib';
import remarkPrism from 'remark-prism';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import { unified } from 'unified';
import Script from 'next/script';
import MainLayout from '@/layouts/MainLayout';
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { SEO } from '@/components/common';

interface IBlogDetailPage {
  post: Post;
}

export default function BlogDetailPage({ post }: IBlogDetailPage) {
  console.log('post:', post);
  return (
    <Box>
      <SEO
        data={{
          title: `${post.title} | Easy Frontend Blog`,
          description: post.description,
          url: `https://study-next-blog.vercel.app/blog/${post.slug}`,
          thumbnailUrl:
            post.thumbnailUrl ||
            'https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png',
        }}
      />

      <Container>
        <p>{post.title}</p>
        <p>{post.author?.name}</p>
        <p>{post.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
      </Container>

      <Script src="/prism.js" strategy="afterInteractive"></Script>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

BlogDetailPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<IBlogDetailPage> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();
  const slug = context?.params?.slug;
  if (!slug) return { notFound: true };

  const post = postList.find(x => x.slug === slug);
  if (!post) return { notFound: true };

  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: 'agenda.*' })
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeDocument, { title: 'Blog details page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '');
  post.htmlContent = file.toString();

  return {
    props: {
      post,
    },
  };
};
