import React from 'react'

function Pricing({heading, para1, price, button, pt1, pt2, pt3, style, headingColor}: {heading: React.ReactNode, para1: React.ReactNode, price: React.ReactNode, button: React.ReactNode, pt1: React.ReactNode, pt2: React.ReactNode, pt3: React.ReactNode, style?: React.CSSProperties, headingColor?: string}) {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', border: '1px solid gray', borderRadius: '30px', padding: '40px', color: 'black', gap: '10px', ...style}}>
      <div className='font-bold text-3xl' style={{color: headingColor || 'white'}}>
        {heading}
      </div>
      <div className='text-gray-400 font-mono '>
        {para1}
      </div>
      <div className='font-bold text-5xl text-washed-blue-100'>
        ₹{price}
      </div>
      <div className='mt-4 text-white text-center text-2xl pt-10'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-50 border-2 border-amber-300">{button}</button>
      </div>
      <div className='flex flex-col gap-2 mt-10 text-lg text-blue-200'>
        <hr/>
        <div className='py-3 flex items-center gap-2'>
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {pt1}
        </div>
        <hr/>
        <div className='flex items-center gap-2'>
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {pt2}
        </div>
        <hr/>
        <div className='flex items-center gap-2'>
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {pt3}
        </div>

      </div>
      
    </div>
    </>
  )
}

export default Pricing