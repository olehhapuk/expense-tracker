import { Stack } from '@mui/material';

import { Transaction } from '../../../types/Transaction';
import ExpensesListItem from './ExpensesListItem';

interface ExpensesListProps {
  expenses: Transaction[];
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <Stack gap="16px">
      {expenses.map((expense) => (
        <ExpensesListItem key={expense.id} expense={expense} budget={3000} />
      ))}
    </Stack>
  );
}

export default ExpensesList;
