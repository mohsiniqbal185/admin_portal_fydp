import React from 'react'
import './manageTokenTransactions.scss'
import Header from '../../components/header/Header'
import ProductCard from '../../components/productCard/ProductCard'
import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const headerOptions = {title:'Token Transactions',caption:'Manage'}

function ManageTokenTransactions() {
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

export default ManageTokenTransactions