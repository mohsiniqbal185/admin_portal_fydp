import React, { useEffect, useState } from 'react'
import './singleTokenPayments.scss'
import Datatable from '../../components/datatable/Datatable'
import { handleUserRows, userColumns } from "./TableSource";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import Header from '../../components/header/Header';
import { useParams } from 'react-router-dom';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import { handleUserRowsPending,userColumnsPending } from './PendingpaymentSource'
import { slideVariants } from '../../utilities/animations';
import { motion } from 'framer-motion';

function SingleTokenPayments() {
    const [userRows,setUserRows] = useState([])
    const {projectId} = useParams()
    const [userRowsPending,setUserRowsPending] = useState([])


  const { isLoading, error, data } = useQuery({
    queryKey: ['propertyDataPayments'],
    queryFn: () =>
      axios.get(`/api/admin/view_token_payments/${projectId}`).then(
          (res) => res.data
      ),
  })
  // const { ispaymentLoading, paymenterror, paymentdata } = useQuery({
  //   queryKey: ['paymentData'],
  //   queryFn: () =>
  //     axios.get(`/api/admin/view_token_payments/${projectId}`).then(
  //         (res) => res.data
  //     ),
  // })

  // const property = data?.filter((p)=>p.property_id == projectId)

    useEffect(()=>{
      if(data){
        setUserRows(handleUserRows(data.PaymentDataForCompletedTransactions))
        setUserRowsPending(handleUserRowsPending(data.PaymentDataForPledgedTransactions))

      }
    },[data])

  return (
    <div>
      <Header title='Pending Transactions' iconProp={<ApartmentOutlinedIcon />} caption={'Token Payments'} />
      <motion.div variants={slideVariants} initial='initial' animate='animate'>
        <Datatable userRows={userRowsPending} userColumns={userColumnsPending} />
      </motion.div>
      <Header title='Completed Transactions' iconProp={<ApartmentOutlinedIcon />} caption={'Token Payments'} />
      <motion.div variants={slideVariants} initial='initial' animate='animate'>
        <Datatable userRows={userRows} userColumns={userColumns} />
      </motion.div>
    </div>
  )
}

export default SingleTokenPayments