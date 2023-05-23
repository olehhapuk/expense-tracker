import { Stack } from '@mui/material';

import { Transaction } from '../../../types/Transaction';
import TransactionsListItem from './TransactionsListItem';

interface TransactionsListProps {
  transactions: Transaction[];
}

function TransactionsList({ transactions }: TransactionsListProps) {
  return (
    <Stack gap="16px">
      {transactions.map((transaction) => (
        <TransactionsListItem key={transaction.id} transaction={transaction} />
      ))}
    </Stack>
  );
}

export default TransactionsList;
