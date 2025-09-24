import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import img1 from "./../assets/images/poert1.png"
import img2 from "./../assets/images/port2.png"
import img3 from "./../assets/images/port3.png"


const Portfolio = () => {

  const [modalImage, setModalImage] = useState(null);

  const openImage = (image) => {
    setModalImage(image);
  }

  const closeImage = () => {
    setModalImage(null);
  }

  return (
    <>
        <Navbar/>
        <div className="deco d-flex flex-column">
          <div className="portfolio-bg bg-white d-flex justify-content-center align-items-center flex-column text-white flex-grow-1 overflow-auto text-center">
            <h2 className="portfolio-text pt-5 fw-bold">PORTFOLIO COMPONENT</h2>
          <div className="d-flex align-items-center justify-content-center my-3">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star star-dark"></i>
              <div className="line ms-3"></div>
          </div>

          <div className="container pb-5 pt-3">
            <div className="row g-4">
              <div className="hover-img col-md-4">
                <div className="img-wrapper rounded-2 position-relative overflow-hidden" onClick={() => openImage(img1)}>
                  <img src={img1} className='w-100 rounded-2' alt="" />
                  <div className="hover-overlay d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-2x text-white"></i>
                  </div>
                </div>
              </div>

              <div className="hover-img col-md-4">
                <div className="img-wrapper rounded-2 position-relative overflow-hidden" onClick={() => openImage(img2)}>
                  <img src={img2} className='w-100 rounded-2' alt="" />
                  <div className="hover-overlay d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-2x text-white"></i>
                  </div>
                </div>
              </div>

              <div className="hover-img col-md-4">
                <div className="img-wrapper rounded-2 position-relative overflow-hidden" onClick={() => openImage(img3)}>
                  <img src={img3} className='w-100 rounded-2' alt="" />
                  <div className="hover-overlay d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-2x text-white"></i>
                  </div>
                </div>
              </div>

              <div className="hover-img col-md-4">
                <div className="img-wrapper rounded-2 position-relative overflow-hidden" onClick={() => openImage(img1)}>
                  <img src={img1} className='w-100 rounded-2' alt="" />
                  <div className="hover-overlay d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-2x text-white"></i>
                  </div>
                </div>
              </div>

              <div className="hover-img col-md-4">
                <div className="img-wrapper rounded-2 position-relative overflow-hidden" onClick={() => openImage(img2)}>
                  <img src={img2} className='w-100 rounded-2' alt="" />
                  <div className="hover-overlay d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-2x text-white"></i>
                  </div>
                </div>
              </div>

              <div className="hover-img col-md-4">
                <div className="img-wrapper rounded-2 position-relative overflow-hidden" onClick={() => openImage(img3)}>
                  <img src={img3} className='w-100 rounded-2' alt="" />
                  <div className="hover-overlay d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-2x text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>

        {modalImage && (
          <div className="image-modal" onClick={closeImage}>
            <img src={modalImage} alt="modal" className="modal-img" />
          </div>
        )}

        <Footer/>  
    </>
  )
}

export default Portfolio
