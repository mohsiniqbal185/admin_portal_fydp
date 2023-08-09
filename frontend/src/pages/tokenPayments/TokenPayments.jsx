import React, { useEffect, useState } from 'react'
import './tokenPayments.scss'
import Header from '../../components/header/Header'
import { projects } from '../viewTokenTransactions/ViewTokenTransactions'
import ProductCard from '../../components/productCard/ProductCard'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const headerOptions = {title:'Token Payments'}

function TokenPayments() {
  const {pathname} = useLocation()

  const { isLoading, error, data } = useQuery({
    queryKey: ['propertyData'],
    queryFn: () =>
      axios.get('/api/admin/view_token_transactions').then(
          (res) => res.data
      ),
  })

  return (
    <div>
        <Header title={headerOptions.title}/>
        <div className='product-card-group'>
            {data?.map((project,i)=>{
            return(
                <ProductCard key={project.property_id} project={project} i={i} pathname={pathname}/>
            )
            })}
        </div>
    </div>
  )
}

export default TokenPayments