import ReactCalendar from 'react-calendar';

import './Calendar.css';

function Calendar() {
  return (
    <ReactCalendar
      locale="en"
      next2Label={null}
      prev2Label={null}
      tileClassName={({ date }) =>
        date.getDate() % 2 === 0
          ? ['react-calendar__tile', 'react-calendar__tile_event']
          : 'react-calendar__tile'
      }
      maxDetail="month"
    />
  );
}

export default Calendar;
