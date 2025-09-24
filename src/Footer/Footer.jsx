import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='box container-fluid text-light text-center'>
        <div className="row justify-content-center">
          <div className='col-md-4 mb-4'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className='col-md-4 mb-4'>
            <h3>AROUND THE WEB</h3>
            <div className='d-flex justify-content-center gap-3'>
              <a href="#" className="icon-circle"><i className="fa-brands fa-facebook-f text-light fs-5"></i></a>
              <a href="#" className="icon-circle"><i className="fa-brands fa-twitter text-light fs-5"></i></a>
              <a href="#" className="icon-circle"><i className="fa-brands fa-linkedin-in text-light fs-5"></i></a>
              <a href="#" className="icon-circle"><i className="fa-solid fa-globe text-light fs-5"></i></a>
            </div>
          </div>

          <div className='col-md-4 mb-4'>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>

      <div className='footer bg-dark text-light text-center py-3'>
        <p className='m-0'>Copyright © Your Website 2021</p>
      </div>
    </>
  );
};

export default Footer;
