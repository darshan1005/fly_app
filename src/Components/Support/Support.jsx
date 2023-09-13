/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

// import images
import firstWindow from '../../assets/flight window1.jpg'

// import Aos
import Aos from 'aos'
import 'aos/dist/aos.css'


const Support = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='support container section'>
      <div className='sectionContainer'>

        <div data-aos='fade-down' data-aos-duration='2000' className='titleDiv'>
          <small>Travel Support</small>
          <h2>Plan to your Destiny Location.</h2>
          <p>Find help with booking and travel plans,
           see what to expect along the journey.</p>
        </div>

        <div className='infoDiv felx'>

          <div className='textDiv grid'>

            <div className='singleInfo'>
              <span data-aos='fade-down' data-aos-duration='1000' className='number'>01</span>
              <h4 data-aos='fade-up' data-aos-duration='1500'>Travel requirements for US</h4>
              <p data-aos='fade-in' data-aos-duration='2000'>Find help with the booking and travel plans, see what to expect along
              the journey ro your favourite destination</p>
            </div>

             <div className='singleInfo'>
              <span data-aos='fade-down' data-aos-duration='1000' className='number colorOne'>02</span>
              <h4 data-aos='fade-up' data-aos-duration='1500'>Chauffeur services at your arrival</h4>
              <p data-aos='fade-in' data-aos-duration='2000'>Find help with the booking and travel plans, see what to expect along
              the journey ro your favourite destination</p>
            </div>

             <div className='singleInfo'>
              <span data-aos='fade-down' data-aos-duration='1000' className='number colorTwo'>03</span>
              <h4 data-aos='fade-up' data-aos-duration='1500'>Multi-rist travel insurance</h4>
              <p data-aos='fade-in' data-aos-duration='2000'>Find help with the booking and travel plans, see what to expect along
              the journey ro your favourite destination</p>
            </div>

          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className='imgDiv'>
            <img src={firstWindow} alt=''/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Support