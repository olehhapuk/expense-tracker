import moment from 'moment';

export function getMonthLabel(idx: number, short?: boolean): string {
  const fullName = moment().month(idx).format('MMMM');
  return short ? fullName.slice(0, 3) : fullName;
}
