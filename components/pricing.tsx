import React from 'react'

function Pricing({heading, para1, price, button, pt1, pt2, pt3, style}: {heading: React.ReactNode, para1: React.ReactNode, price: React.ReactNode, button: React.ReactNode, pt1: React.ReactNode, pt2: React.ReactNode, pt3: React.ReactNode, style?: React.CSSProperties}) {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', border: '1px solid gray', borderRadius: '10px', padding: '40px', backgroundColor: 'pink', color: 'black', gap: '10px', ...style}}>
      <div>
        {heading}
      </div>
      <div>
        {para1}
      </div>
      <div>
        ₹{price}
      </div>
      <div>
        <button>{button}</button>
      </div>
      <div>
        <div>{pt1}</div>
        <div>{pt2}</div>
        <div>{pt3}</div>

      </div>
      
    </div>
    </>
  )
}

export default Pricing