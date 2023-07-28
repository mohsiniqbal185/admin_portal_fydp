import React, { useEffect, useState } from 'react'
import './viewTokenTransactions.scss'
import Header from '../../components/header/Header'
import axios from 'axios'
import ProductCard from '../../components/productCard/ProductCard'

const headerOptions = {title:'Token Transactions',caption:'View'}


export const projects = [{title:'Project Title 1',desc:'Some description of the project',addr:'Phase V, DHA, Karachi',available:false,properties:[{title:'Total Tokens',value:500},{title:'Tokens Left',value:300},{title:'Token Price',value:30000},{title:'% of Rent/Token',value:10}]},
{title:'Project Title 2',desc:'Some description of the project',addr:'Block 11, PECHS, Karachi',available:true,properties:[{title:'Total Tokens',value:600},{title:'Tokens Left',value:100},{title:'Token Price',value:40000},{title:'% of Rent/Token',value:20}]}]

function ViewTokenTransactions() {
//     const [properties, setProperties] = useState([])

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try{
//         const res = await axios.get("/properties/")
//         console.log(res.data)
//         setProperties(res.data)
//         // console.log("propertiess",properties)
//       } catch(err) {
//         console.log(err)
//       } 
//     }
//     fetchProperties()
//   }, [])


  return (
    <div>
        <Header title={headerOptions.title} caption={headerOptions.caption}/>
        <div className='product-card-group'>
            {projects?.map((project,i)=>{
            return(
                <ProductCard project={project} i={i}/>
            )
            })}
      </div>
    </div>
  )
}

export default ViewTokenTransactions