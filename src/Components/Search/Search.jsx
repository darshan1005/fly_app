/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
// import react icons
import {GrLocation} from 'react-icons/gr'
import {RiAccountPinBoxFill} from 'react-icons/ri'
import {BsFillCalendarDayFill} from 'react-icons/bs'

// import Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {

 useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='search container section'>
      <div className='sectionContainer grid'>
        <div className='btns flex'>
          <div className='singleBtn'>
            <span>Economy</span>
          </div>
           <div className='singleBtn'>
            <span>Bussiness Class</span>
          </div>
           <div className='singleBtn'>
            <span>First Class</span>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='1500' className='searchInputs flex'>

            {/* single input */}
            <div className='singleInput flex'>
              <div className='iconDiv'>
                <GrLocation className='icon'/>
              </div>
              <div className='texts'>
                <h4>Location</h4>
                <input type='text' placeholder='Add location?'/>
              </div>
            </div>

            {/* single input */}
            <div className='singleInput flex'>
              <div className='iconDiv'>
                <RiAccountPinBoxFill className='icon'/>
              </div>
              <div className='texts'>
                <h4>Travelers</h4>
                <input type='text' placeholder='Add Guests'/>
              </div>
            </div>

            {/* single input */}
            <div className='singleInput flex'>
              <div className='iconDiv'>
                <BsFillCalendarDayFill className='icon'/>
              </div>
              <div className='texts'>
                <h4>Check In</h4>
                <input type='text' placeholder='Add date'/>
              </div>
            </div>

            {/* single input */}
            <div className='singleInput flex'>
              <div className='iconDiv'>
                <BsFillCalendarDayFill className='icon'/>
              </div>
              <div className='texts'>
                <h4>Check Out</h4>
                <input type='text' placeholder='Add date'/>
              </div>
            </div>
              <button className='btn btnBlock flex'>Search Flight</button>
        </div>
      </div>
    </div>
  )
}

export default Search