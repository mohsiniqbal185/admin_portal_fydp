import React, { useEffect, useState } from 'react'
import './tokenMarketSale.scss'
import Header from '../../components/header/Header'
import axios from 'axios'
import { handleUserRows, userColumns } from './TableSource'
import Datatable from '../../components/datatable/Datatable'
import { slideVariants } from '../../utilities/animations'
import { motion } from 'framer-motion'

const headerOptions = {title:'Token Market Sale'}

function TokenMarketSale() {
  const [data,setData] = useState([])

  useEffect(() => {
    const fetchPendingTransactionsOfUser = async () => {
      try{
        const res = await axios.get(`/api/user/sale/list`)
        console.log(res.data)
        setData(handleUserRows(res.data))
      }
      catch{
        console.log("something went wrong")
      }

    }

    fetchPendingTransactionsOfUser()
  }, [])
  return (
    <div>
        <Header title={headerOptions.title}/>
        <motion.div variants={slideVariants} initial='initial' animate='animate'>
          <Datatable userRows={data} userColumns={userColumns}/>
        </motion.div>
    </div>
  )
}

export default TokenMarketSale