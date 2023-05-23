import { Stack } from '@mui/material';
import { useState } from 'react';

import BalanceCard from './BalanceCard';
import Section from '../../components/Section';
import YearSelect from './YearSelect';

const date = new Date();
const currentYear = date.getFullYear();
const availableYears = new Array(5).fill(0).map((_, i) => ({
  key: i.toString(),
  value: currentYear - i,
  label: `Year - ${currentYear - i}`,
}));

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
        Content
      </Section>
    </Stack>
  );
}

export default HomePage;
