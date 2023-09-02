import React, { useEffect, useState } from 'react'
import './singleViewTokenTransactions.scss'
import Header from '../../components/header/Header'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import Datatable from '../../components/datatable/Datatable'
import { handleUserRowsCompleted, userColumnsCompleted } from './CompletedTableSource'
import { handleUserRowsPending,userColumnsPending } from './PendingTableSource'
import { slideVariants } from '../../utilities/animations'
import { motion } from 'framer-motion'

function SingleViewTokenTransactions() {
  const [userRowsCompleted,setUserRowsCompleted] = useState([])
  const [userRowsPending,setUserRowsPending] = useState([])
  const {projectId} = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['propertyDataSingle'],
    queryFn: () =>
      axios.get(`/api/admin/view_token_transactions/${projectId}`).then(
          (res) => res.data
      ),
  })


    useEffect(()=>{
      if(data){

        setUserRowsCompleted(handleUserRowsCompleted(data.transactionsData))
        setUserRowsPending(handleUserRowsPending(data.PendingTransactionsData))
      }
    },[data])

      const [open, setOpen] = useState(false)
      const handleClick = () => {
        setOpen(true)
        navigator.clipboard.writeText(window.location.toString())
      }
  return (
    <div>
      <Header title='View Completed Token Transactions' iconProp={<ApartmentOutlinedIcon/>}/>
      <motion.div variants={slideVariants} initial='initial' animate='animate'>
        <Datatable userRows={userRowsCompleted} userColumns={userColumnsCompleted}/>
      </motion.div>
      <Header title='View Pending Token Transactions' iconProp={<ApartmentOutlinedIcon/>}/>
      <motion.div variants={slideVariants} initial='initial' animate='animate'>
        <Datatable userRows={userRowsPending} userColumns={userColumnsPending}/>
      </motion.div>
      {/* {/* <div>{userRowsCompleted}</div> */}
    </div>
  )
}

export default SingleViewTokenTransactions