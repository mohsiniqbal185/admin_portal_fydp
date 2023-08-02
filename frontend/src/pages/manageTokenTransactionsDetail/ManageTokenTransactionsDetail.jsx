import React from 'react'
import Header from '../../components/header/Header'
import Container from '../../components/container/Container'
import InfoFields from '../../components/infoFields/InfoFields'

const details = [{title:'Holder ID'},{title:'Holder Name'},{title:'Token Transaction ID'},{title:'Property Name'},{title:'Property ID'},{title:'Sender ID'},{title:'Number of Tokens'},{title:'Transaction Hash'},{title:'Payment Status'}]

function FieldsForInfo(){
  return (
  <InfoFields details={details}/>
  )
}

const componentData = {title:'Token Payments',caption:'The token payments information is listed below.',component:<FieldsForInfo/>}

function ManageTokenTransactionsDetail() {
  return (
    <div>
      <Header title="Manage Token Transactions Detail"/>
      <Container tab={componentData}/>
    </div>
  )
}

export default ManageTokenTransactionsDetail