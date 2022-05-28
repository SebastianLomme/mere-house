import React from 'react'
import Card from "./Card"
import StarIcons from "../images/stars5.svg"

function SectionReviews() {

    const data = [
        {
          "title": "çelineAndy Gallop",
          "description": "We would like to say a big thank you to the kids and staff from the nursery today giving out treats to the residents of roman Road in the bungalows and the kids saying Merry Christmas and they were all kept at the gates so they were safe. A really big thank you to you all and a Merry Christmas to you all",
          "icon": StarIcons,
        },
        {
          "title": "Orrel Musical and Dramatic Society",
          "description": "My two children are absolutely thriving at this nursery. The staff are incredible and you can tell that they really care about each individual child. I feel 100% confident leaving my children in their care each day and the education they receive is second to none ranging from ballet to French, baking to sports classes. The forest school is an excellent addition to an already fantastic nursery. 10/10 from us :) I have no doubt that my 2 will be school ready when the time comes although leaving Mere House will be like leaving a little family!",
          "icon": StarIcons,
        },
        {
          "title": "Lindsey Dajani",
          "description": "Absolutely love this nursery and Pre School. My little girl started 2.5 years ago and she has loved every experience here. From forest school, to French, sports, ballet dancing and the special Christmas show. She is certainly ready for school, writing her own name on the board as she comes in! I can’t thank the staff at Mere House enough, they have so much patience and time for every child and parent! You will find it very hard to find a better place to leave your child...",
          "icon": StarIcons
        }
      ]
    
    const Cards = data.map(item => <Card key={item.title} icon={item.icon} title={item.title} description={item.description} />)
    

    return (
        <div className="review-container">
            <h3>Reviews</h3>
            <div className="section-review container">
                {Cards}
            </div>
            
        </div>
    )
}

export default SectionReviews