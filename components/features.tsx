import React from 'react'

function Features({children, child, isSecondColumn}: {children: React.ReactNode, child: React.ReactNode, isSecondColumn?: boolean}) {
  return (
    <>
    <div className='relative'>
    {/* Glow blur behind component on right edge for second column */}
    {isSecondColumn && (
      <div className='absolute -right-5 top-1/2 -translate-y-1/2 w-64 h-4/5 bg-purple-600/10 blur-xl -z-10 rounded-full'></div>
    )}
    
    <div className='relative flex flex-col items-start text-white gap-1 w-85 bg-background rounded-lg my-5 p-10
     transition-colors duration-300 overflow-hidden group
    '
    style={{clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)'}}
    >
    {/* Robot background image - only visible on hover */}
    <div className='absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-cover bg-center bg-no-repeat' 
    style={{backgroundImage: 'url(/robot.png)'}}
    ></div>
    
    <div className='relative z-10 font-bold text-2xl text-white
    '>
    <h2>{children}</h2>
    </div>
    <div 
    className='relative z-10 font-normal text-gray-400 mb-10'
    >
    <p>{child}</p>
    </div>
    <div className='relative z-10'>
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
    </div>


    </>
    )
}

export default Features