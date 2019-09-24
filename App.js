import React, { Component } from 'react';
class App extends Component{
   render(){
      return(
         <div>
            <h1 className="fooClass" id="fooID" aria-label="uniqe label" style={{background: 'red', color: 'white', fontSize:'105px', textAlign:'center'}}>Test for WkWebkit</h1>
            <div id="divID" class="divClass" title="divTitle" style={{fontSize:'100px'}}>foo bar</div>
            <div style={{fontSize:'100px'}}><a href="url" aria-label="linkId">link text</a></div>
            <div aria-label="img"><img src="https://www.gstatic.com/webp/gallery/1.jpg"></img></div>
         </div>
      );
   }
}
export default App;