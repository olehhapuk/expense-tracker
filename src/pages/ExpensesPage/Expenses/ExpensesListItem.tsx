import {
  styled,
  Stack,
  Avatar,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from '@mui/material';

import { Transaction } from '../../../types/Transaction';

interface ExpensesListItemProps {
  expense: Transaction;
  budget: number;
}

const Item = styled('div')({
  backgroundColor: '#FAFAFA',
  borderRadius: '10px',
  padding: '20px 14px',
});

const ItemHeader = styled(Stack)({
  marginBottom: '24px',
});

const StyledTableHead = styled(TableHead)({
  '& .MuiTableCell-head': {
    padding: 0,
    paddingBottom: '16px',
    color: '#615C5C',
    fontSize: '16px',
    fontWeight: 400,
    border: 'none',
  },
});

const StyledTableCell = styled(TableCell)(({ color }) => ({
  border: 'none',
  padding: 0,
  color,
  fontSize: '18px',
  fontWeight: 500,
}));

const ProgressLine = styled(Box)({
  height: '14px',
  borderRadius: '14px',
  backgroundColor: '#8635F7',
});

function ExpensesListItem({ expense, budget }: ExpensesListItemProps) {
  const percentage = Math.round((expense.amount / budget) * 100 * 100) / 100;

  return (
    <Item>
      <ItemHeader direction="row" gap="16px">
        <Avatar>{expense.avatar}</Avatar>
        <Stack justifyContent="space-between" flexGrow={1}>
          <Typography fontSize="16px" fontWeight={500}>
            {expense.target}
          </Typography>
          <Typography fontSize="12px" fontWeight={400} color="#A3A3A3">
            {expense.account}
          </Typography>
        </Stack>
        <Typography fontSize="12px" fontWeight={400} color="#A3A3A3">
          {expense.time.toDateString()}
        </Typography>
      </ItemHeader>

      <Table size="small" sx={{ marginBottom: '16px' }}>
        <StyledTableHead>
          <TableRow>
            <TableCell>Total Spend</TableCell>
            <TableCell>Total Budget</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell color="#2BB272">${expense.amount}</StyledTableCell>
            <StyledTableCell>${budget}</StyledTableCell>
            <StyledTableCell color="#2BB272" align="right">
              {percentage}%
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
      <ProgressLine width={`${percentage}%`} />
    </Item>
  );
}

export default ExpensesListItem;
