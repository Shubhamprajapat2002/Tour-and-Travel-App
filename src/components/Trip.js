import './Tripstyle.css'
import TripData from './TripData'
import trip1 from '../images/5.jpg'
import trip2 from '../images/8.jpg'
import trip3 from '../images/6.jpg'

import React from 'react'

const Trip = () => {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Google Maps. </p>
        <div className="tripcard">
            <TripData 
            image={trip1}
            heading="Trip in Indonesia"
            text= "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est sed fuga magni placeat at cum, dolor dolores, ex omnis similique aspernatur voluptatibus reprehenderit, nulla enim eveniet numquam nam hic? Minima odio quam quos laudantium! " 

            />

<TripData 
            image={trip2}
            heading="Trip in Malaysia"
            text= "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est sed fuga magni placeat at cum, dolor dolores, ex omnis similique aspernatur voluptatibus reprehenderit, nulla enim eveniet numquam nam hic? Minima odio quam quos laudantium! " 
            
            />

<TripData 
            image={trip3}
            heading="Trip in Franch"
            text= "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est sed fuga magni placeat at cum, dolor dolores, ex omnis similique aspernatur voluptatibus reprehenderit, nulla enim eveniet numquam nam hic? Minima odio quam quos laudantium! " 
            
            />
        </div>
    </div>
  )
}

export default Trip