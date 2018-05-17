import React from 'react';
import Holiday from './../Holiday/Holiday';

const formatDate = (inputDate) => {
  return inputDate.substring(6,8) + '/' + inputDate.substring(4,6) + '/' + inputDate.substring(0,4)
}

const HolidayList = ({ holidays, showHolidayDetails }) => {
  return (
    <div>
      {holidays.map((trip, i) => {
        return (
          <Holiday
          key={holidays[i].id}
          id={holidays[i].id}
          destination={holidays[i].destination}
          travelDate={formatDate(holidays[i].date)}
          showHolidayDetails={showHolidayDetails}
          />
        );
      })}
    </div>
  );
}


export default HolidayList;
