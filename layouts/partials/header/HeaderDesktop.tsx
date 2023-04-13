import { Container, Stack, Link as MuiLink } from '@mui/material';
import { Box } from '@mui/system';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE_LIST } from './routes';

interface IHeaderDesktop {}

const HeaderDesktop: React.FC<IHeaderDesktop> = ({}) => {
  const router = useRouter();
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map(route => (
            <Link key={route.path} href={route.path} passHref legacyBehavior>
              <MuiLink
                sx={{ ml: 2, fontWeight: '500' }}
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderDesktop;
