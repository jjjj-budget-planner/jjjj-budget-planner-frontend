import React from 'react';

const HolidayList = ({ onRouteChange }) => {
  return (
    <div>
      <p onClick={() => onRouteChange('newHoliday')}
         className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
        >
        Add Holiday
      </p>
    </div>
  );
}


export default HolidayList;
