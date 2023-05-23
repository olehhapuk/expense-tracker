import {
  Avatar,
  Typography,
  Stack,
  IconButton,
  Badge,
  Container,
  styled,
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const NotificationsBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: 8,
    top: 7,
    minWidth: '10px',
    minHeight: '10px',
  },
}));

function Navbar() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Container maxWidth="xs">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ paddingY: 3 }}
      >
        <Avatar src={user.avatar} alt={user.username} variant="rounded" />
        <Typography variant="h6">Home</Typography>
        <IconButton>
          <NotificationsBadge variant="dot" color="warning">
            <NotificationsNoneIcon color="action" sx={{ fontSize: 28 }} />
          </NotificationsBadge>
        </IconButton>
      </Stack>
    </Container>
  );
}

export default Navbar;
