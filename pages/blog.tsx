import MainLayout from '@/layouts/MainLayout';
import { NextPageWithLayout } from './_app';

const BlogPage: NextPageWithLayout = ({}) => {
  return <div>Blog Page</div>;
};

BlogPage.Layout = MainLayout;

export default BlogPage;
