import React from 'react'
import DestinationData from './DestinationData'
import './Destinationstyle.css'
import mountain1 from '../images/1.jpg'
import mountain2 from '../images/2.jpg'

import mountain3 from '../images/3.jpg'
import mountain4 from '../images/4.jpg'

const Destination = () => {
  return (
    <div className='Destination'>
<h1>Popular Destinations</h1>
<p>Tour gives you a apportunity to see a lot, within a time frame</p>

<DestinationData 
className="first-des"
heading="Taal Volcano, Batangas" 
    text="One of the most Iconic views in Luzon, Mt. Taal boosts a valcano insise a lake inside an island. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus porro unde quo rerum, quas aliquid? Voluptates hic in deleniti, est id doloremque accusantium suscipit omnis ratione dolorem illum itaque optio porro aperiam praesentium! Aliquid, beatae!"
    img1={mountain1}
    img2={mountain2}
/>

<DestinationData 
className="first-des-rev"
heading="Mt. Daguldul, Batangas" 
    text="One of the most Iconic views in Luzon, Mt. Taal boosts a valcano insise a lake inside an island. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus porro unde quo rerum, quas aliquid? Voluptates hic in deleniti, est id doloremque accusantium suscipit omnis ratione dolorem illum itaque optio porro aperiam praesentium! Aliquid, beatae!"
    img1={mountain3}
    img2={mountain4}
/>

    </div>
  )
}

export default Destination