import { LoginForm } from '@/components/auth';
import { useAuth } from '@/hooks/useAuth';
import { LoginPayload } from '@/models';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { Box, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface ILoginPage {}

const LoginPage: React.FC<ILoginPage> = ({}) => {
  const router = useRouter();
  const { login } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLoginSubmit(payload: LoginPayload) {
    try {
      await login(payload);
      router.push('/');
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      toast.error(message);
    }
  }

  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          mx: 'auto',
          mt: 8,
          p: 4,
          maxWidth: '480px',
          textAlign: 'center',
        }}
      >
        <Typography component="h1" variant="h5" mb={3}>
          Easy Frontend - Login
        </Typography>

        <LoginForm onSubmit={handleLoginSubmit} />
      </Paper>
    </Box>
  );
};

export default LoginPage;
