import React from 'react'

function Chat() {
  return (
    <>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', margin: '50px', padding: '20px', color: 'white'}}>
    <div>
      <div 
      className='font-bold text-4xl m-5'
      >
        <h1>AI chat app for seamless collaboration</h1>
      </div>
      <div className='font-normal text-lg m-5'>
        <ul 
        className='font-semibold text-washed-blue-200'>
          <li className='flex items-center gap-2'>
            <img src='/check.png' className='w-5 h-5 bg-purple-400'></img>
            <div>
              <h1>Seamless Integration</h1>
            </div>
            
          </li>
          <div>
              <p className='text-gray-500 font-thin w-120 mb-10'>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
            </div>
          <li className='flex items-center gap-2 mb-10'>
            <img src='/check.png' className='w-5 h-5 bg-purple-400'></img>
            <h1>Real-time Collaboration</h1>
          </li>
          <li className='flex items-center gap-2 mb-10'>
            <img src='/check.png' className='w-5 h-5 bg-purple-400'></img>
            <h1>AI-Powered Assistance</h1>
          </li>
        </ul>
        <div 
        className='bg-gradient-to-r from-pink-500 via-orange-400 via-yellow-300 to-purple-500 w-40 text-center rounded-3 h-10 flex items-center justify-center'
        >
          <button
          className='bg-background w-38 hover:w-37 rounded-3 text-purple-400 font-semibold text-xs hover:text-sm h-9 hover:h-8 flex items-center justify-center hover:text-white transition-all duration-300'
          >TRY IT NOW</button>
        </div>
      </div>
    </div>
    <div>
      <div className='w-100 mt-8 text-end justify-end ml-20 text-gray-600 
      '>
        <p>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
      </div>
      <div>
        <img></img>
      </div>

    </div>
    </div>
    <div id='how-to-use' className='font-bold text-center text-6xl text-white'>
      <h1><span>Generative AI made for creators.</span></h1>
      <p className='font-normal text-gray-500 text-lg
      '>NiNeX unlocks the potential of Al-powered application</p>
    </div>
    
    </>
    )
}

export default Chat