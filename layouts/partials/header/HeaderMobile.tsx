import { Box } from '@mui/material';

interface IHeaderMobile {}

const HeaderMobile: React.FC<IHeaderMobile> = ({}) => {
  return <Box display={{ xs: 'block', md: 'none' }}>Header Mobile</Box>;
};

export default HeaderMobile;
