import { LayoutProps } from '@/pages/_app';
import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';
import { Footer, Header } from './partials';

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
};

export default MainLayout;
