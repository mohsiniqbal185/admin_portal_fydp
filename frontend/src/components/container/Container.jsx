import React from 'react'
import './container.scss'

function Container({tab}) {

  return (
    <div className='settings-container'>
        <h3>{tab?.title}</h3>
        <small>{tab?.caption}</small>
        {tab?.component}
    </div>
  )
}

export default Container