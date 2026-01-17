import React from 'react'

function Use1() {
  return (
<>
<div className='border-gradient border-2 rounded-4xl m-20 bg-gradient-to-br from-primary-purple-700/30 via-primary-purple-900/10 to-background/30'>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px', color: 'white'}} 
    >
      <div className='relative overflow-hidden'>
        <img src={"5.png"} className="opacity-20"></img>
        <div className='absolute bottom-0 left-0 right-0 h-3 backdrop-blur-md bg-gradient-to-t from-primary-purple-700/10 to-transparent rounded-full'></div>
      </div>
      <div>
        <div className='mt-30'>
          <div className='font-semibold text-4xl text-white ml-10 mb-3'>
            <h1>Smartest AI</h1>
          </div>
          <div className='font-normal text-normal text-gray-500 ml-10 w-80'>
            <p>NiNeX unlocks the potential of AI-powered applications</p>
          </div>
        </div>
        <div className='font-normal text-lg text-gray-400 ml-7 mt-10'>
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
    <div style={{display: 'flex', justifyContent: 'center', padding: '20px', color: 'white'  }}>
      <div style={{border: '1px solid #7c3aed', padding: '20px', borderRadius: '50px', width: '600px', textAlign: 'start', display: 'flex', alignItems: 'center', gap: '10px'}}>
        <img src='/loading (1).png' className='w-8 h-8' alt='loading'/>
        <h1 className='font-thin text-xl p-2 text-gray-400'>NiNeX is generating...</h1>
      </div>
    </div>
</div>
</>  )
}

export default Use1