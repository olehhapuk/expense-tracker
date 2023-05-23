import { Stack } from '@mui/material';
import { useMemo } from 'react';

import AnalyticsChartLine from './AnalyticsChartLine';
import { mapRange } from '../../utils/math';
import { getMonthLabel } from '../../utils/date';
import { Revenue } from '../../types/Revenue';

interface AnalyticsChartProps {
  items: Revenue[];
}

const date = new Date();
const currentMonth = date.getMonth();
const minLineHeight = 30;
const maxLineHeight = 120;

function AnalyticsChart({ items }: AnalyticsChartProps) {
  const { minRevenue, maxRevenue } = useMemo(() => {
    const sortedByRevenue = [...items].sort((a, b) =>
      a.revenue > b.revenue ? 1 : -1
    );

    return {
      minRevenue: sortedByRevenue[0].revenue,
      maxRevenue: sortedByRevenue[sortedByRevenue.length - 1].revenue,
    };
  }, [items]);

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="end">
      {items.slice(0, 7).map(({ id, revenue, month }) => {
        const isActive = month === currentMonth;

        return (
          <AnalyticsChartLine
            key={id}
            isActive={isActive}
            revenue={revenue}
            height={mapRange(
              revenue,
              minRevenue,
              maxRevenue,
              minLineHeight,
              maxLineHeight
            )}
            month={getMonthLabel(month, true)}
          />
        );
      })}
    </Stack>
  );
}

export default AnalyticsChart;
