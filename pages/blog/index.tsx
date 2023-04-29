import { PostItem } from '@/components/blog';
import MainLayout from '@/layouts/MainLayout';
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { Container, Divider } from '@mui/material';
import { Box } from '@mui/system';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

interface IBlogPage {
  posts: Post[];
}

export default function BlogPage({ posts }: IBlogPage) {
  return (
    <Box>
      <Container>
        <h1>Blog</h1>
        <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
          {posts.map(post => (
            <li key={post.id} className="text-lg hover:opacity-80">
              <Link href={`/blog/${post.slug}`}>
                <PostItem post={post} />
                <Divider sx={{ my: 3 }} />
              </Link>
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

BlogPage.Layout = MainLayout;
// Chỉ chạy phía server, dùng để gọi api và trả về dữ liệu
export const getStaticProps: GetStaticProps<IBlogPage> = async (
  context: GetStaticPropsContext
) => {
  // Convert markdown files into list of javascript objects
  const data = await getPostList();
  return {
    props: {
      posts: data,
    },
  };
};
