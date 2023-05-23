import {
  styled,
  alpha,
  Button,
  IconButton,
  Stack,
  Typography,
  ButtonProps,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CalendarRoot = styled('div')({
  backgroundColor: '#fafafa',
  borderRadius: '20px',
  padding: '12px 5px',
  color: '#615C5C',
  fontSize: '16px',
  fontWeight: 400,
});

const Header = styled(Stack)({
  marginBottom: '20px',
});

const HeaderArrow = styled(IconButton)();

const HeaderLabel = styled(Typography)({
  fontSize: '16px',
  fontWeight: 500,
});

const WeekDaysRow = styled(Stack)({
  marginBottom: '14px',
});

const WeekDay = styled(Typography)(({ active }: { active?: boolean }) => ({
  flexBasis: 'calc(100% / 7)',
  textAlign: 'center',
  fontWeight: active ? 700 : 400,
}));

const DaysRow = styled(Stack)();

const Day = styled('div')({
  flexBasis: 'calc(100% / 7)',
  height: '57px',
  font: 'inherit',
  color: 'inherit',
  textAlign: 'center',
});

interface DayButtonProps extends ButtonProps {
  active?: boolean;
}

const DayButton = styled(Button)<DayButtonProps>(({ active, theme }) => ({
  minWidth: '39px',
  width: '39px',
  height: '57px',
  color: active ? '#fff' : 'inherit',
  font: 'inherit',
  fontWeight: active ? 700 : 400,
  backgroundColor: active ? '#FF643B' : 'transparent',
  borderRadius: '8px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingTop: '12px',
  paddingBottom: '9px',

  '&:hover': {
    backgroundColor: active ? theme.palette.warning.dark : alpha('#ccc', 0.3),
  },
}));

const DayLabel = styled(Typography)({
  font: 'inherit',
});

const DayEventIcon = styled('div')(({ active }: { active?: boolean }) => ({
  width: '6px',
  height: '6px',
  backgroundColor: active ? '#fff' : '#A3A3A3',
  borderRadius: '50%',
}));

function SmallCalendar() {
  return (
    <CalendarRoot>
      <Header
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <HeaderArrow>
          <ChevronLeftIcon />
        </HeaderArrow>
        <HeaderLabel>April 2022</HeaderLabel>
        <HeaderArrow>
          <ChevronRightIcon />
        </HeaderArrow>
      </Header>

      <WeekDaysRow direction="row">
        <WeekDay>M</WeekDay>
        <WeekDay>T</WeekDay>
        <WeekDay>W</WeekDay>
        <WeekDay>T</WeekDay>
        <WeekDay active>F</WeekDay>
        <WeekDay>S</WeekDay>
        <WeekDay>S</WeekDay>
      </WeekDaysRow>

      <DaysRow direction="row" justifyContent="space-between">
        {new Array(7).fill(0).map((_, i) => {
          const active = i === 4;

          return (
            <Day key={i}>
              <DayButton active={active}>
                <DayLabel>{20 + i}</DayLabel>
                <DayEventIcon active={active} />
              </DayButton>
            </Day>
          );
        })}
      </DaysRow>
    </CalendarRoot>
  );
}

export default SmallCalendar;
