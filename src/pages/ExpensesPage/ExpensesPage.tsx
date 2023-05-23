import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';

// import Calendar from './Calendar';
import SmallCalendar from './SmallCalendar';
import BalanceCardSmall from './BalanceCardSmall';
import Section from '../../components/Section';
import ExpensesList from './Expenses/ExpensesList';
import ButtonViewAll from '../../components/ButtonViewAll';
import { RootState } from '../../redux/store';

function ExpensesPage() {
  const card = useSelector((state: RootState) => state.card);

  return (
    <Stack gap="32px">
      {/* <Calendar /> */}
      <SmallCalendar />

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        gap="20px"
      >
        <BalanceCardSmall card={card} account="Bank Account" color="#8234F8" />
        <BalanceCardSmall card={card} account="Bank Account" color="#FF643B" />
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
