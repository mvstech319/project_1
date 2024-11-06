import React,{useState} from 'react'
import "./Header.css"
import { IoMenu } from "react-icons/io5"


export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div><span className='logo_text'>Vinay Kumar Sahu</span></div>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About Me</a></li>
        <li><a href='#'>Resume</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Contact Me</a></li>
      </ul>
      <div className='Menu_btn' onClick={toggleMenu}><IoMenu/></div>
    </nav>
  )
}
