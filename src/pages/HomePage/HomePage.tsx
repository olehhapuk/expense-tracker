import { Stack } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import BalanceCard from './BalanceCard';
import Section from '../../components/Section';
import YearSelect from './YearSelect';
import AnalyticsChart from './AnalyticsChart';
import TransactionsList from './Transactions/TransactionsList';
import ButtonViewAll from '../../components/ButtonViewAll';
import { RootState } from '../../redux/store';

const date = new Date();
const currentYear = date.getFullYear();
const availableYears = new Array(5).fill(0).map((_, i) => ({
  key: i.toString(),
  value: currentYear - i,
  label: `Year - ${currentYear - i}`,
}));

function HomePage() {
  const [year, setYear] = useState(currentYear);

  const card = useSelector((state: RootState) => state.card);
  const analytics = useSelector((state: RootState) => state.analytics);

  return (
    <Stack gap="32px">
      <BalanceCard card={card} />

      <Section
        title="Analytics"
        endContent={
          <YearSelect
            value={year}
            onChange={(e) => setYear(e.target.value as number)}
            items={availableYears}
          />
        }
      >
        <AnalyticsChart items={analytics} />
      </Section>

      <Section
        title="Transactions"
        endContent={<ButtonViewAll>View All</ButtonViewAll>}
      >
        <TransactionsList
          transactions={[
            {
              id: 'id-1',
              account: 'Bank Account',
              amount: 475,
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

export default HomePage;
