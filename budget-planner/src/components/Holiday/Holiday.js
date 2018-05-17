import React, { Component } from 'react';

class Holiday extends Component {
  constructor(props) {
      super(props);
      this.state = {
          id: props.id,
          destination: props.destination,
          travelDate: props.travelDate,
          //countryCode: this.getCountryCode(props.destination),
          imageSrc: 'http://www.countryflags.io/GB/flat/64.png',
          showHolidayDetails: props.showHolidayDetails,
      };
  }

  getImageSrc = (destination) => {
    //console.log(destination);
    return fetch(`https://restcountries.eu/rest/v2/name/${destination}`)
    .then(response => response.json())
    .then(response => response[0].alpha2Code)
    .then(countryCode => `http://www.countryflags.io/${countryCode}/flat/64.png`)
    .then(imageUrl => this.setState({imageSrc: imageUrl}))
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getImageSrc(this.state.destination);
  }

  render() {
      const { destination, travelDate, imageSrc, showHolidayDetails } = this.state;
      //const imageSrc = this.getImageSrc(countryCode);
      console.log(travelDate);
      return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
          <img
            onClick={showHolidayDetails}
            alt='holidays'
            src={imageSrc}
          />
          <div>
            <h3>{destination}</h3>
            <h3>{travelDate}</h3>
          </div>
        </div>
      );
  }

}

export default Holiday;
