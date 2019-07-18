import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
<section id="contact">
  <div className="row section-head">
    <div className="two columns header-col">
      <h1><span>Get In Touch.</span></h1>
    </div>
    <div className="ten columns">
      <p className="lead">
        Feel free to contact me by Email!
      </p>
    </div>
  </div>
  <div className="row">
    {/* <div className="eight columns">
      * form *
      <form action="https://formspree.io/gjurik@gmail.com" method="POST" id="contactForm" name="name">
        <fieldset>
          <div>
            <label htmlFor="contactName">Name <span className="required">*</span></label>
            <input type="text" defaultValue={""} size={35} id="contactName" name="name" />
          </div>
          <div>
            <label htmlFor="contactEmail">Email <span className="required">*</span></label>
            <input type="email" defaultValue={""} size={35} id="contactEmail" name="email" />
          </div>
          <div>
            <label htmlFor="contactSubject">Subject</label>
            <input type="text" defaultValue={""} size={35} id="contactSubject" name="subject" />
          </div>
          <div>
            <label htmlFor="contactMessage">Message <span className="required">*</span></label>
            <textarea cols={50} rows={7} id="contactMessage" name="message" defaultValue={""} />
          </div>
          <div>
            <button className="submit" type="submit" name="submit" value="Submit">Submit</button>
            <span id="image-loader">
              <img alt src="images/loader.gif" />
            </span>
          </div>
        </fieldset>
      </form> * Form End *
      * contact-warning *
      <div id="message-warning"> Error boy</div>
      * contact-success *
      <div id="message-success">
        <i className="fa fa-check" />Your message was sent, thank you!<br />
      </div>
    </div> */}
    <aside className="four columns footer-widgets">
      <div className="widget widget_contact">
        <h4>Address and Phone</h4>
        <p className="address">
          <span>Mirko Gjurik</span><br />
          Naroden front 13/57 <br />
          1000 Skopje, Macedonia<br />
          +389 (0)71 293 886<br />
          <span><a href="https://mail.google.com/mail/?view=cm&fs=1&to=gjurik@gmail.com" target="_blank">gjurik@gmail.com</a></span>
        </p>
      </div>
      {/* <div className="widget widget_tweets">
        <h4 className="widget-title">Latest Tweets</h4>
        <ul id="twitter">
          <li>
            <span>
              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
              <a href="#">http://t.co/CGIrdxIlI3</a>
            </span>
            <b><a href="#">2 Days Ago</a></b>
          </li>
          <li>
            <span>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi
              <a href="#">http://t.co/CGIrdxIlI3</a>
            </span>
            <b><a href="#">3 Days Ago</a></b>
          </li>
        </ul>
      </div> */}
    </aside>
  </div>
</section>
      </React.Fragment>
    );
  }
}