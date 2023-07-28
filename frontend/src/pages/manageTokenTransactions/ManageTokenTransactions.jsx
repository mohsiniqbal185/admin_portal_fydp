import React from 'react'
import './manageTokenTransactions.scss'
import Header from '../../components/header/Header'

const headerOptions = {title:'Token Transactions',caption:'Manage'}

function ManageTokenTransactions() {
  return (
    <div>
        <Header title={headerOptions.title} caption={headerOptions.caption}/>
    </div>
  )
}

export default ManageTokenTransactions