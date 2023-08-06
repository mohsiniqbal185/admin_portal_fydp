import React from 'react'
import Header from '../../components/header/Header'
import InfoFields from '../../components/infoFields/InfoFields'
import Container from '../../components/container/Container'
import './tokenPaymentsDetail.scss'

const details = [{title:'Payment ID'},{title:'Payment Method'},{title:'Payment From'},{title:'DateTime'},{title:'Transaction ID'},{title:'Payment Status'}]

function FieldsForInfo(){
  return (
    <>
      <InfoFields details={details}/>
      <div className='receipt-link'>
        View Payment Receipt
      </div>
    </>
  )
}

const componentData = {title:'Token Payments',caption:'The token payments information is listed below.',component:<FieldsForInfo/>}


function TokenPaymentsDetail() {
  return (
    <div>
      <Header title="Token Payments Detail"/>
      <Container tab={componentData}/>
    </div>
  )
}

export default TokenPaymentsDetail