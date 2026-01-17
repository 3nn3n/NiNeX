import React from 'react'

function Use3() {
  return (
<>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-between', padding: '20px', border:'1px solid black',height: '100%', borderRadius: '20px'}} className='bg-[#0d0b0f]'>
  <div>
    <div className='text-white font-semibold text-3xl pt-10 px-5'>
      <span>Video generation</span>
    </div>
    <div className='text-gray-500 text-xl font-light px-5 py-2'>
      <p>The world most powerful Ai photo and video art generation engine . What will you create ?</p>
    </div>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '10px', alignItems: 'center', paddingTop: '30px', paddingBottom: '20px', paddingLeft: '10px', paddingRight: '10px'}}>
      <div style={{border:'gray 1px solid', borderRadius:'10px', width: '50px', textAlign: 'center'}}>A</div>
      <div style={{border:'gray 1px solid', borderRadius:'10px', width: '50px', textAlign: 'center'}}>B</div>
      <div style={{border:'gray 1px solid', borderRadius:'10px', width: '50px', textAlign: 'center'}}>C</div>
      <div style={{border:'gray 1px solid', borderRadius:'10px', width: '50px', textAlign: 'center'}}>D</div>
      <div style={{border:'gray 1px solid', borderRadius:'10px', width: '50px', textAlign: 'center'}}>E</div>
    </div>
  </div>
  <div className='border-2 border-gray-600 rounded-2xl mb-1 p-5 bg-black/15 h-100 flex flex-col items-stretch' >
    <div className='font-thin text-2xl text-white'>
      <h1>Video generated..!</h1>
    </div>
    <div className='text-gray-500 text-start mt-70'
    >Seek Button</div>

  </div>
</div>



</>
  )
}

export default Use3