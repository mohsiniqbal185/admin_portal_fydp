import React, { useEffect, useState } from 'react'
import './viewTokenTransactions.scss'
import Header from '../../components/header/Header'
import axios from 'axios'
import ProductCard from '../../components/productCard/ProductCard'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const headerOptions = {title:'Token Transactions',caption:'View'}


export const projects = [{title:'Project Title 1',desc:'Some description of the project',addr:'Phase V, DHA, Karachi',available:false,properties:[{title:'Total Tokens',value:500},{title:'Tokens Left',value:300},{title:'Token Price',value:30000},{title:'% of Rent/Token',value:10}]},
{title:'Project Title 2',desc:'Some description of the project',addr:'Block 11, PECHS, Karachi',available:true,properties:[{title:'Total Tokens',value:600},{title:'Tokens Left',value:100},{title:'Token Price',value:40000},{title:'% of Rent/Token',value:20}]}]

function ViewTokenTransactions() {
    // const [properties, setProperties] = useState([])
    const {pathname} = useLocation();

  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     try{
  //       const res = await axios.get("api/admin/view_token_transactions")
  //       setProperties(res.data)
  //     } catch(err) {
  //       console.log(err)
  //     } 
  //   }
  //     fetchProperties()
  // }, [])

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
                <ProductCard key={project.property_id} project={project} i={i} pathname={pathname}/>
            )
            })}
        </div>
    </div>
  )
}

export default ViewTokenTransactions