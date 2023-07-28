import React from 'react'
import './tokenPayments.scss'
import Header from '../../components/header/Header'

const headerOptions = {title:'Token Payments'}

function TokenPayments() {
  return (
    <div>
        <Header title={headerOptions.title}/>
    </div>
  )
}

export default TokenPayments