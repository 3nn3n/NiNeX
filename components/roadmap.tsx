import React from 'react'

function Roadmap({date, status, heading, para, style}: {date: React.ReactNode, status: React.ReactNode, heading: React.ReactNode, para: React.ReactNode, style?: React.CSSProperties}) {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', border: '1px solid gray', borderRadius: '10px', padding: '20px', backgroundColor: 'peachpuff', color: 'black', gap: '10px', ...style}}>
      <div>
        <div>{date}</div>
        <div>{status}</div>
      </div>
      <div>
        <img></img>
      </div>
      <div>
        <div>{heading}</div>
        <div>{para}</div>
      </div>
    </div>

    </>
  )
}

export default Roadmap