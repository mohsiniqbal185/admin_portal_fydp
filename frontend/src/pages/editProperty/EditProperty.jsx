import React, { useState } from 'react'
import './editProperty.scss'
import Header from '../../components/header/Header'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ProductCard from '../../components/productCard/ProductCard'
import { useLocation } from 'react-router-dom'


const headerOptions = {title:'Edit Property'}

function EditProperty() {
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

export default EditProperty