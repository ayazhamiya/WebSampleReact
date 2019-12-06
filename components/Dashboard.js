import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import React, { Component } from "react";


function Dashboard() {
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

export default Dashboard;