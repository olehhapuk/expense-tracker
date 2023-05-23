import { Typography, Stack } from '@mui/material';

interface SectionProps {
  title: string;
  children?: React.ReactNode;
  endContent?: React.ReactNode;
}

function Section({ title, endContent, children }: SectionProps) {
  return (
    <section>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="24px"
      >
        <Typography variant="h2" fontSize="24px" fontWeight="500">
          {title}
        </Typography>
        {endContent}
      </Stack>
      {children}
    </section>
  );
}

export default Section;
