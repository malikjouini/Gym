import React from 'react'

const Showgym = (props) => {
  console.log(props)
  return (
    <div>
      <div id="slideshow">
        <div class="slide-wrapper">
          <div class="slide"><img src={`../images/${props.id}.jpg`} className="" alt="" /></div>
          <div class="slide"><h1 class="slide-number">2</h1></div>
          <div class="slide"><h1 class="slide-number">3</h1></div>
          <div class="slide"><h1 class="slide-number">4</h1></div>
          <div class="slide"><h1 class="slide-number">5</h1></div>
        </div>

      </div>
      <article className="individual__price">
      <h1 className="title">{props.title}</h1>

                        <h1 className="price-heading">85 DT <small>per month</small></h1>
                        <div className="paragraph card-paragraph">
                            <span className="mini-desc">Basic package. </span><br/><small> For all those who want to live healthy and happy. Best suited for regular users.</small>
                            <strong className="mini-desc">What you get : </strong>
                            <ul className="individual__list">
                                <li className="individual__item">Cardio and Yoga</li>
                                <li className="individual__item">Core strength enhancing exercises</li>
                                <li className="individual__item">Crossfit exercises</li>
                                <li className="individual__item">Nutritional guidance</li>
                                <li className="individual__item">Personal Trainer</li>
                            </ul>
                        </div>
                    </article>
    </div>
  )
}

export default Showgym
