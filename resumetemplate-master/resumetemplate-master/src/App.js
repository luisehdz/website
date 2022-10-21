import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import APortfolio from './components/aportfolio/aportfolio';
import UPortfolio from './components/uportfolio/uportfolio';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import Contactus from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <Header />
      <Routes>
          
          <Route exact path='/' element={<Portfolio resumeData={resumeData}/>} />
          <Route exact path='/Resume' element={<Resume resumeData={resumeData}/>} />
          <Route path='/Portfolio' element={<Portfolio resumeData={resumeData}/>} />
          <Route path='/Contactus' element={<Contactus resumeData={resumeData}/>} />
      </Routes>
      </Router>
      </div>
    );
  }
}

export default App;
