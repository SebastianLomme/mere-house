import React from 'react'
import imageOne from "../images/room03.png"
import imageTwo from "../images/preSchoolRoom.png"

function SpecialPlaces() {
    return (
        <div className="special-places">
            <h3>Our special places</h3>
            <div className="room-section">
                <div className="room-section-content">
                    <h3>0-3 room</h3>
                    <p>We don’t like to age restrict our rooms but believe children will feel happiest and most confident in this room until they are roughly 3 years of age and then it is time to progress. We provide stimulating environments and activities in here to start a child’s  journey for learning  and communication. A variety of experiences are available for the children in this room including treasure baskets, cosy corners, sensory areas, home corner, messy play area. 
                        Children in this room will start to explore their skills, environments and independence. We have direct access to our outdoor play  area and a large range of choices inside including book and cosy corner, home corner, construction and small world play, outdoor sports lessons, dance and baby sign.</p>
                        <div className="circle circle-one"></div>
                    <div className="circle circle-two"></div>
                    <div className="circle circle-three"></div>
                    <div className="circle circle-four"></div>
                </div>
                <div className="room-section-image">
                    <img src={imageOne} alt="" />
                </div>
            </div>
            <div className="room-section">
                <div className="room-section-content order-one">
                    <h3>Pre school room</h3>
                    <p>As children’s confidence grows and they start to       demonstrate skills in building relationships they are becoming ready for school and we will help this transition in our pre school. We work with the local primary schools to ensure the child’s transition is as smooth as possible.
  Through play children improve their knowledge and understanding of the world. We have the opportunity to offer interactive ICT  equipment for the children, maths, literacy, dance sessions, sports lessons, forest school sessions and sign language.</p>
                        <div className="circle circle-one"></div>
                    <div className="circle circle-two"></div>
                    <div className="circle circle-three"></div>
                    <div className="circle circle-four"></div>
                </div>
                <div className="room-section-image">
                    <img src={imageTwo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SpecialPlaces