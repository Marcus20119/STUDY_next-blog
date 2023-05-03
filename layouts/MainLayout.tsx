import { LayoutProps } from '@/pages/_app';
import { Box, Container, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Footer } from './partials';

// Vì header bên phía server ban đầu sẽ ở dạng chưa login, sang phía client check trên localStorage mới trả về header dạng đã login rồi => component tree phía server và component tree được render lần đầu tiên phía client sẽ khác nhau => Nextjs sẽ báo lỗi not match
/**
 * Có 2 cách giải quyết trong trường hợp này:
 * - Cách 1: Cho phía client render lần đầu giống phía server rồi cho nó render lại một lần nữa bằng state và useEffect => Mất công
 * - Cách 2: Cho Component xảy ra tình trạng not match này được render dưới dạng CSR như Header phía bên dưới => Đơn giản nhưng không thân thiện với SEO
 */
const Header = dynamic(() => import('./partials/header/Header'), {
  ssr: false,
});

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
