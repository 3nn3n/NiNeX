import React from 'react'

function Use3() {
  return (
<>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-between', padding: '20px', border:'1px solid black',height: '100%', borderRadius: '20px'}} 
className='bg-linear-to-r from-[#0d0b0f] to-[#15131d]'>
  <div>
    <div className='text-white font-semibold text-3xl pt-10 px-5'>
      <span>Video generation</span>
    </div>
    <div className='text-gray-500 text-xl font-light px-5 py-2'>
      <p>The world most powerful Ai photo and video art generation engine . What will you create ?</p>
    </div>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '10px', alignItems: 'center', paddingTop: '30px', paddingBottom: '20px', paddingLeft: '10px', paddingRight: '10px'}}>
      <div><img className='rounded-2xl w-10 hover:w-11 transition-all duration-300' src='m4.png'></img></div>
      <div><img className='rounded-2xl w-10 hover:w-11 transition-all duration-300' src='m2.png'></img></div>
      <div><img className='rounded-2xl w-10 hover:w-11 transition-all duration-300' src='m1.png'></img></div>
      <div><img className='rounded-2xl w-10 hover:w-11 transition-all duration-300' src='m4.png'></img></div>
      <div><img className='rounded-2xl w-10 hover:w-11 transition-all duration-300' src='m5.png'></img></div>
    </div>10
  </div>
  <div className='rounded-2xl bg-black/15 h-100 flex flex-col items-stretch' >
    <div className='relative font-thin text-2xl text-white overflow-hidden h-full z-1 w-full h-full'>
      <img src='RU2.jpg' className='absolute object-fit-cover w-full h-full rounded-2xl'></img>
      <div className='relative flex flex-col m-10 p-2 w-70 bg-primary-purple-900 rounded-xl' 
      style={{clipPath: 'polygon(0 0, 100% 0, 100% 70%, 10% 70%, 0 100%, 0 0)'}}>
      <h1 className='relative z-3 ml-10 font-thin text-xl text-gray-300'>Video generated..!</h1>
      <p className='text-gray-400 text-xs font-thin mb-5 ml-50'>JUST NOW</p>
      </div>
      <img src='m3.png' className='relative w-10 h-10 -mt-20 ml-20 rounded-2xl'></img>

      <div className='text-gray-500 text-start mt-70 z-4'
    >Seek Button</div>
    </div>
    

  </div>
</div>



</>
  )
}

export default Use3