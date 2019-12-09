import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import QierPlayer from 'qier-player';

class MainPlayer extends React.Component {

   render() {
    blob:http://www.compuglobal.top/83b14cd7-d311-4256-80dd-79ea2cc22030
      let url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      let url1 = "http://www.compuglobal.top/83b14cd7-d311-4256-80dd-79ea2cc22030"
      return (
         <div className="Container">
            <QierPlayer srcOrigin={url1} />
         </div>
      )
   }
}
export default MainPlayer