import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        
        <div className="main__header-left">
          <h4>#100DaysWorkout</h4>
          <h1>Join the legends of the Fitness World</h1>
          <p>Maximize your time and effort: a personalized instructor can help you optimize your workouts and avoid injuries. On our website, we connect you with expert and certified instructors who will guide you on the path to better health and well-being</p>
          <Link to={'/plans'} className='btn lg' >Get Started</Link>
        </div>

        <div className="main__header-right">

          <div className="main__header-circle"> 
          
          </div>

            <div className="main__header-image">
              <img src={Image} alt="main__header-IMG" />
            </div>
          
        </div>

      </div>
    </header>
  )
}

export default MainHeader
