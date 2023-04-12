import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Box, Typography } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Box>
      <h1></h1>
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>
    </Box>
  );
}
