import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
            <i class='bx bx-award about__icon'></i>
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>3+ Years Working</span>
        </div>
        <div className='about__box'>
            <i class='bx bx-hard-hat about__icon'></i>
            <h3 className='about__title'>Work Hard</h3>
            <span className='about__subtitle'>experience in several projects</span>
        </div>
        <div className='about__box'>
            <i class='bx bx-target-lock about__icon'></i>
            <h3 className='about__title'>Customer focus</h3>
            <span className='about__subtitle'>serving the customer in the best way</span>
        </div>
    </div>
  )
}

export default Info