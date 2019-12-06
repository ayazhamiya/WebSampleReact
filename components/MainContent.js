import React, { Component } from 'react';
import TaskCard from './TaskCard';
import taskData from './../taskData';
import {Container, Row, Col} from 'react-bootstrap';
import { BrowserRouter as BrowserRouter, Switch, Route, Link } from "react-router-dom";

class MainContent extends React.Component {
   constructor(props) {
         super(props)
      
   }
   render() {
      const taskComponents = taskData.map(function(task) {
         return (
            <Link to={"/TaskDetails"}>
            <TaskCard key={task.id} task={task}/>
            </Link>
         )
      })
      return (
         <main className="Container">
            <div className="col">
               {taskComponents}
            </div >
            <div className="Col">
               Task Details
            </div>
         </main>
      )
   }
}
export default MainContent