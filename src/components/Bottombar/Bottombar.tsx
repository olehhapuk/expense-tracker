import { Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import WalletIcon from '@mui/icons-material/Wallet';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation } from 'react-router-dom';

import { urls } from '../../config/router';
import DefaultButton from './DefaultButton';
import AddButton from './AddButton';

const BottombarContainer = styled(Container)(() => ({
  boxShadow: '0px -1px 4px rgba(0, 0, 0, 0.09)',
  height: '90px',
}));

function Bottombar() {
  const { pathname } = useLocation();

  return (
    <BottombarContainer maxWidth="xs">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <DefaultButton active={pathname === urls.home} icon={HomeIcon} to="/" />
        <DefaultButton
          active={pathname === urls.expenses}
          icon={WalletIcon}
          to="/expenses"
        />
        <AddButton />
        <DefaultButton icon={CalendarTodayIcon} to="/" />
        <DefaultButton icon={SettingsIcon} to="/" />
      </Stack>
    </BottombarContainer>
  );
}

export default Bottombar;
