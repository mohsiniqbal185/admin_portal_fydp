import React from 'react'
import './viewRentalTransactions.scss'
import Header from '../../components/header/Header'
import ProductCard from '../../components/productCard/ProductCard'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const headerOptions = {title:'Rental Transactions',caption:'View'}

function ViewRentalTransactions() {
  const {pathname} = useLocation();

  const { isLoading, error, data } = useQuery({
    queryKey: ['propertyData'],
    queryFn: () =>
      axios.get('/api/admin/view_token_transactions').then(
          (res) => res.data
      ),
  })

  return (
    <div>
        <Header title={headerOptions.title} caption={headerOptions.caption}/>
        <div className='product-card-group'>
            {data?.map((project,i)=>{
            return(
                <ProductCard project={project} i={i} pathname={pathname}/>
            )
            })}
        </div>
    </div>
  )
}

export default ViewRentalTransactions