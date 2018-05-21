import React, { Component } from 'react';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import HolidayList from './components/HolidayList/HolidayList';
import HolidayDetails from './components/HolidayDetails/HolidayDetails';
import NewHolidayButton from './components/NewHolidayButton/NewHolidayButton';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.initialState = {
      route: 'signin',
      isSignedIn: false,
      holidays: [],
      holidayId: '',
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

  // showHolidayDetails = (event) => {
  //   console.log(event);
  // }

  onSignIn = () => {
    this.onRouteChange('home');
    this.fetchHolidays();
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

  render() {
    const { isSignedIn, route, holidays, holidayId } = this.state;
    return (
      <div className='App'>
        <Navigation  isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        <Banner />
        { route === 'home'
          ? ( !(holidays.length)
            ? <h1>Loading</h1>
            : <div>
                <NewHolidayButton onRouteChange={this.onRouteChange}/>
                <HolidayList
                  holidays={holidays}
                  //showHolidayDetails={this.showHolidayDetails}
                  //holidayId={holidayId}
                />
              </div>
            )
          : (
              route === 'holidayDetails'
              ? <div>
                  <HolidayDetails holidayId={holidayId}/>
                </div>
                : (
                  route === 'signin'
                  ? <div>
                      <Description />
                      <SignIn
                        onRouteChange={this.onRouteChange}
                        onSignIn={this.onSignIn}
                      />
                    </div>
                    : <Register onRouteChange={this.onRouteChange}/>
                )
            )
        }
      </div>
    );
  }
}

export default App;
