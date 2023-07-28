import React from 'react'
import './editProperty.scss'
import Header from '../../components/header/Header'

const headerOptions = {title:'Edit Property'}

function EditProperty() {
  return (
    <div>
        <Header title={headerOptions.title}/>
    </div>
  )
}

export default EditProperty