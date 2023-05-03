import { useAuth } from '@/hooks';
import { Container, Stack, Link as MuiLink } from '@mui/material';
import { Box } from '@mui/system';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE_LIST } from './routes';

interface IHeaderDesktop {}

const HeaderDesktop: React.FC<IHeaderDesktop> = ({}) => {
  const router = useRouter();
  const { profile, logout } = useAuth();
  const isLoggedIn = Boolean(profile?.username);

  const routeList = ROUTE_LIST.filter(
    route => !route.requireLogin || isLoggedIn
  );

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {routeList.map(route => (
            <Link key={route.path} href={route.path} passHref legacyBehavior>
              <MuiLink
                sx={{ ml: 2, fontWeight: '500' }}
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
          {!isLoggedIn && (
            <Link href="/login" passHref legacyBehavior>
              <MuiLink sx={{ ml: 2, fontWeight: 'medium' }}>Login</MuiLink>
            </Link>
          )}

          {isLoggedIn && (
            <MuiLink
              sx={{ ml: 2, fontWeight: 'medium', cursor: 'pointer' }}
              onClick={logout}
            >
              Logout
            </MuiLink>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderDesktop;
