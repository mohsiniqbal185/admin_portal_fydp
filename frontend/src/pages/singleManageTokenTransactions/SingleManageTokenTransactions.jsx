import React, { useEffect, useState } from 'react'
import './singleManageTokenTransactions.scss'
import Header from '../../components/header/Header'
import Datatable from '../../components/datatable/Datatable'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import { handleUserRowsPending, userColumnsPending } from './TableSource'
import { slideVariants } from '../../utilities/animations'
import { motion } from 'framer-motion'

function SingleManageTokenTransactions() {
  const [userRowsPending,setUserRowsPending] = useState([])
  const {projectId} = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['propertyDataManage'],
    queryFn: () =>
      axios.get(`/api/admin/manage_token_transactions/${projectId}`).then(
          (res) => res.data
      ),
  })

  // const property = data?.filter((p)=>p.property_id == projectId)

    useEffect(()=>{
      if(data){
        setUserRowsPending(handleUserRowsPending(data))
      }
    },[data])

    console.log(data)

    console.log(userRowsPending)

    console.log(userColumnsPending)
  return (
    <div>
      <Header title='Manage Token Transactions' iconProp={<ApartmentOutlinedIcon/>}/>
      <motion.div variants={slideVariants} initial='initial' animate='animate'>
        <Datatable userRows={userRowsPending} userColumns={userColumnsPending}/>
      </motion.div>
    </div>
  )
}

export default SingleManageTokenTransactions