import { styled, Stack, Avatar, Typography } from '@mui/material';

import { Transaction } from '../../../types/Transaction';

interface TransactionsListItemProps {
  transaction: Transaction;
}

const Item = styled(Stack)({
  backgroundColor: '#FAFAFA',
  borderRadius: '10px',
  padding: '10px',
});

function TransactionsListItem({ transaction }: TransactionsListItemProps) {
  return (
    <Item direction="row" gap="16px">
      <Avatar src={transaction.avatar} alt={transaction.target} />
      <Stack justifyContent="space-between" flexGrow={1}>
        <Typography fontSize="16px" fontWeight={500}>
          {transaction.target}
        </Typography>
        <Typography fontSize="12px" fontWeight={400} color="#A3A3A3">
          {transaction.account}
        </Typography>
      </Stack>
      <Stack justifyContent="space-between" textAlign="right">
        <Typography fontSize="18px" fontWeight={500} color="#2BB272">
          ${transaction.amount}
        </Typography>
        <Typography fontSize="12px" fontWeight={400} color="#A3A3A3">
          {transaction.time.toDateString()}
        </Typography>
      </Stack>
    </Item>
  );
}

export default TransactionsListItem;
