import React, { Component } from 'react';
import TaskCard from './TaskCard'
import taskData from './../taskData'
import {Container, Row, Col} from 'react-bootstrap'

class MainContent extends React.Component {
   constructor(props) {
         super(props)
      
   }
   render() {
      const taskComponents = taskData.map(function(task) {
         return (
            <TaskCard key={task.id} task={task}/>
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