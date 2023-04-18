import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import MainLayout from '@/layouts/MainLayout';
import { NextPageWithLayout } from './_app';
import { HeroSection } from '@/components/home';
import RecentPostsSection from '@/components/home/recentPosts';
import FeatureWorksSection from '@/components/home/featuredWorks';
import { SEO } from '@/components/common';

const HomePage: NextPageWithLayout = ({}) => {
  return (
    <>
      <SEO title="Next Blog | Home" description="" url="" thumbnailUrl="" />
      <HeroSection />
      <RecentPostsSection />
      <FeatureWorksSection />
    </>
  );
};

HomePage.Layout = MainLayout;

export default HomePage;
