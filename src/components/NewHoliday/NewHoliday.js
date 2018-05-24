import React from 'react';
import CancelButton from '../CancelButton/CancelButton';

class NewHoliday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: '',
      travelDate: '',
    }
  }

  onDestinationChange = (event) => {
    this.setState({destination: event.target.value})
  }

  onTravelDateChange = (event) => {
    this.setState({travelDate: event.target.value})
  }

  onSubmitNewHoliday = () => {
    fetch('http://localhost:8080/holidays', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: 1,
        destination: this.state.destination,
        date: this.state.travelDate
      })
    })
      //.then(response => response.json())
    .then(user => {
        this.props.onRouteChange('newHolidayAdded');
        //this.props.onRouteChange('home');
        console.log('NEW HOLIDAY ADDED');
    })
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="newHoliday" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">New holiday</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Destination</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="destination"
                  id="destination"
                  onChange={this.onDestinationChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Date of travel</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="date"
                  name="travelDate"
                  id="travelDate"
                  onChange={this.onTravelDateChange}
                />
              </div>
            </fieldset>
            <div className="">
              <div>
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Register"
                  onClick={this.onSubmitNewHoliday}
                />
                <CancelButton onRouteChange={this.props.onRouteChange}/>
              </div>
            </div>
          </div>
        </main>
      </article>
    );
  }
}


export default NewHoliday;
