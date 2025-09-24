import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const Contact = () => {
  return (
    <>
        <Navbar/>
        <div className="deco d-flex flex-column">
          <div className="contact-bg bg-white d-flex justify-content-center align-items-center flex-column text-white flex-grow-1 overflow-auto text-center">
            <h2 className="portfolio-text pt-5 fw-bold">CONTACT SECTION</h2>
          <div className="d-flex align-items-center justify-content-center my-3">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star star-dark"></i>
              <div className="line ms-3"></div>
          </div>

<div className="form container w-50 d-flex flex-column p-2">
  <div className="form-group position-relative mb-3">
    <input type="text" placeholder='userName' className="input-field" />
    <label className="input-label">User Name:</label>
  </div>

  <div className="form-group position-relative mb-3">
    <input type="text" placeholder='userAge' className="input-field" />
    <label className="input-label">User Age:</label>
  </div>

  <div className="form-group position-relative mb-3">
    <input type="email" placeholder='userEmail' className="input-field" />
    <label className="input-label">User Email:</label>
  </div>

  <div className="form-group position-relative mb-3">
    <input type="password" placeholder='userPassword' className="input-field" />
    <label className="input-label">User Password:</label>
  </div>

  <button className='btn text-white'>Send Message</button>
</div>


          </div>
        </div>        
        <Footer/>  
    </>
  )
}

export default Contact