import React from 'react'
import './viewRentalTransactions.scss'
import Header from '../../components/header/Header'

const headerOptions = {title:'Rental Transactions',caption:'View'}

function ViewRentalTransactions() {
  return (
    <div>
        <Header title={headerOptions.title} caption={headerOptions.caption}/>
    </div>
  )
}

export default ViewRentalTransactions