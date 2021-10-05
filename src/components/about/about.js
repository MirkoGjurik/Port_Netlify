import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    {/* A tireless individual eager for success! */}
                    <p>Not a ninja.<br />
                    A person devoted to work, communicative team player, with know-how of what he’s doing 
                    and with desire for constant improvement and success. 
                    Always hungry for new stuff, new technolоgies, new informations, new trends...
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>Mirko Gjurik</span><br />
                                <span>Naroden front 13/57<br />
                                      1000 Skopje, Macedonia
                                </span><br />
                                <span>+389 (0)71-293-886</span><br />
                                <span><a href="https://mail.google.com/mail/?view=cm&fs=1&to=gjurik@gmail.com" target="_blank">gjurik@gmail.com</a></span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href="https://drive.google.com/file/d/1XzWnmZNRFlYzXHdDd4PVPqK7DQ4V2mu9/view?usp=sharing" target="_blank" download="CV-Mirko Gjurik.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                            </p>
                        </div>
                    </div> {/* end row */}
                </div> {/* end .main-col */}
            </div>
        </section>
      </React.Fragment>
    );
  }
}
