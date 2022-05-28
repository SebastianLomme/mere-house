import React from 'react'
import Card from "./Card"
import HouseIcon from "../images/house-solid.svg"
import PersonChalkboardIcon from "../images/person-chalkboard-solid.svg"
import GraduationCapIcon from "../images/graduation-cap-solid.svg"

export default function SectionOne() {
  const data = [
    {
      "title": "Dedicated Educators",
      "description": "All of our childcare educators are certified in Early Childhood Education. We understand the importance of getting a jump start on education at an early age",
      "icon": PersonChalkboardIcon,
    },
    {
      "title": "First-Rate environment",
      "description": "We embrace a childcare learning environment that will prepare children for the first day of school and beyond. The classroom is separated into various areas of learning that promote skill development through various hands-on activities.",
      "icon": GraduationCapIcon,
    },
    {
      "title": "Forest School",
      "description": "We believe that Outdoor Education should be a vital element of any well rounded learning experience for children. We strive to support all childrens' innate love of learning with highly qualified staff, equipment and stimulating environments.",
      "icon": HouseIcon
    }
  ]

  const Cards = data.map(item => <Card key={item.title} icon={item.icon} title={item.title} description={item.description} />)
  
  return (
    <div className="section-one container">
      {Cards}
    </div>
      )
}


