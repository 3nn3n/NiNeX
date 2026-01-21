import React from 'react'

function Roadmap({date, status, heading, para, style, withGradient, image}: {date: React.ReactNode, status: React.ReactNode, heading: React.ReactNode, para: React.ReactNode, style?: React.CSSProperties, withGradient?: boolean, image?: React.ReactNode}) {
  return (
    <>
    <div className={withGradient ? 'p-0.5 bg-gradient-to-br from-purple-900 via-pink-400 to-washed-blue-600' : 'p-0.5 bg-gray-800'}>
    <div className='bg-background'
    style={{display: 'flex', flexDirection: 'column', borderRadius: '30px', padding: '20px', gap: '10px', ...style}}>
      <div className='flex flex-row justify-between p-5'>
        <div className='text-gray-500'>{date}</div>
        <div className='font-thin text-washed-blue-400'>{status}</div>
      </div>
      <div className='relative'>
        {/* Grid pattern background */}
        <div 
          className='absolute inset-0 opacity-20 -m-6 -mt-24'
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(147, 51, 234, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'

          }}
        />
        {/* Image on top of grid */}
        <div className='relative z-0 h-150 w-full overflow-hidden flex justify-center items-center'>
          {image}
        </div>
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