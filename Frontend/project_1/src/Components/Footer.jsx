import React from 'react'
import { FaLinkedin , FaFacebook , FaInstagram , FaGithub } from "react-icons/fa";
import './Footer.css'

export const Footer = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-4 text-center bg-warning'>
              <h1 className='text-start'>Let's get in touch</h1>
              <p className='text-start'>I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
              <h3 className='text-start'>Living In :</h3>
              <p className='text-start'>Gonda , Uttar Pardesh , 271122</p>
              <h3 className='text-start'>Call :</h3>
              <p className='text-start'>9651910152 , 9026092379</p>
              <div className='row'>
                <div className='col'>
                <div><FaFacebook/></div>
                <div><FaInstagram/></div>
                <div><FaLinkedin/></div>
                <div><FaGithub/></div>
                </div>
              </div>


            </div>
            <div className='col-sm-8 bg-primary'>
             <h1>Contact Us</h1>
             <form>
              <lable className='form-group'> What is Your Name :</lable>
              <input type='text' className='form-control'/>
              <lable>Your Email Address :</lable>
              <input type='email' className='form-control'/>
              <label>How Can I Help You :</label>
              <textarea className='form-control'></textarea>
             </form>

            </div>
        </div>
    </div>
    </>
    
  )
}
