import React from 'react'
import Typewriter from "typewriter-effect";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import './Home.css'

export const Home = () => {
    return (
        <div className='section-1'>
            <div className='div-1'>
                <span className='text-1'>hi, i'm Vinay Kumar Sahu</span>
                <div className='typewriter'>
                    <Typewriter
                        options={{
                            strings: [
                                "Developer", "Designer", ""
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
                <div className='home'>

                    <a href=''><button className='btn-1'>View My Projects</button></a>
                    <a href=''><button className='btn-2'>Contact Me <FaRegArrowAltCircleDown/></button></a>
                </div>
            </div>



            <div className='div-2'></div>



        </div>
    )
}
