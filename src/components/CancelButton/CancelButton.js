import React from 'react';

const CancelButton = ({ onRouteChange }) => {
  return (
    <div>
      <p onClick={() => onRouteChange('cancelNewHoliday')}
         className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
        >
        Cancel
      </p>
    </div>
  );
}


export default CancelButton;
