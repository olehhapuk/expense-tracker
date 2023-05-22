import { IconButton, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Button = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  color: theme.palette.warning.contrastText,
  width: '50px',
  height: '50px',
  '&:hover': {
    backgroundColor: theme.palette.warning.dark,
  },

  '& .MuiSvgIcon-root': {
    fontSize: '30px',
  },
}));

function AddButton() {
  return (
    <Button>
      <AddIcon />
    </Button>
  );
}

export default AddButton;
