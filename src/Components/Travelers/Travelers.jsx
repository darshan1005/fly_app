/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
// import images
import paris from '../../assets/paris.jpg'
import bubai from '../../assets/dubai.jpg'
import london from '../../assets/landon.jpg'
import canada from '../../assets/canada.jpg'
import user from '../../assets/user.jpg'

const Travelers = () => {

  const travelers = [
    {
      id: 1,
      destinationImage: paris,
      travelerImage: user,
      travelerName: 'IsracTeach',
      media: '@isractech8'
     },
     {
      id: 1,
      destinationImage: bubai,
      travelerImage: bubai,
      travelerName: 'RevoHet',
      media: '@RevoHet55'
     },
     {
      id: 1,
      destinationImage: london,
      travelerImage: london,
      travelerName: 'LivokiMind',
      media: '@LivokiMind11'
     },
     {
      id: 1,
      destinationImage: canada,
      travelerImage: canada,
      travelerName: 'IlffaMight',
      media: '@IlffaMight45'
     }
  ]
  return (
    <div className='travelers container section'>
      <div className='sectionContainer'>
        <h2>Top travelers of this month!</h2>
        <div className='travelersContainer grid'>
          {
            travelers.map(({id,destinationImage,travelerName,travelerImage,media})=>{
              return(
                <div key={id} className='singleTraveler'>
                   <img src={destinationImage} className="destinationImage"/>
                   <div className='travelerDetails'>
                     <div className='travelersPicture'>
                       <img src={travelerImage} className='travelerImage'/>
                     </div>
                     <div className='travelerName'>
                       <span>{travelerName}</span>
                       <p>{media}</p>
                     </div>
                   </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Travelers