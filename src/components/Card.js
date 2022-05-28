import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="circle">
          <img src={props.icon} alt="" />
        </div>
        <h3 className="card-title">
          {props.title}
        </h3>
        <p className="card-content">{ props.description }</p>
      </div>
    </div>
  )
}
