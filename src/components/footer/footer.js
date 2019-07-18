import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="social">
          <footer>
            <div className="row">
              <h5>More about me, just around the corner:</h5>
              <div className="twelve columns">
                <ul className="social-links">
                  <li><a href="https://github.com/MirkoGjurik" target="_blank"><i class="fab fa-github one"></i></a></li>
                  <li><a href="https://www.facebook.com/Gjurik" target="_blank"><i className="fab fa-facebook-f two"></i></a></li>
                  <li><a href="https://twitter.com/Microdonia" target="_blank"><i class="fab fa-twitter three"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/mirko-gjurik-89699266/" target="_blank"><i className="fab fa-linkedin four"></i></a></li>
                  <li><a href="skype:mirko_gjurik?chat"><i class="fab fa-skype five"></i></a></li>
                </ul>
                <ul className="copyright">
                  <li>© Copyright 2019 Knudsen</li>
                  <li>Design by <a title="Styleshout" href="https://mail.google.com/mail/?view=cm&fs=1&to=gjurik@gmail.com" target="_blank">gjurik@gmail.com</a></li>   
                </ul>
              </div>
              <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
            </div>
          </footer>
        </section>
      </React.Fragment>
    );
  }
}