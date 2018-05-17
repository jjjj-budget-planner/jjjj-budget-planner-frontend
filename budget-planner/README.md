# Budget Planner

{{toc}}

## Requirements

To create a web app for users to organise finances for holidays or trips away between friends. The app will help you overcome the issue of budgeting and splitting cost fairly amongst the group.

Key requirements:

* Each user must have their own user account. Therefore, they must be able to register and then sign in.
* Once logged in, the landing page must be the users view of their holidays
* By clicking on a holiday, a user will be able to see details about the holiday, including trip name, the destination, the date, and their travel companions
* A user must be able to create holidays, this will require information about the trip: name, destination and dates
* Additionally, a user can then add companions to the holiday

## Structure

We will be using React to build this app. As a result, the app will be component-based, with components written in Javascript. The app will be a single page app, with components re-rendered based on a user's interactions.

We shall use wireframes (wireframe.cc) to design the app before coding it.

### Components

This is a single page app made up of components. Some components are visible on every route. Some, however, are not, for example the registration form.

#### Banner

The Banner component contains the banner for the web app. It is a text component that contains the name of the app: "Budget Planner"

#### Navigation

The Navigation component is a set of links purpose of navigation around the site. These are dynamic components that vary depending on the state (more below).

Initially, before a user signs in, there will be two links:

* Sign In
* Register

By clicking these, you will be taken to the respective pages.

Once signed in, the links will change to show:

* Sign Out

Clicking this will return the user to the landing page and reset the state.

As the Navigation component is dynamic, it calls functions based on user interaction ("onClick"). The class takes parameters that are passed in from App.js:

* onRouteChange
* isSignedIn

onRouteChange contains the method to be called when there is a user interaction, in this case, onClick.

isSignedIn is a boolean that is used in an "if" statement to determine which links should be displayed.

#### Description

The Description component is a static text component, displaying sales-like information about why a user should use our app.

#### Sign In

The SignIn component contains a form for a user to sign in to their account. If a user has not yet registered, there is a link to the registration form.

There are no inout parameters to the class.

The form contains for following informations:

* Email: type email
* Password: type password

On Submit we call the sign in API...

#### Register

The Register component contains a form for the user to create a new user account.

There are no input parameters to the class.

The form contains for following informations:

* Name: type name
* Email: type email
* Password: type password

On Submit we call the register API...

#### Holidays

At the moment this is text saying "hello"

### Screens

We have the following states, or screens. They are comprised of the components listed above.

All pages will comprise:

* Banner
* Navigation

#### Landing Page

When a user first visits the site, they should be faced with the header, logo, a description of what the app does, and a button and a user & password field to login, or a link to register.

The wireframe can be found [here](https://wireframe.cc/XunyqG) on wireframe.cc.

From there, we can navigate around the site.

It is made up of the following additional components:

* Description
* Sign In

#### Registration

The place where a user can register.

It is made up of the following additional components:

* Register

#### Home Page

Once a user has signed in, this will be what greets them. This should be the dashboard for a user to view and manage their holidays.

It is made up of the following additional components:

* Holidays

### Routing

At this stage we have the following routes:

1. signin: the landing page with the description, and sign-in form and links to register
2. register: the register form
3. home: once signed in, a user is presented with their list of holidays
4. signout: a user has signed out, this returns us to the landing page

### State

We have the following properties in the state:

#### isSignedIn

Type: Boolean
Default: False
Description: defines whether a user has signed in or not

## Styling

We're going to use a nice CSS library called tachyons. We must install it using:

~~~
npm install tachyons
~~~

For  me, there is a dependency that I needed to install called ajv:

~~~
npm install ajv
~~~

We then import tachyons in index.js.
