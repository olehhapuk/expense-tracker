import { Stack } from '@mui/material';

import Calendar from './Calendar';
import BalanceCardSmall from './BalanceCardSmall';
import Section from '../../components/Section';
import ExpensesList from './Expenses/ExpensesList';
import ButtonViewAll from '../../components/ButtonViewAll';

function ExpensesPage() {
  return (
    <Stack gap="32px">
      <Calendar />
      <Stack direction="row" justifyContent="space-between" gap="20px">
        <BalanceCardSmall
          account="Bank Account"
          amount={76220}
          cardNumber="0000000000001965"
          color="#8234F8"
        />
        <BalanceCardSmall
          account="Bank Account"
          amount={76220}
          cardNumber="0000000000001965"
          color="#FF643B"
        />
      </Stack>

      <Section
        title="Expenses"
        endContent={<ButtonViewAll>View All</ButtonViewAll>}
      >
        <ExpensesList
          expenses={[
            {
              id: 'id-1',
              account: 'Bank Account',
              amount: 2486,
              target: 'Nike Super Store',
              time: new Date(),
              avatar: 'NS',
            },
            {
              id: 'id-2',
              account: 'Bank Account',
              amount: 952,
              target: 'Puma Store',
              time: new Date(),
              avatar: 'PS',
            },
          ]}
        />
      </Section>
    </Stack>
  );
}

export default ExpensesPage;
