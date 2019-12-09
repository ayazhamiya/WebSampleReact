import React, { Component } from 'react';
import TaskCard from './TaskCard'
import taskData from './../taskData'
import {Container, Row, Col} from 'react-bootstrap'
import TaskDetails from './TaskDetails'

class MainContent extends React.Component {
   constructor(props) {
         super(props)
         this.state = { 
            taskDetails: ''
         }
      this.fetchData = this.fetchData.bind(this)   
      
   }

   fetchData (obj) {
      this.setState({
         taskDetails: obj
      })
   }

   render() {
      const taskComponents = taskData.map(function(task) {
         return (
            <TaskCard fetchData={this.fetchData} key={task.id} task={task}  />
         )
      })
      return (
         <main className="Container">
            <div className="col">
               {taskComponents}
               {/* <TaskCard key={taskData[1].id} task={taskData[1]} fetchData={this.fetchData}/> */}
            </div >
            <div className="Col">
               {this.state.taskDetails.id}
               {/* <TaskDetails task={this.state.taskDetails}/> */}
            </div>
         </main>
      )
   }
}
export default MainContent