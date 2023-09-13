/* eslint-disable no-unused-vars */
import React from 'react'
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs'
import { RxCalendar } from 'react-icons/rx'

const Info = () => {
  return (
    <div className='info section'>
      <div className='infoContainer'>
        <div className='titleDiv flex'>
          <h2>Travel to make memories all around the world</h2>
          <button className='btn'>View All</button>
        </div>
        <div className='cardsDiv grid'>

          <div className='singleCard'>
            <div className='iconDiv flex'>
                <RxCalendar className='icon'/>
            </div>
            <span className='cardTitle'>Book and Relax</span>
            <p>You can also call airlines using your phone and book your flight ticket</p>
          </div>

          <div className='singleCard'>
            <div className='iconDiv flex colorOne'>
                <BsShieldCheck className='icon'/>
            </div>
            <span className='cardTitle'>Smart Check-List</span>
            <p>Check list of the flight on booking. And proceed for the further steps.</p>
          </div>

             <div className='singleCard'>
            <div className='iconDiv flex colorTwo'>
                <BsBookmarkCheck className='icon'/>
            </div>
            <span className='cardTitle'>Save</span>
            <p>Save more for your future bookings or else you may miss your flight bookings.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Info