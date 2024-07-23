import { Dayjs } from 'dayjs';

export const formatDate = (date: Dayjs): string => date.format('YYYY-MM-DD');
