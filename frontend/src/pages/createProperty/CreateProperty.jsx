import React from 'react'
import './createProperty.scss'
import Header from '../../components/header/Header'

const headerOptions = {title:'Create Property'}

function CreateProperty() {
  return (
    <div>
        <Header title={headerOptions.title}/>
    </div>
  )
}

export default CreateProperty