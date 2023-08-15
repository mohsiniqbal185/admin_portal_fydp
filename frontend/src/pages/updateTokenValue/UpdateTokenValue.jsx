import React from 'react'
import Header from '../../components/header/Header'
import ProductCard from '../../components/productCard/ProductCard'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const headerOptions = {title:'Update Token Value'}

function UpdateTokenValue() {
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

export default UpdateTokenValue