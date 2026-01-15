import React from 'react'

function Header() {
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px', color: 'white', backgroundColor: '#351827'}}>
      <div>
        <h1>NiNeX</h1>
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