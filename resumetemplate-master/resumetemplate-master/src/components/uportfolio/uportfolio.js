import React, { Component } from 'react';
export default class UPorfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Unpublished projects
            
          </h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
                <div className="columns portfolio-item">
                  <div className="item-wrap">  
                    <div className="row">
              <div className="flexslider">
                <ul className="slides">
                  {
            resumeData.uportfolio && resumeData.uportfolio.map((item)=>{
              return(
                        <li>
                      <img src={`${item.imgurl}`} className="item-img"/>
                <div className="overlay">
                        <div className="uportfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                        </li>
              )
            })
                  }
                  
                  
                </ul>
              </div> {/* div.flexslider ends */}    
                      
          </div> {/* row ends */}
                  </div>
                </div>
                }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
