import React, { Component } from 'react';
import App from '../../App';
import HolidayList from '../HolidayList/HolidayList';
import HolidayDetails from '../HolidayDetails/HolidayDetails';
import NewHolidayButton from '../NewHolidayButton/NewHolidayButton';
import NewHoliday from '../NewHoliday/NewHoliday';
import '../../App.css';

class SignedInHome extends Component {
  constructor() {
    super();
    this.initialState = {
      route: 'home',
      isSignedIn: true,
      holidays: [],
      holidayId: '',
      newHoliday: false,
    }
    this.state = this.initialState;
    //this.showHolidayDetails = this.showHolidayDetails.bind(this);
  }

  // fetchHolidayDetail = (holidayId) => {
  //   console.log(`http://localhost:8080/holiday/${holidayId}`);
  // }

  fetchHolidays = () => {
    return fetch('http://localhost:8080/holidays')
      .then(response => response.json())
      .then(holidays => this.setState({holidays: holidays}))
      .catch(err => console.log(err))
  }

  // this is where we control routing
  // we have two factors, the route, and a boolean determining
  // whether a user is signed in or not
  // The default route is the signin route.
  // once signed in, we should show Home
  // we can sign out, in that case we should go back to the initial state
  onRouteChange = (route) => {
    this.setState({route: route});
    if (route === 'signout') {
      this.setState(this.initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
  }

  componentDidMount() {
    this.fetchHolidays();
  }

  render() {
    const { isSignedIn, route, holidays, holidayId } = this.state;
    return (
      <div className='App'>
        { route === 'home'
          ? ( !(holidays.length)
            ? (<h1>Loading</h1>)
            : (
                <div>
                  <NewHolidayButton onRouteChange={this.onRouteChange}/>
                  <HolidayList
                    holidays={holidays}
                    //showHolidayDetails={this.showHolidayDetails}
                    //holidayId={holidayId}
                  />
                </div>
              )
            )
          : (
              route === 'holidayDetails'
              ? (
                  <div>
                    <HolidayDetails
                      holidayId={holidayId}
                    />
                  </div>
                )
              : (
                route === 'newHoliday'
                ? (
                  <div>
                    <NewHoliday onRouteChange={this.onRouteChange}/>
                  </div>
                )
                : null
              )
            )
        }
      </div>
    );
  }
}

export default SignedInHome;
