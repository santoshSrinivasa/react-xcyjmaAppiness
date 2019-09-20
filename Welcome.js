import React from "react";
import {
  Route,
  Link,
  BrowserRouter,
  Switch
} from "react-router-dom";
import UserLogin from './UserLogin';
import SearchOptions from "./SearchOptions";
import styled from 'styled-components';

export default class Welcome extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
     <div>
      <BrowserRouter history>
      <div> 
        <NavBar>Welcome To Customer Pricing Map</NavBar>     
        <div>
        <Switch>
          <Route exact path="/" component={UserLogin} />
          <Route path="/searchOptions" component={SearchOptions} />
        </Switch>
        </div>
       </div>
       </BrowserRouter>
     </div>
     
    );
  }
}

const NavBar = styled.div`
  background-color:coral;
  height: 50px;
  text-align: center;
`;