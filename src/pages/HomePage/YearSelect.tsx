import { MenuItem, Select, SelectChangeEvent, styled } from '@mui/material';

const YearSelectRoot = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  color: theme.palette.warning.contrastText,
  fontSize: '14px',
  borderRadius: '10px',
  height: '36px',

  '&::before, &::after': {
    display: 'none',
  },

  '& .MuiSelect-select': {
    padding: '11px 10px',
    paddingRight: '30px !important',
  },

  '& .MuiSvgIcon-root': {
    color: 'inherit',
    fontSize: '30px',
  },
}));

interface YearSelectProps {
  items: { key: string; value: number; label: string }[];
  value: number;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}

function YearSelect({ items, value, onChange }: YearSelectProps) {
  return (
    <YearSelectRoot value={value} onChange={onChange} variant="standard">
      {items.map((item) => (
        <MenuItem key={item.key} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </YearSelectRoot>
  );
}

export default YearSelect;
