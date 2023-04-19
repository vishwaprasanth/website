import React from 'react';
import "../../Component/about/about.css";

const about = () => {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img className='a-img' src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='test1' />
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
               Hello, I am Vishwa Prasanth. I completed BE Computer Science and Engineering from Kalasalingam institute of technology in 2022  
            </p>
        </div>
    </div>
  )
}

export default about