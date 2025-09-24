import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column">
        <div className="about-bg d-flex justify-content-center align-items-center flex-column text-white flex-grow-1 overflow-auto text-center">
          <h2 className="fw-bold">ABOUT COMPONENT</h2>
        <div className="d-flex align-items-center justify-content-center my-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
        </div>
          <div className="d-flex justify-content-between w-75 text-start gap-4">
            <div className="w-50">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
            <div className="w-50">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
