import React from 'react'
import Card from "./Card"
import EmmaIcon from "../images/Emma.png"
import LaurenIcon from "../images/Lauren.png"
import LesleyAnnIcon from "../images/LesleyAnn.png"

function MeetTheTeam() {
    const data = [
        {
            "title": "Emma",
            "description": "I started my career in childcare as an apprentice in 2014. Once qualified I began working at Mere House in 2018 in the preschool room. After a year in preschool I moved into the 0-3 room where I am a keyperson. I am currently working towards gaining my driving licence ",
            "icon": EmmaIcon
        },
        {
            "title": "Lauren",
            "description": "I have worked at Mere House since we opened in 2016. I began my career in childcare as an apprentice 12 years ago. I joined Mere House as Room Leader in the 0-3 years room and I have worked my way up to  Deputy Manager and now I have just taken over as Manager.",
            "icon": LaurenIcon
        },
        {
            "title": "LesleyAnn",
            "description": "I have worked at Mere House since 2017. I have over 20 years experience working within childcare, during which I ran my own childminding business for 12 years. I am also the Communication Champion and Behaviour Officer for the nursery.",
            "icon": LesleyAnnIcon
        }
    ]
    data.map(item => console.log(item.icon))
    const Cards = data.map(item => <Card key={item.title} title={item.title} description={item.description} icon={item.icon} />)
    return (
        <div className="meet_the_team">
            <h3>Meet the team</h3>
            <div className="team-container container">
                {Cards}
            </div>
            <button className="btn btn-light">All Team</button>
        </div>
    )
}

export default MeetTheTeam