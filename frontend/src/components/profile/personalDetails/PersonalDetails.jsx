import React from 'react'
import './personalDetails.scss'
import InfoFields from '../../infoFields/InfoFields'

const details = [{title:'First Name'},{title:'Last Name'},{title:'Email'},{title:'Contact Number'},{title:'CNIC'}]

function PersonalDetails() {
  return (
    <div>
        <InfoFields details={details}/>
    </div>
  )
}

export default PersonalDetails