import React from 'react'
import {Link} from 'react-router-dom'

const Gymcard = (props) => {
  return (

    <article  className='expert'>
      <div className="flex">
        <img src={`images/${props.id}.jpg`} className="expert-img" alt="" />
        <div className="expert-text-box">
          <div className="expert-bio">
            <h1 className="expert-name">{props.title}</h1>
            <h1 className="expert-sub">{props.title}</h1>
            <span className="expert-sub">Experience: {props.title} yrs</span>
          </div>
          <div className="expert-detail">
                        {props.title} has a <em>{props.title}</em> degree and an assorted experiencce in the fitness industry for <strong>{props.title}</strong> years. {props.title === 'female' ? "She" : "He"} {props.title === 'nut' ? 'work involves optimizing the calorie in-take and enhancing the metabolism which ensures a healthy body and a sharper mind.' : 'is highly skilled and motivating when it comes to being a personal trainer.'}
                    </div>
        </div>
      </div>
      <div to="" className="expert-btn">
                read more
            </div>
    </article >

  )
}

export default Gymcard
