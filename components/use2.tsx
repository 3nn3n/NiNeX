import React from 'react'

function Use2() {
  return (
<>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '50px', border: '1px solid gray' , borderRadius: '2rem', height: '700px', width: '500px'}}>
  <div className='font-semibold text-white text-xl'>
    <h1>Hey NiNeX, enhance this photo</h1>
  </div>
  <div style={{display: 'flex', flexDirection: 'column', gap: '5px', padding: '10px', marginTop: '450px'}} >
    <div className='font-semibold text-4xl text-primary-purple-400 align-items-end'>
      <div>
      <h1>Photo Editing</h1>
      </div>
    </div>
    <div className='text-gray-500 font-light'>
      <p>Automatic enhance your photos with AI</p>
    </div>
  </div>
</div>
</> 
 )
}

export default Use2