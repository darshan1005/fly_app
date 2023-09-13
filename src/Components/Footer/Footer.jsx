/* eslint-disable no-unused-vars */
import React from 'react'

// images import 
import logo from '../../assets/logo2.png'
import {GiMoebiusTriangle} from 'react-icons/gi'
// import logosimpo
import {TiSocialFacebookCircular} from 'react-icons/ti'
import {AiFillYoutube} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoPinterest} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sectionContainer container grid'>
        <div className='gridOne'>
          <div className='logoDiv'>
            <img src={logo} className='logo'/>
          </div>
          <div className='socialIcons flex'>
            <TiSocialFacebookCircular className='icon' />
            <AiFillYoutube className='icon' />
            <AiOutlineTwitter className='icon' />
            <BiLogoPinterest className='icon' />
          </div>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>Information</span>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>

             <li>
              <a href='#home'>Explore</a>
            </li>

             <li>
              <a href='#home'>Flight Status</a>
            </li>

             <li>
              <a href='#home'>Travel</a>
            </li>

             <li>
              <a href='#home'>Check-in</a>
            </li>

            <li>
              <a href='#home'>Manage your booking</a>
            </li>
          </ul>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>Quick Guide</span>
          <ul>
            <li>
              <a href='#home'>FAQ</a>
            </li>

             <li>
              <a href='#home'>How to</a>
            </li>

             <li>
              <a href='#home'>Features</a>
            </li>

             <li>
              <a href='#home'>Baggage</a>
            </li>

             <li>
              <a href='#home'>Route Map</a>
            </li>

            <li>
              <a href='#home'>Our communnities</a>
            </li>
          </ul>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>More Details</span>
          <ul>
            <li>
              <a href='#home'>Chauffuer</a>
            </li>

             <li>
              <a href='#home'>Our patners</a>
            </li>

             <li>
              <a href='#home'>Destination</a>
            </li>

             <li>
              <a href='#home'>Careers</a>
            </li>

             <li>
              <a href='#home'>Transportation</a>
            </li>

            <li>
              <a href='#home'>Programme Rules</a>
            </li>
          </ul>
        </div>

        <div className='copyText'>
           © 2023 <GiMoebiusTriangle className='iocn'/> Bermuda Designs
        </div>

      </div>
    </div>
  )
}

export default Footer