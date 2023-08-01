import React from 'react'
import './personalDetails.scss'

const details = [{title:'First Name'},{title:'Last Name'},{title:'Email'},{title:'Contact Number'},{title:'CNIC'}]

function PersonalDetails() {
  return (
    <div>
        <div className='details-fields'>
            {details?.map((item)=>(
                <div>
                    <h4>{item.title}</h4>
                    <p>Value</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PersonalDetails