import React from 'react'

function Use1() {
  return (
<>
<div>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px', backgroundColor: '#e0e0e0', color: 'black'}} >
      <div>
        <img></img>
      </div>
      <div>
        <div>
          <div>
            <h1>Smartest AI</h1>
          </div>
          <div>
            <p>NiNeX unlocks the potential of AI-powered applications</p>
          </div>
        </div>
        <div>
          <ul>
            <li>Photo generating</li>
            <li>Video generating</li>
            <li>Audio generating</li>
          </ul>
        </div>
      </div>
    </div>
    < div style={{display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#c0c0c0', color: 'black'}}>
      <div style={{border: 'black 1px solid', padding: '20px', borderRadius: '10px'}}>
        <h1>Your web is generating...</h1>
      </div>
    </div>
</div>

</>  )
}

export default Use1