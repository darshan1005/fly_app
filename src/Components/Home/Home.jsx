/* eslint-disable no-unused-vars */
import React , {useEffect} from 'react'

// asses imports
import Flight from '../../assets/Flight.png'
import Video from '../../assets/mountains.mp4'

// import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <>
    <div className='home flex container' id="home">
      <div className='mainText'>
        <h1 data-aos='fade-up' data-aos-duration='2000'>Fly to the Dream Land with Us</h1>
      </div>

      <div className='homeImg flex'>
        <div data-aos='fade-up' data-aos-duration='2500' className='videoDiv'>
          <video type="video/mp4" src={Video} autoPlay muted loop className='video'></video>
        </div>

        <img data-aos='fade-up' data-aos-duration='3500' src={Flight} className='plane'/>
      </div>
    </div>
    </>
    
  )
}

export default Home