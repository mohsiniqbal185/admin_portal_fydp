import React from 'react'
import './infoFields.scss'

function InfoFields({details}) {
  return (
        <div className='details-fields'>
            {details?.map((item)=>(
                <div>
                    <h4>{item.title}</h4>
                    <p>Value</p>
                </div>
            ))}
        </div>
  )
}

export default InfoFields