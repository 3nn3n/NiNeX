import React from 'react'

function Chat() {
  return (
    <>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px', backgroundColor: '#f0f0f0', color: 'black'}}>
    <div>
      <div>
        <h1>AI chat app for seamless collaboration</h1>
      </div>
      <div>
        <ul>
          <li><h1>Seamless Integration</h1>
            <p>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
          </li>
          <li>
            <h1>Real-time Collaboration</h1>
          </li>
          <li><h1>AI-Powered Assistance</h1></li>
        </ul>
      </div>
    </div>
    <div>
      <div>
        <p>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
      </div>
      <div>
        <img></img>
      </div>

    </div>
    </div>
    <div style={{textAlign: 'center', padding: '50px', backgroundColor: 'yellow', color: 'black'}}>
      <h1><span>Generative AI made for creators.</span></h1>
      <p>Brainwave unlocks the potential of Al-powered applicaiton</p>
    </div>
    
    </>
    )
}

export default Chat