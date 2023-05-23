import { Stack } from '@mui/material';
import { useState } from 'react';

import BalanceCard from './BalanceCard';
import Section from '../../components/Section';
import YearSelect from './YearSelect';
import AnalyticsChart from './AnalyticsChart';

const date = new Date();
const currentYear = date.getFullYear();
const availableYears = new Array(5).fill(0).map((_, i) => ({
  key: i.toString(),
  value: currentYear - i,
  label: `Year - ${currentYear - i}`,
}));

const revenueData = [
  {
    key: 'id-1',
    month: 0,
    revenue: 1234,
  },
  {
    key: 'id-2',
    month: 1,
    revenue: 2234,
  },
  {
    key: 'id-3',
    month: 2,
    revenue: 5234,
  },
  {
    key: 'id-4',
    month: 3,
    revenue: 2234,
  },
  {
    key: 'id-5',
    month: 4,
    revenue: 1000,
  },
  {
    key: 'id-6',
    month: 5,
    revenue: 2900,
  },
  {
    key: 'id-7',
    month: 6,
    revenue: 3900,
  },
];

function HomePage() {
  const [year, setYear] = useState(currentYear);

  return (
    <Stack gap="32px">
      <BalanceCard />

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
        <AnalyticsChart items={revenueData} />
      </Section>
    </Stack>
  );
}

export default HomePage;
