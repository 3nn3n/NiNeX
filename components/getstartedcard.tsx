import React from 'react'

function Getstartedcard() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '40px', color: 'white', gap: '20px'}}>
      <div>
        <img />
      </div>
      <div className='font-extralight text-xl text-gray-400 text-start px-60'>
        <h4>[ Get Started with NiNeX ]</h4>
      </div>
      <div className='font-bold text-6xl bg-gradient-to-r from-washed-blue-100 via-primary-blue-500 to-purple-900 bg-clip-text text-transparent px-60'>
        <h1>Pay Once, Use Forever</h1>
      </div>
    </div>
    </>
  )
}

export default Getstartedcard