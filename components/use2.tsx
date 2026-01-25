import React from 'react'

function Use2() {
  return (
<>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', height: '700px', width: '500px', overflow: 'hidden', position: 'relative'}}
className='border-gray-700 border-1 rounded-2xl'>
  <img src='RU1.jpg' className='absolute z-1 w-full h-full object-cover rounded-4xl'></img>
  <div className='absolute z-2 font-thin text-gray-400 text-md text-center bg-black/90 px-9 py-6 m-15 w-90 h-25 rounded-2xl'
  style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 95% 70%, 0 70%,0 0)'}}>
    <h1>Hey NiNeX, enhance this photo</h1>
  </div>
  <div className='absolute z-2 bottom-15 left-10 right-0 w-full' style={{display: 'flex', flexDirection: 'column', gap: '5px', padding: '10px'}} >
    <div className='font-semibold text-4xl text-primary-purple-400 align-items-end'>
      <div>
      <h1>Photo Editing</h1>
      </div>
    </div>
    <div className='text-gray-500 font-light'>
      <p className='font-sm text-gray-400 text-xl'>Automatic enhance your photos with AI</p>
    </div>
  </div>
</div>
</> 
 )
}

export default Use2