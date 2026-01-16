import React from 'react'

function Features({children, child}: {children: React.ReactNode, child: React.ReactNode}) {
  return (
    <>
    <div className='flex flex-col items-start text-white gap-1 w-85 bg-background rounded-lg my-5 p-10
    hover:bg-primary-purple-800 transition-colors duration-300
    '
    style={{clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)'}}
    >
    <div className='font-bold text-2xl text-white
    '>
    <h2>{children}</h2>
    </div>
    <div 
    className='font-normal text-gray-400 mb-10'
    >
    <p>{child}</p>
    </div>
    <div>
      <div>
        <img />
      </div>
      <div>
      </div>
      <div 
      className='font-semibold text-primary-purple-100 mt-5 hover:underline cursor-pointer flex items-center gap-2 justify-items-stretch'>
        <h3>Explore More</h3>
        <img src="/greater-than-symbol.png" alt="Explore More Icon" className="w-4 h-4 bg-primary-purple-100" />
      </div>
    </div>
    </div>


    </>
    )
}

export default Features