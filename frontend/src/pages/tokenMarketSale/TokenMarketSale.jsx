import React from 'react'
import './tokenMarketSale.scss'
import Header from '../../components/header/Header'

const headerOptions = {title:'Token Market Sale'}

function TokenMarketSale() {
  return (
    <div>
        <Header title={headerOptions.title}/>
    </div>
  )
}

export default TokenMarketSale