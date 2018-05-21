import React, { Component } from 'react';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import SignedInHome from './components/SignedInHome/SignedInHome';
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

  // showHolidayDetails = (event) => {
  //   console.log(event);
  // }

  onSignIn = () => {
    this.onRouteChange('home');
    /*this.fetchHolidays();*/
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
        {
          route === 'signin'
          ? (
              <div>
                <Description />
                <SignIn
                  onRouteChange={this.onRouteChange}
                  onSignIn={this.onSignIn}
                />
              </div>
            )
          : (
              route === 'home'
              ? (
                <div>
                  <SignedInHome />
                </div>
              )
              : (
                  <Register onRouteChange={this.onRouteChange}/>
              )
            )
        }
      </div>
    );
  }
}

export default App;
