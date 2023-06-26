import './App.css';

import React, { Component } from 'react';

// import ShowUser from './Fetch/ShowUser';
// import App from './Fetch/product';
import BookTicket from './Components/Ticketdesign';

class Prod extends Component{
  render(){
    return (
      <>
         {/* <App></App> */}
         {/* <ShowUser></ShowUser> */}
         <BookTicket></BookTicket>
         
      </>
    );
  }
}

export default Prod;