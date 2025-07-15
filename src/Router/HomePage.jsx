import React from 'react'
import "../index.css"
const HomePage = () => {
  return (
     <>
    <div className="screen">
      <nav>
      <h1>Productivity Development</h1>
      <button> Change theme</button>
    </nav>
    <section className='middle'>
      <h1>4May, 2025</h1>
      <h2>Monday,</h2>
      <h5 className='.time'>12:22:09</h5>
      <h3>Bhopal (M.P)</h3>
      <img src="https://images.pexels.com/photos/8822082/pexels-photo-8822082.jpeg" alt="" />
    </section>
    <section className='main'>
      <div className="ele" onClick={()=>window.location.href = '/todo'}>
        <img src="https://images.pexels.com/photos/1662298/pexels-photo-1662298.jpeg" alt="" />
        <h1>To Do List</h1>
      </div>
      <div className="ele">
        <img src="https://images.pexels.com/photos/813870/pexels-photo-813870.jpeg/" alt="" />
        <h1>Daily Planner</h1>
      </div>
      <div className="ele">
        <img src="https://images.pexels.com/photos/8347501/pexels-photo-8347501.jpeg" alt="" />
        <h1>Motivation</h1>
      </div>
      <div className="ele">
        <img src="https://images.pexels.com/photos/10643964/pexels-photo-10643964.jpeg" alt="" />
        <h1>Pomodoro Timmer</h1>
      </div>
      <div className="ele">
        <img src="https://images.pexels.com/photos/8721339/pexels-photo-8721339.jpeg" alt="" />
        <h1>Daliy Goals</h1>
      </div>
    </section>
    </div>
    </>
  )
}

export default HomePage