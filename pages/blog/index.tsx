import { getPostList } from '@/utils/posts';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

interface IBlogPage {
  posts: any[];
}

export default function BlogPage({ posts }: IBlogPage) {
  console.log('posts:', posts);
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {posts.map(post => (
          <li key={post.id} className="text-lg hover:opacity-80">
            <Link href={`/SSG/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
