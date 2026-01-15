import React from 'react'

function Features({children, child}: {children: React.ReactNode, child: React.ReactNode}) {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', border: '1px solid gray', borderRadius: '10px', padding: '20px', backgroundColor: 'white', color: 'black'}}>
    <div>
    <h2>{children}</h2>
    </div>
    <div>
    <p>{child}</p>
    </div>
    <div>
      <div>
        <img />
      </div>
      <div>
      </div>
      <div>
        <h3>Explore More</h3>
      </div>
    </div>
    </div>


    </>
    )
}

export default Features