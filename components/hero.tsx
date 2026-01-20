import React from 'react'

const Hero = () => {
  return (
<>
<section>
<div className="relative
flex flex-col items-center 
justify-center px-4 py-20  text-white">
  <svg 
    className="absolute inset-0 pointer-events-none" 
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}
  >
    <circle cx="50%" cy="50%" r="150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
    <circle cx="50%" cy="50%" r="250" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
    <circle cx="50%" cy="50%" r="350" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
    <circle cx="50%" cy="50%" r="450" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
    <circle cx="50%" cy="50%" r="550" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
  </svg>
  
  <div style={{position: 'relative', zIndex: 1}}
  className='text-center font-bold text-5xl px-40  text-primary-purple-300'
  >
    <h1>Turn Scripts Into <br /> Scroll-Stopping Videos — Instantly</h1>
  </div>
  <div style={{position: 'relative', zIndex: 1}}
  className='text-center font-semibold text-4xl px-40 mt-10 text-washed-blue-200'>
    <h3>No editing, no camera, no hassle</h3>
  </div>
  <div style={{position: 'relative', zIndex: 1}}>
    <button 
      className='bg-white w-36 h-10 text-background m-15 px-2 py-2 rounded-2 rounded-tr-3xl text-xs font-bold hover:text-purple-500 transition-all duration-300 hover:text-sm' 
      style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)'}}
    >
      GET STARTED
      <div className="absolute left-7/10 top-2 bottom-2 w-px bg-gray-300" />
    </button>
  </div>
  <div style={{position: 'relative', zIndex: 1}}
  className='mx-10 bg-linear-to-r from-pink-500 via-yellow-500 to-purple-600 w-250 h-120 rounded-2xl' 
  >
    <div 
     className='m-1 rounded-2xl bg-washed-blue-900/90 w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)] overflow-hidden relative'>
    <img className='my-2 mx-2 w-full h-full object-cover rounded-2xl' src="/studio.png" alt="Hero Image" />
  </div>
  </div>
  
  <div style={{position: 'relative', zIndex: 1}}
  className='m-20 text-center text-white font-thin text-3xl'>
    <p>Helping people create beautiful content at</p>
  </div>
  <div style={{display: 'flex', justifyContent: 'space-between', width: '350px', gap: '10px', position: 'relative', zIndex: 1}}>
    <div className='bg-primary-purple-400 relative rounded-full'>
      <div className='absolute inset-0 bg-primary-purple-400 blur-3xl opacity-70 scale-150 rounded-full'></div>
      <img src={'1.png'} className='relative z-10 w-30 h-30'/>
    </div>
    <div className='bg-primary-purple-400 relative rounded-full'>
      <div className='absolute inset-0 bg-primary-purple-400 blur-3xl opacity-70 scale-150 rounded-full'></div>
      <img src={'4.png'} className='relative z-10 w-30 h-30'/>
    </div>
  </div>
</div>

</section>
</> 
 )
}

export default Hero