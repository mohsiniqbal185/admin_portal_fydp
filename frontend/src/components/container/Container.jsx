import React from 'react'
import './container.scss'

function Container({tab}) {
    const {title,caption,component} = tab
  return (
    <div className='settings-container'>
        <h3>{title}</h3>
        <small>{caption}</small>
        {component}
    </div>
  )
}

export default Container