import React, { Component } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import TaskDetails from './components/TaskDetails'
import Footer from './components/Footer'
import {Button, Navbar, Col, Row, Container} from 'react-bootstrap'


class App extends Component{
   render(){
      return(
         <div className="">
            <div className="Navbar">
               <Header />
            </div>
            <div className="row">
               <div className="col">
                  <MainContent />
               </div> 
            </div>
            <div className="row">
               <Footer />
            </div>
         </div>
      )
   }
}
export default App;