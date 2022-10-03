import React, { Component } from 'react';
export default class APorfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>
              Some of my art!
          </h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
                <div className="columns portfolio-item">
                  <div className="item-wrap">       
                    <div className="row">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.aportfolio && resumeData.aportfolio.map((item)=>{
                      return(
                        <li>
                      <img src={`${item.imgurl}`} className="item-img"/>
                        </li>
                      )
                    }
                    )
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
