import React, { useState } from 'react'
import './createProperty.scss'
import Header from '../../components/header/Header'
import FormInput from '../../components/FormInput/FormInput'

const headerOptions = {title:'Create Property'}

const smartContractInitial = {smartContractAddress:''}

const tokenInitial = {tokenName:'Dolmen REIT',tokenSupply:'50',tokenShortForm:'DR'}

const propertyInitial = {property_type:'', value_in_pkr:'', size_of_property:'', location:'', property_name:'', property_code:''}

function CreateProperty() {
  const [smartContractValues,setSmartContractValues] = useState(smartContractInitial);
  const [tokenValues,setTokenValues] = useState(tokenInitial);
  const [propertyValues,setPropertyValues] = useState(propertyInitial)
  const [show,setShow] = useState(false)

  function handleContractInputs(e){
    setSmartContractValues({...smartContractValues,[e.target.name]:e.target.value})
    console.log('dsa')
  }

  function handlePropertyInputs(e){
    setPropertyValues({...propertyValues,[e.target.name]:e.target.value})
  }

  const smartContractInput = [
      {label:'Smart Contract Address',name:'smartContractAddress',type:'string',value:smartContractValues.smartContractAddress},
  ]

  const tokenInput = [
    {label:'Token Name',name:'tokenName',type:'string',value:tokenValues.tokenName,disabled:true},
    {label:'Token Supply',name:'tokenSupply',type:'string',value:tokenValues.tokenSupply,disabled:true},
    {label:'Token Short Form',name:'tokenShortForm',type:'string',value:tokenValues.tokenShortForm,disabled:true},
  ]

  const propertyInput = [
    {label:'Property Type',name:'propertyType',type:'string',value:propertyValues.property_type},
    {label:'Value in PKR',name:'valueInPKR',type:'string',value:propertyValues.value_in_pkr},
    {label:'Property Size',name:'propertySize',type:'string',value:propertyValues.size_of_property},
    {label:'Location',name:'location',type:'string',value:propertyValues.location},
    {label:'Property Name',name:'propertyName',type:'string',value:propertyValues.property_name},
    {label:'Property Code',name:'propertyCode',type:'string',value:propertyValues.property_code},
  ]

  const imageInput = [
    {label:'Image',name:'image',type:'file',multiple:{multiple: true},allow:"image/jpeg, image/png"},
  ]

  function handleSmartContract(e){
    e.preventDefault()
    setShow(true)
  }

  function handleTokenProperty(e){
    e.preventDefault()
  }

  return (
    <div>
        <Header title={headerOptions.title}/>
        <div className='contract-form'>
          {!show ?
          <form onSubmit={handleSmartContract}>
            {smartContractInput.map((input)=>(
                  <div className="input-box" key={input.name}>
                      <FormInput label={input.label} name={input.name} value={input.value} setValue={handleContractInputs} type={input.type}/>
                  </div>
              ))}
            <div className="form-btn">
                <button>Verify</button>
            </div>
          </form>:
          <form onSubmit={handleTokenProperty}>
            {tokenInput.map((input)=>(
                  <div className="input-box" key={input.name}>
                      <FormInput label={input.label} name={input.name} value={input.value} type={input.type} disabled={input.disabled}/>
                  </div>
              ))}
            {propertyInput.map((input)=>(
                  <div className="input-box" key={input.name}>
                      <FormInput label={input.label} name={input.name} value={input.value} setValue={handlePropertyInputs} type={input.type}/>
                  </div>
              ))}
            {imageInput.map((input)=>(
                <div className="input-box" key={input.name}>
                    <FormInput name={input.name} value={input.value} setValue={handlePropertyInputs} type={input.type} multiple={input.multiple} accept={input.allow}/>
                </div>
            ))}
            <div className="form-btn">
                <button>Submit</button>
            </div>
          </form>
          }
        </div>
    </div>
  )
}

export default CreateProperty