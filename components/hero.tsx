import React from 'react'

const Hero = () => {
  return (
<>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px', color: 'black', backgroundColor: '#432523', position: 'relative', overflow: 'hidden'}}>
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
  
  <div style={{position: 'relative', zIndex: 1}}>
    <h1>Empowering Growth Through Expert Web Development with Us</h1>
  </div>
  <div style={{position: 'relative', zIndex: 1}}>
    <h3>Transforming visions into digital success. Partner with us for expert web development solutions.</h3>
  </div>
  <div style={{position: 'relative', zIndex: 1}}>
    <button>Get Started</button>
  </div>
  <div style={{position: 'relative', zIndex: 1}}>
    <img src="/hero-image.png" alt="Hero Image" />
  </div>
  <div style={{position: 'relative', zIndex: 1}}>
    <p>Helping people create beautiful content at</p>
  </div>
  <div style={{display: 'flex', justifyContent: 'space-between', width: '400px', position: 'relative', zIndex: 1}}>
    <div>Your Logo</div>
    <div>Your Logo</div>
  </div>
</div>


</> 
 )
}

export default Hero