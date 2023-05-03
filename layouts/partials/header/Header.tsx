import { Box } from '@mui/material';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
};

export default Header;
