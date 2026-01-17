import React from 'react'

function Header() {
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px', color: 'white'}}
    className='bg-background/25 backdrop-blur-md border-b border-gray-700'>
      <div className='flex flex-row mx-5'>
        <div>
        <img src={"/logo9x.png"} alt="NiNeX Logo" className='w-10 h-10' />
      </div>
      <div className='font-bold text-3xl mx-2.5'>
        <h1>NiNeX</h1>
      </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
        <div>Features</div>
        <div>Pricing</div>
        <div>How to use</div>
        <div>Roadmap</div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
        <div>New Account</div>
        <div>Sign In</div>
      </div>
    </div>
    </>
  )
}

export default Header