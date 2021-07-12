import React from 'react';
import TopNavbarContainer from './NavBar/TopNavBar/top_navbar_container';
import {Switch, Route} from 'react-router-dom';
export default () => {
  return (
    <div className="NavBarDiv">
      <Route path="/" component={TopNavbarContainer}/>
    </div>
  )
}
