import React from 'react'
import './manageRentalTransactions.scss'
import Header from '../../components/header/Header'

const headerOptions = {title:'Rental Transactions',caption:'Manage'}

function ManageRentalTransactions() {
  return (
    <div>
        <Header title={headerOptions.title} caption={headerOptions.caption}/>
    </div>
  )
}

export default ManageRentalTransactions