import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import FormInput from '../../components/FormInput/FormInput'
import './singleUpdateTokenValue.scss'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import InfoFields from '../../components/infoFields/InfoFields'
import Container from '../../components/container/Container'
import axios from 'axios'

const initialValue = {tokenValue:''}

const headerOptions = {title:'Update Token Value'}


function SingleUpdateTokenValue() {
  const [values,setValues] = useState(initialValue);
  const { state: { project } = {} } = useLocation();
  const {property_id,name,token_value} = project
  const navigate = useNavigate()
  
    function handleInputs(e){
        if(e.target.value > 0 || e.target.value === ''){
            setValues({...values,[e.target.name]:e.target.value})
        }
    }

  
    const inputs = [
        {label:'Token Value',name:'tokenValue',type:'number',value:values.tokenValue},
  ]

  const details = [
    {title:'Property Name',value:name},
    {title:'Token Value',value:token_value},
  ]

  async function handleform(e){
    e.preventDefault()
    try {
        const response = await axios.post(`/api/admin/update-token-price/update/${property_id}`,{
            property_id:property_id,
            token_value:values.tokenValue
        });
        navigate('/update-token-value')
      } catch (error) {
        console.log(error)
      } 
  }

function FieldsForInfo() {
    return (
      <>
      <InfoFields details={details}/>
      <form onSubmit={handleform}>
          {inputs?.map((input)=>(
              <div className="input-box" key={input.name}>
                  <FormInput label={input.label} name={input.name} value={input.value} setValue={handleInputs} type={input.type}/>
              </div>
          ))}
      <div className="form-btn">
          <button>Update</button>
      </div>
      </form>
      </>
    )
  }

  return (
    <div className='update-tokens'>
        <Header title={headerOptions.title}/>
        <Container tab={{title:'Property Details',caption:'The property details are listed below.',component:<FieldsForInfo/>}}/>
    </div>
  )
}

export default SingleUpdateTokenValue