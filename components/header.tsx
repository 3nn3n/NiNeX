'use client'

import React from 'react'

function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

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
      <div style={{display: 'flex', flexDirection: 'row', gap: '30px', marginTop: '14px'}}
      className='font-bold text-gray-600 text-xs'
      >
        <div className='hover:text-white transition duration-300 cursor-pointer' onClick={() => scrollToSection('features')}>FEATURES</div>
        <div className='hover:text-white transition duration-300 cursor-pointer' onClick={() => scrollToSection('pricing')}>PRICING</div>
        <div className='hover:text-white transition duration-300 cursor-pointer' onClick={() => scrollToSection('how-to-use')}>HOW TO USE</div>
        <div className='hover:text-white transition duration-300 cursor-pointer' onClick={() => scrollToSection('roadmap')}>ROADMAP</div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', gap: '20px', marginRight: '20px', marginTop: '5px', alignItems: 'center'}}
      className='font-bold text-xs text-gray-600'>
        <div className='hover:text-white transition duration-300'>NEW ACCOUNT</div>
        <div className='bg-linear-to-br from-green-300 via-yellow-500 to-primary-purple-400 rounded-md rounded-tr-2xl cursor-pointer w-24 h-10 flex items-center justify-center hover:text-white transition duration-300'
        style={{clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)'}}>
          <div className='bg-background w-23.5 h-9 hover:w-22 hover:h-8 transition duration-300 rounded-md rounded-tr-2xl flex items-center justify-center text-white hover:text-primary-purple-500'
          style={{clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)'}}>
            SIGN IN
            </div></div>
      </div>
    </div>
    </>
  )
}

export default Header