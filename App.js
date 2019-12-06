import React, { Component } from 'react';
import Dashboard from "./components/Dashboard";
import {Button, Navbar, Col, Row, Container} from 'react-bootstrap';
import { BrowserRouter as BrowserRouter, Switch, Route, Link } from "react-router-dom";
import TaskDetails from './components/TaskDetails';


class App extends Component{
   render(){
      return(
         <BrowserRouter>
         <Switch>
            <Route path="/" component={Dashboard}/>
            <Route path="/TaskDetails" component={TaskDetails}/>
         </Switch>
      </BrowserRouter>
      )
   }
}
export default App;