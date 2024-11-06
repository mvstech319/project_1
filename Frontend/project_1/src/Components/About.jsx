import React from 'react'
import './About.css'
import { IoIosColorPalette } from "react-icons/io";
import { IoMdDesktop } from "react-icons/io";
import { FaBullhorn } from "react-icons/fa";

export const About = () => {
  return (
    <>
    <div className='section-2'>
        <span>About Me</span>
        <h1>Know me more</h1>
    </div>
    <div className='section-3'>
        <div className='section-3_div-1'>
            
            <h1>Hi, I'm <span>Vinay Kumar Sahu</span></h1>
            <p>I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Delivering work within time and budget which meets client’s requirements is our moto.
            </p>
        </div>
        <div className='section-3_div-2'>
            <span className='number'>6</span>
            <h1>Month of <span className='experiance'>Experiance</span></h1>
        </div>
    </div>
    <div className='section-4'>
        <span>What I Do ?</span>
        <h1>How I can help your next project</h1>
    </div>
    <div className='section-5'>
          <div className='section-5_div-1'>
                <span><IoIosColorPalette/></span>
                <h1>Graphic Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia vitae hic ut ex. Aliquid excepturi alias ad</p>
          </div>
          <div className='section-5_div-1'>
            <span><IoMdDesktop/></span>
            <h1>Web Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia vitae hic ut ex. Aliquid excepturi alias ad</p>
          </div>
          <div className='section-5_div-1'>
            <span><FaBullhorn/></span>
            <h1>SEO Marketing</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia vitae hic ut ex. Aliquid excepturi alias ad</p>
          </div>
        </div>


    </>
  )
}
