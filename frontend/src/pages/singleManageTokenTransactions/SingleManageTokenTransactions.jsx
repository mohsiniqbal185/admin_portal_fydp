import React, { useEffect, useState } from 'react'
import './singleManageTokenTransactions.scss'
import Header from '../../components/header/Header'
import Datatable from '../../components/datatable/Datatable'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import { handleUserRowsPending, userColumnsPending } from './TableSource'

function SingleManageTokenTransactions() {
  const [userRowsPending,setUserRowsPending] = useState([])
  const {projectId} = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['propertyData'],
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

  return (
    <div>
      <Header title='Manage Token Transactions' iconProp={<ApartmentOutlinedIcon/>}/>
      <Datatable userRows={userRowsPending} userColumns={userColumnsPending}/>
    </div>
  )
}

export default SingleManageTokenTransactions