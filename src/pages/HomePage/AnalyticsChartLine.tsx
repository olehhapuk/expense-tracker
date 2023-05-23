import { Box, Stack, Typography } from '@mui/material';

interface AnalyticsChartLineProps {
  isActive: boolean;
  revenue: number;
  height: number;
  month: string;
}

function AnalyticsChartLine({
  isActive,
  revenue,
  height,
  month,
}: AnalyticsChartLineProps) {
  return (
    <Stack alignItems="center">
      <Typography
        sx={{
          fontSize: '12px',
          lineHeight: '12px',
          marginBottom: '4px',
          color: isActive ? '#8234F8' : '#A3A3A3',
        }}
      >
        ${revenue}
      </Typography>
      <Box
        sx={{
          position: 'relative',
          height,
          width: '38px',
          backgroundColor: isActive ? '#8234F8' : '#FAFAFA',
          borderRadius: '6px 6px 0px 0px',
          marginBottom: '16px',
        }}
      />
      <Typography
        sx={{
          fontSize: '14px',
          color: isActive ? '#8234F8' : '#A3A3A3',
        }}
      >
        {month}
      </Typography>
    </Stack>
  );
}

export default AnalyticsChartLine;
