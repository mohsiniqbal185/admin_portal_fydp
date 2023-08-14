import React, { useState } from 'react'
import './createProperty.scss'
import Header from '../../components/header/Header'
import FormInput from '../../components/FormInput/FormInput'
import axios from 'axios'
const headerOptions = {title:'Create Property'}

const smartContractInitial = {smartContractAddress:'',smartContractABI:''}

const tokenInitial = {tokenName:'Dolmen REIT',tokenSupply:'50',tokenShortForm:'DR'}

const propertyInitial = {smartContractAddress: '',property_type:'', value_in_pkr:'', size_of_property:'', location:'', property_name:'', property_code:''}

function CreateProperty() {
  const [smartContractValues,setSmartContractValues] = useState(smartContractInitial);
  const [tokenValues,setTokenValues] = useState(tokenInitial);
  const [propertyValues,setPropertyValues] = useState(propertyInitial)
  const [show,setShow] = useState(false)

  function handleContractInputs(e){
    setSmartContractValues({...smartContractValues,[e.target.name]:e.target.value})
  }

  function handlePropertyInputs(e){
    setPropertyValues({...propertyValues,[e.target.name]:e.target.value})
  }

  const smartContractInput = [
      {label:'Smart Contract Address',name:'smartContractAddress',type:'string',value:smartContractValues.smartContractAddress},

  ]

  const tokenInput = [
    {label:'Smart Contract Address',name:'smartContractAddress',type:'string',value:tokenValues.smartContractAddress2,disabled:true},
    {label:'Token Name',name:'tokenName',type:'string',value:tokenValues.tokenName,disabled:true},
    {label:'Token Supply',name:'tokenSupply',type:'string',value:tokenValues.tokenSupply,disabled:true},
    {label:'Token Short Form',name:'tokenShortForm',type:'string',value:tokenValues.tokenShortForm,disabled:true},
  ]

  const propertyInput = [
    {label:'Property Type',name:'property_type',type:'string',value:propertyValues.property_type},
    {label:'Value in PKR',name:'value_in_pkr',type:'string',value:propertyValues.value_in_pkr},
    {label:'Property Size',name:'size_of_property',type:'string',value:propertyValues.size_of_property},
    {label:'Location',name:'location',type:'string',value:propertyValues.location},
    {label:'Property Name',name:'property_name',type:'string',value:propertyValues.property_name},
    {label:'Token Value',name:'token_value',type:'string',value:propertyValues.token_value},
    {label:'Property Code',name:'property_code',type:'string',value:propertyValues.property_code},
  ]

  const imageInput = [
    {label:'Image',name:'images',type:'file',multiple:{multiple: true},allow:"image/jpeg, image/png"},
  ]
  const payload = {
    smartContractAddress: smartContractValues.smartContractAddress,
  };
  async function handleSmartContract(e){
    e.preventDefault()
    try {
      const response = await fetch('/api/admin/manage_properties/create-property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const responseData = await response.json();
  
        // Set the token values from the response
        setTokenValues({
          smartContractAddress2: responseData.smart_Contract_Address,
          tokenName: responseData.tokenName,
          tokenSupply: responseData.totalSupply,
          tokenShortForm: responseData.tokenSymbol,
        });
  
        // Show the second form
        setShow(true);
      } else {
        // Handle error response from the backend
        console.error('Failed to fetch token data from the backend');
      }
    } catch (error) {
      console.error('Error sending request to the backend:', error);
    }
  }
  const payload_property = {
    smartContractAddress: smartContractValues.smartContractAddress,
    tokenName:tokenValues.tokenName[0],
    tokenSupply:tokenValues.tokenSupply,
    tokenShortForm:tokenValues.tokenShortForm[0],
    property_type:propertyValues.property_type,
    value_in_pkr:propertyValues.value_in_pkr,
    size_of_property:propertyValues.size_of_property,
    location:propertyValues.location,
    property_name:propertyValues.property_name,
    token_value:propertyValues.token_value,
    property_code:propertyValues.property_code,
  };
  async function handleTokenProperty(e){
    e.preventDefault()
    const response = await fetch('/api/admin/manage_properties/insert-property', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload_property),
    });

    if (response.ok) {
      const responseData = await response.json();
      alert(responseData.message);



  }
}

  return (
    <div>
        <Header title={headerOptions.title}/>
        <div className='create-form'>
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
                    {/* <input style={{display: "none"}} id="file" type='file' name='image' accept='.jpg, .jpeg, .png' onChange={(e)=> setFile(e.target.files[0])} onClick={(event)=> event.target.value = null}/> */}

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