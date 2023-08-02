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

function SingleViewTokenTransactions() {
  const [userRowsCompleted,setUserRowsCompleted] = useState([])
  const [userRowsPending,setUserRowsPending] = useState([])
  const {projectId} = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['propertyData'],
    queryFn: () =>
      axios.get('/api/admin/view_token_transactions').then(
          (res) => res.data
      ),
  })

  const property = data?.filter((p)=>p.property_id == projectId)

    useEffect(()=>{
      if(data){
        setUserRowsCompleted(handleUserRowsCompleted(data))
        setUserRowsPending(handleUserRowsPending(data))
      }
    },[data])


  return (
    <div>
      <Header title={property ? property[0]?.name :''} iconProp={<ApartmentOutlinedIcon/>} caption={'View Token Transactions'}/>
      <Datatable userRows={userRowsCompleted} userColumns={userColumnsCompleted}/>
      <Datatable userRows={userRowsPending} userColumns={userColumnsPending}/>
    </div>
  )
}

export default SingleViewTokenTransactions