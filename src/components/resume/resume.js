import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
            {/* Education
----------------------------------------------- */}
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Brainster Academy</h3>
                            <p className="info">Front-End development<span>•</span> <em className="date">May 2019</em></p>
                            <p>
                            Intensive education program with work on a several projects, simulation of real work and 
                            development of a real web applications in a interactive environment. Deep understanding of 
                            programming logic, from the programming language to the business strategy of the application. 
                            </p>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Metamorphosis</h3>
                            <p className="info">Web Design<span>•</span> <em className="date">March 2001</em></p>
                            <p>
                                Basic course for Web Design.
                            </p>
                        </div>
                    </div> {/* item end */}
                </div> {/* main-col end */}
            </div> {/* End Education */}
            {/* Work
----------------------------------------------- */}
            {/* <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Awesome Design Studio</h3>
                            <p className="info">Senior UX Designer <span>•</span> <em className="date">March 2010 - Present</em></p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                            </p>
                        </div>
                    </div> 
                    
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Super Cool Studio</h3>
                            <p className="info">UX Designer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                            <p>
                                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                            </p>
                        </div>
                    </div> 
                </div> 
            </div>  */}
            {/* Skills
----------------------------------------------- */}
            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <p>
                    
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            <li><span className="bar-expand html" /><em>HTML5</em></li>
                            <li><span className="bar-expand css3" /><em>CSS3</em></li>
                            <li><span className="bar-expand git" /><em>GIT</em></li>
                            <li><span className="bar-expand bootstrap" /><em>Bootstrap</em></li>
                            <li><span className="bar-expand responsive" /><em>Responsive design</em></li>
                            <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                            <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                            <li><span className="bar-expand ajax" /><em>AJAX</em></li>
                            <li><span className="bar-expand react" /><em>React</em></li>
                        </ul>
                    </div>{/* end skill-bars */}
                </div> {/* main-col end */}
            </div> {/* End skills */}
        </section>
      </React.Fragment>
    );
  }
}