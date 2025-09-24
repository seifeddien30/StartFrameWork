import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import x from "./../../src/assets/images/avataaars.svg"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column min-vh-100">
        <div className="home-bg d-flex justify-content-center align-items-center flex-column text-white flex-grow-1 overflow-auto">
          <div className="home-img pb-4">
            <img
              src={x}
              alt="Person"
              className="w-25 d-block mx-auto"
            />
          </div>
          <h2 className="fw-bold">START FRAMEWORK</h2>
        <div className="d-flex align-items-center justify-content-center my-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
        </div>
          <div className="pb-5">
            Graphic Artist - Web Designer - Illustrator
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
