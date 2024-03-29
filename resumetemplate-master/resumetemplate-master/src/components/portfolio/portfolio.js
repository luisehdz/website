import React, { Component } from 'react';
import Popup from '../popup/popup';

export default class Porfolio extends Component {
  
  render() {
    
    let resumeData = this.props.resumeData;
    
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check out my published projects!
            
          </h1>
          <main>
            <button onClick={true}> popup</button>
            
          </main>

          <Popup trigger={true}>
              <h3>assess</h3>
            </Popup>
          
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap"> 
                    <a href={item.link}>     
                      <div className="row">
                        <div className="flexslider">
                            <ul className="slides">
                              {
                                item.slides && item.slides.map((item)=>{
                                  return(
                                    <li>
                                    <img src={`${item.imgurl}`} className="item-img" alt=""/>
                                    </li>
                                  )
                                }
                                )
                              }
                      
                      
                            </ul>
                        </div> {/* div.flexslider ends */}
                      </div> {/* row ends */}    
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className="overlayicon">
                        <img src="../images/itchicon.png" alt=''/>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
      </section>
    );
  }
}
