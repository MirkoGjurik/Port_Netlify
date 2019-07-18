import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                    <li><a className="smoothscroll" href="#social">Contact</a></li>
                </ul> 
            </nav>
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline"><span>Hi!</span><br /><span>I'm</span> Mirko Gjurik</h1>
                    <h6>and</h6>
                    <h3>I'm a <span>Front-End Web Developer.</span><br />
                    Let's <a className="smoothscroll" href="#about"><span id="roll">(sc)</span>roll </a>
                        and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                    <hr />
                    <ul className="social">
                        <li><i id="html" class="fab fa-html5"></i></li>
                        <li><i id="css" class="fab fa-css3-alt"></i></li>
                        <li><i id="git" class="fab fa-git-alt"></i></li>
                        <li><i id="boot" class="fab fa-bootstrap"></i></li>
                        <li><i id="javas" class="fab fa-js-square"></i></li>
                        <li><i id="react" class="fab fa-react"></i></li>
                    </ul>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
        </header>
      </React.Fragment>
    );
  }
}