import { Stack } from '@mui/material';

import Calendar from './Calendar';
import BalanceCardSmall from './BalanceCardSmall';

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
    </Stack>
  );
}

export default ExpensesPage;
