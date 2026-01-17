import React from 'react'

function Roadmap({date, status, heading, para, style, withGradient}: {date: React.ReactNode, status: React.ReactNode, heading: React.ReactNode, para: React.ReactNode, style?: React.CSSProperties, withGradient?: boolean}) {
  return (
    <>
    <div className={withGradient ? 'p-0.5 bg-gradient-to-br from-purple-900 via-pink-400 to-washed-blue-600' : 'p-0.5 bg-gray-800'}>
    <div className='bg-background'
    style={{display: 'flex', flexDirection: 'column', borderRadius: '30px', padding: '20px', gap: '10px', ...style}}>
      <div className='flex flex-row justify-between p-5'>
        <div className='text-gray-500'>{date}</div>
        <div className='font-thin text-washed-blue-400'>{status}</div>
      </div>
      <div>
        <img></img>
      </div>
      <div className='flex flex-col p-5'>
        <div className='font-bold text-2xl text-blue-300'>{heading}</div>
        <div className='font-normal text-gray-400'>{para}</div>
      </div>
    </div>
    </div>

    </>
  )
}

export default Roadmap