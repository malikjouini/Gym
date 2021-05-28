import React from 'react'

const Main = () => {
    return (
        <div className='main'>
            <video src='images/gym.mp4' muted loop autoPlay ></video>
            <div className='overlay'></div>
            <div className='text'>
                <h2>Be stronger</h2>
                <h3>Never Give Up</h3>
                <div className='btn-main'>
                <button className='btn '> Get Started</button>
                </div>
                            
            </div>
        </div>
    )
}

export default Main
