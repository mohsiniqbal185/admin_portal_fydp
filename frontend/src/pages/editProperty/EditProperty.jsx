import React, { useState } from 'react'
import './editProperty.scss'
import Header from '../../components/header/Header'
import FormInput from '../../components/FormInput/FormInput'

const headerOptions = {title:'Edit Property'}

const propertyInitial = {property_type:'', value_in_pkr:'', size_of_property:'', location:'', property_name:'', property_code:''}

function EditProperty() {
  const [propertyValues,setPropertyValues] = useState(propertyInitial)
  
  const propertyInput = [
    {label:'Property Type',name:'propertyType',type:'string',value:propertyValues.property_type},
    {label:'Value in PKR',name:'valueInPKR',type:'string',value:propertyValues.value_in_pkr},
    {label:'Property Size',name:'propertySize',type:'string',value:propertyValues.size_of_property},
    {label:'Location',name:'location',type:'string',value:propertyValues.location},
    {label:'Property Name',name:'propertyName',type:'string',value:propertyValues.property_name},
    {label:'Property Code',name:'propertyCode',type:'string',value:propertyValues.property_code},
  ]

  function handlePropertyInputs(e){
    setPropertyValues({...propertyValues,[e.target.name]:e.target.value})
  }

  function handleTokenProperty(e){
    e.preventDefault()
  }

  return (
    <div>
        <Header title={headerOptions.title}/>
        <div className='edit-form'>
        <form onSubmit={handleTokenProperty}>
            {propertyInput.map((input)=>(
                  <div className="input-box" key={input.name}>
                      <FormInput label={input.label} name={input.name} value={input.value} setValue={handlePropertyInputs} type={input.type}/>
                  </div>
              ))}
            <div className="form-btn">
                <button>Update</button>
            </div>
          </form>
          </div>
    </div>
  )
}

export default EditProperty