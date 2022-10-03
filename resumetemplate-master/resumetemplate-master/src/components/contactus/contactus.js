import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Get in touch with me at the following:
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                  <a href="mailto:smwess5682@outlook.com"><img src="images/outlooklogo.png"/> Email</a>
                </h4>
                <h4>
                  <a href="https://discordapp.com/users/212729296979099648"><img src="images/discordlogo.png"/> Discord</a>
                </h4>
                <h4>
                  <a href="https://www.linkedin.com/in/sky-wess-9ba370200/"><img src="images/linkedinlogo.png"/> Linkdin</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
