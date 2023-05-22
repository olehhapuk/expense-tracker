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

const NotificationsBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: 8,
    top: 7,
    minWidth: '10px',
    minHeight: '10px',
  },
}));

function Navbar() {
  return (
    <Container maxWidth="xs">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ paddingY: 3 }}
      >
        <Avatar alt="John Doe" variant="rounded">
          JD
        </Avatar>
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
