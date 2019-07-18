import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
  <div className="row">
    <div className="twelve columns collapsed">
      <h1>Check Out Some of My Work...</h1>
      {/* portfolio-wrapper */}
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-01" title>
              <img alt src="images/portfolio/1.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Brainster Box</h5>
                  {/* <p>Project 1</p> */}
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-02" title>
              <img alt src="images/portfolio/2.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Localised</h5>
                  {/* <p>Project 2</p> */}
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-03" title>
              <img alt src="images/portfolio/4.jpeg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Bike shop</h5>
                  {/* <p>Project 3</p> */}
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-04" title>
              <img alt src="images/portfolio/6.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Music app</h5>
                  {/* <p>Photography</p> */}
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-05" title>
              <img alt src="images/portfolio/5.jpeg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>The future has landed</h5>
                  {/* <p>Branding</p> */}
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-06" title>
              <img alt src="images/portfolio/7.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Magnetic</h5>
                  {/* <p>Photography</p> */}
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-07" title>
              <img alt src="images/portfolio/8.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Parallax</h5>
                  {/* <p>Illustrration</p> */}
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-08" title>
              <img alt src="images/portfolio/9.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Glazzom</h5>
                  {/* <p>Web Development</p> */}
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>  {/* item end */}
      </div> {/* portfolio-wrapper end */}
    </div> {/* twelve columns end */}
    
    {/* Modal Popup
	      --------------------------------------------------------------- */}
    <div id="modal-01" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/1.png" alt />
      <div className="description-box">
        <h4>Brainster Box</h4>
        <p>HTML5, CSS3, Flex, Bootstrap, Responsive, JavaScript</p>
        <span className="categories"><i className="fa fa-tag" />Company training</span>
      </div>
      <div className="link-box">
        <a href="https://mirkogjurik.github.io/Project_1/" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
    <div id="modal-02" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/2.jpg" alt />
      <div className="description-box">
        <h4>Localised</h4>
        <p>HTML5, CSS3, Flex, Bootstrap, Responsive, JavaScript</p>
        <span className="categories"><i className="fa fa-tag" />Global e-commerce</span>
      </div>
      <div className="link-box">
        <a href="https://mirkogjurik.github.io/Project_2/" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-02 End */}
    <div id="modal-03" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/4.png" alt />
      <div className="description-box">
        <h4>Bike shop</h4>
        <p>HTML5, CSS3, Flex, Bootstrap, Responsive, JavaScript</p>
        <span className="categories"><i className="fa fa-tag" />E-commerce</span>
      </div>
      <div className="link-box">
        <a href="https://mirkogjurik.github.io/Project_4/" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-03 End */}
    <div id="modal-04" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/6.png" alt />
      <div className="description-box">
        <h4>Music app</h4>
        <p>HTML5, CSS3, Bootstrap, JavaScript, React</p>
        <span className="categories"><i className="fa fa-tag" />Application</span>
      </div>
      <div className="link-box">
        <a href="https://keen-mcclintock-06e1f4.netlify.com/" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-04 End */}
    <div id="modal-05" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/5.png" alt />
      <div className="description-box">
        <h4>The future has landed</h4>
        <p>HTML5, CSS3</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
      </div>
      <div className="link-box">
        <a href="https://mirkogjurik.github.io/Project_5/" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-05 End */}
    <div id="modal-06" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/7.png" alt />
      <div className="description-box">
        <h4>Magnetic</h4>
        <p>HTML5, CSS3, Flex, Bootstrap, Responsive</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
      </div>
      <div className="link-box">
        <a href="https://mirkogjurik.github.io/Project_7/" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-06 End */}
    <div id="modal-07" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/8.jpg" alt />
      <div className="description-box">
        <h4>Parallax</h4>
        <p>HTML5, CSS3, Responsive</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
      </div>
      <div className="link-box">
        <a href="https://mirkogjurik.github.io/Project_6/" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-07 End */}
    <div id="modal-08" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/9.png" alt />
      <div className="description-box">
        <h4>Glazzom</h4>
        <p>HTML5, CSS3, Flex, Bootstrap, Responsive</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
      </div>
      <div className="link-box">
        <a href="https://mirkogjurik.github.io/Project_8/" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
  </div> {/* row End */}
</section>
      </React.Fragment>
    );
  }
}