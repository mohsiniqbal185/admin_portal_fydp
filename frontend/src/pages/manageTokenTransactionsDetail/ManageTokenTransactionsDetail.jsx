import React from 'react'
import Header from '../../components/header/Header'
import Container from '../../components/container/Container'
import InfoFields from '../../components/infoFields/InfoFields'
import './manageTokenTransactionsDetail.scss'

const details = [{title:'Holder ID'},{title:'Holder Name'},{title:'Token Transaction ID'},{title:'Property Name'},{title:'Property ID'},{title:'Sender ID'},{title:'Number of Tokens'},{title:'Transaction Hash'},{title:'Payment Status'}]

function FieldsForInfo(){
  return (
    <>
      <InfoFields details={details}/>
      <div className='receipt-link'>
            View Payment Receipt
      </div>
      <div className='btn'>
        <button>Verify</button>
      </div>
      <div className='btn'>
        <button>Transfer Tokens</button>
      </div>
    </>
  )
}

const componentData = {title:'Transaction Details',caption:'The transaction details information is listed below.',component:<FieldsForInfo/>}

function ManageTokenTransactionsDetail() {
  return (
    <div>
      <Header title="Manage Token Transactions Detail"/>
      <Container tab={componentData}/>
    </div>
  )
}

export default ManageTokenTransactionsDetail