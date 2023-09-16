import React from 'react';
import imbLogo from '../assets/imb.png';
import fruitLogo from '../assets/fruitLogo.png';
import playLogo from '../assets/Play.png';

const HeroPage = () => {
  return (
    <div className='text-white wrapper flex flex-col gap-[1rem] mt-[93px]'>
            <h1>John Wick 3 : <br />Parabellum</h1>
            <div className='flex items-center'>
            <div className="hero-img-container flex items-center">
            <div><img src={imbLogo} alt="" /></div>
              <span className='ml-[.5rem]'>860 / 100</span>
            </div>
            <div className="fruit-container flex items-center ml-[.5rem]">
              <div><img src={fruitLogo} alt="" /></div>
              <span className='ml-[.5rem]'>97%</span>
            </div>
            </div>
            
            <div className="hero-content"><p className='max-w-[40ch]'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p></div>
            <button className='watch-trailer bg-[#BE123C] rounded-[.5rem] p-[.5rem] w-[200px]'><a className='flex items-center justify-center' href=""> <div><img src={playLogo} alt="" /></div><span className='ml-[1rem]'> WATCH TRAILER </span>  </a> </button>
    </div>
          
    
  )
}

export default HeroPage