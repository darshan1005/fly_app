/* eslint-disable no-unused-vars */
import React ,{useEffect} from 'react'
// import images 
import Images from '../../assets/lounge.jpg'

// import Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='lounge container section'>
      <div className='sectionContainer grid'>

        <div data-aos='fade-right' data-aos-duration='1500' className='imgDiv'>
          <img src={Images}/>
        </div>

        <div className='textDiv'>
          <h2 data-aos='fade-down' data-aos-duration='1500'>Unaccompanied Minor Lounge</h2>
        
            <div className='grids grid'>

              <div data-aos='fade-left' data-aos-duration='1500' className='singleGrid'>
                <span className='gridTitle'>Help througth the airport</span>
                <p>
                  You can also call airlines from your phone and bok a flight
                  ticket to one of your favourite destinations.
                </p>
              </div>

              <div data-aos='fade-left' data-aos-duration='1500' className='singleGrid'>
                <span className='gridTitle'>Care on the flight</span>
                <p>
                  You can also call airlines from your phone and bok a flight
                  ticket to one of your favourite destinations.
                </p>
              </div>
              
              <div data-aos='fade-left' data-aos-duration='1500' className='singleGrid'>
                <span className='gridTitle'>Priority Boarding</span>
                <p>
                  You can also call airlines from your phone and bok a flight
                  ticket to one of your favourite destinations.
                </p>
              </div>
              
              <div data-aos='fade-left' data-aos-duration='1500' className='singleGrid'>
                <span className='gridTitle'>Help througth the airport</span>
                <p>
                  You can also call airlines from your phone and bok a flight
                  ticket to one of your favourite destinations.
                </p>
              </div>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge