import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import FormInput from '../../components/FormInput/FormInput'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const headerOptions = {title:'Edit Property'}

const propertyInitial = {property_type:'', value_in_pkr:'', size_of_property:'', location:'', name:'', property_code:''}

function SingleEditProperty() {
    const [propertyValues,setPropertyValues] = useState(propertyInitial)
    const {projectId} = useParams()
    const { isLoading, error, data } = useQuery({
        queryKey: [`propertyData${projectId}`],
        queryFn: () =>
          axios.get(`/api/admin/manage_properties/edit-property?property_id=${projectId}`).then(
              (res) => res.data
          ),
      })
    
    useEffect(()=>{
        if(data){
            setPropertyValues(data[0])
        }
    },[data])
  
  const propertyInput = [
    {label:'Property Name',name:'propertyName',type:'string',value:propertyValues.name},
    {label:'Property Type',name:'propertyType',type:'string',value:propertyValues?.property_type},
    {label:'Value in PKR',name:'valueInPKR',type:'string',value:propertyValues.value_in_pkr},
    {label:'Property Size',name:'propertySize',type:'string',value:propertyValues.size_of_property},
    {label:'Location',name:'location',type:'string',value:propertyValues.location},
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

export default SingleEditProperty