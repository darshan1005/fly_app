/* eslint-disable no-unused-vars */
import {React , useState} from 'react'

// Imported Icons ===========>
import {GiMoebiusTriangle} from 'react-icons/gi'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'
import  { RxCross1 } from 'react-icons/rx'

// Imported Images =========>
import Logo from '../../assets/logo2.png'

const Navbar = () => {

  // Navbar toggle 
  const[active, setActive] = useState('navBarMenu');
  const showNavBar =() =>{
    setActive('navBarMenu showNavBar')
  }

  const removeNavBar =() =>{
    setActive('navBarMenu')
  }

  // Add background color to the second navbar
  const [noBg, addBg] = useState('navBarTwo')

  const addBgColor = () =>{
    if(window.scrollY >= 10){
      addBg('navBarTwo navBar_with_Bg');
    }else{
      noBg;
    }
  }

  window.addEventListener("scroll", addBgColor);

  return (
    <>
    <div className='navBar flex'>

      <div className='navBarOne flex'>
        <div>
          <GiMoebiusTriangle className='icon' />
        </div>
        <div className='none flex'>
          <li className='flex'><BsPhoneVibrate className='icon' />Support</li>
            <li className='flex'><AiOutlineGlobal className='icon'/>Languages</li>
        </div>

        <div className='atb flex'>
          <span>Sign In</span>
          <span>Sign out</span>
        </div>
      </div>

      <div className={noBg}>
        <div className='logoDiv'>
          <img src={Logo} alt='' className='logo'/>
        </div>

        <div className={active}>
          <ul className='menu flex'>
            <li className='listItem'>Home</li>
            <li className='listItem'>About</li>
            <li className='listItem'>Offers</li>
            <li className='listItem'>Seats</li>
            <li className='listItem'>Destinations</li>
          </ul>

          <button className='btn flex btnOne'>
            Contact
          </button>
          <button className='btn flex btnRemove' onClick={removeNavBar}>
           <RxCross1 className='icon remove' />
          </button>
        </div>

        <button className='btn flex btnTwo'>
        Contact</button>

        <div className='toggleIcon'  onClick={showNavBar}><CgMenuGridO className='icon'/></div>
      </div>
    </div>
    </>
  )
}

export default Navbar