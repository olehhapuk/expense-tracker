import { IconButton, SvgIcon } from '@mui/material';
import { Link } from 'react-router-dom';

interface DefaultButtonProps {
  icon: typeof SvgIcon;
  active?: boolean;
  to: string;
}

function DefaultButton({ icon: Icon, active, to }: DefaultButtonProps) {
  return (
    <IconButton color={active ? 'warning' : 'default'} component={Link} to={to}>
      <Icon sx={{ fontSize: '30px' }} />
    </IconButton>
  );
}

export default DefaultButton;
