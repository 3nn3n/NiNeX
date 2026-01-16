import React from 'react'

function Use1() {
  return (
<>
<div className='border-gray-600 border-2 rounded-4xl m-20 p-10 bg-background'>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px', color: 'white'}} 
    >
      <div>
        <img></img>
      </div>
      <div>
        <div className='mt-30'>
          <div className='font-semibold text-4xl text-white ml-43 mb-3'>
            <h1>Smartest AI</h1>
          </div>
          <div className='font-normal text-normal text-gray-500 ml-43 w-80'>
            <p>NiNeX unlocks the potential of AI-powered applications</p>
          </div>
        </div>
        <div className='font-normal text-lg text-gray-400 ml-40 mt-10'>
          <ul>
            <hr className='border-gray-400 w-80 m-3'/>
            <li className='mb-3 pl-3 text-xl text-white flex items-center gap-2'>
              <img src='/check.png' className='w-5 h-5 bg-primary-purple-300' alt='check'/>
              Photo generating
            </li>
            <hr className='border-gray-400 w-80 m-3'/>
            <li className='mb-3 pl-3 text-xl text-white flex items-center gap-2'>
              <img src='/check.png' className='w-5 h-5 bg-primary-purple-300' alt='check'/>
              Video generating
            </li>
            <hr className='border-gray-400 w-80 m-3'/>
            <li className='mb-3 pl-3 text-xl text-white flex items-center gap-2'>
              <img src='/check.png' className='w-5 h-5 bg-primary-purple-300' alt='check'/>
              Audio generating
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'center', padding: '20px', color: 'white', marginTop: '30px'  }}>
      <div style={{border: '1px solid #7c3aed', padding: '20px', borderRadius: '50px', width: '600px', textAlign: 'start', display: 'flex', alignItems: 'center', gap: '10px'}}>
        <img src='/loading (1).png' className='w-8 h-8' alt='loading'/>
        <h1 className='font-thin text-xl p-2 text-gray-400'>Your web is generating...</h1>
      </div>
    </div>
</div>
</>  )
}

export default Use1