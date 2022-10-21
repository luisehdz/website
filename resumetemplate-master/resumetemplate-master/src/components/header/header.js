import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 500);
  console.log('page to reload')
}
export default class Header extends Component {
  
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <React.Fragment>
      {/*generated code
             <li><a href="/resume/resume">Resume</a></li>*/}
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
            <li><Link to="/Portfolio" onClick={refreshPage}>Projects</Link></li>
            <li><Link to="/Resume " onClick={refreshPage}>Resume</Link></li>
            <li><Link to="/Contactus" onClick={refreshPage}>Contacts</Link></li>
            </ul>
          
         </nav>

      </React.Fragment>
    );
  }
}
