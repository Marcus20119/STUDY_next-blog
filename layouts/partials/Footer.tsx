import { Box } from '@mui/material';

interface IFooter {}

const Footer: React.FC<IFooter> = ({}) => {
  return (
    <Box component="footer" py={2} textAlign="center">
      Footer
    </Box>
  );
};

export { Footer };
