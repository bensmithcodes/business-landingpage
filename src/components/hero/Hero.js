import React from 'react';
import MainVid from '../../assets/vidbiz.mp4';
import './Hero.css';

const Hero =()=>{
    return (
        <div className='hero'>
            <video autoPlay loop muted id= 'video'>
            <source src={MainVid}type='video/mp4'/>
            </video>
            <div className="hero-text">
            <h2>Decentralized</h2>
            <h2><span className='blue'>Trading</span>Protocol</h2>
            <p>Guaranteed liquidity trading for up to millions of world-wide users!</p>
            <div className="btn-group">
                <button className="btn">Use PlanPal</button>
            </div>
               </div>
               <div className='bottom-text'>
                   <h2>The total amount that was saved: 5,500,500</h2>
               </div>
        </div>
    )
}
export default Hero