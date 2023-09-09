import { clone } from 'radash';

import * as dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

function sortRecrodsByDate(records, sortByKey) {
  const copiedRecords = clone(records);
  copiedRecords.sort((a, b) => (dayjs(b[sortByKey]).isAfter(dayjs(a[sortByKey])) ? 1 : -1));
  return copiedRecords;
}

function groupRecordsByDate(records, dateKey) {
  const dateMap = new Map();

  records.forEach((record) => {
    const uniqueDate = dayjs(record[dateKey]).format('YYYY-MM-DD');
    if (dateMap.has(uniqueDate)) {
      dateMap.get(uniqueDate).push(record);
    } else {
      dateMap.set(uniqueDate, [record]);
    }
  });

  return dateMap;
}

export { sortRecrodsByDate, groupRecordsByDate };
