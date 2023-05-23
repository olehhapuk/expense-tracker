import { Stack } from '@mui/material';

import ExpensesListItem from './ExpensesListItem';
import { Expense } from '../../../types/Expense';

interface ExpensesListProps {
  expenses: Expense[];
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <Stack gap="16px">
      {expenses.map((expense) => (
        <ExpensesListItem key={expense.id} expense={expense} />
      ))}
    </Stack>
  );
}

export default ExpensesList;
