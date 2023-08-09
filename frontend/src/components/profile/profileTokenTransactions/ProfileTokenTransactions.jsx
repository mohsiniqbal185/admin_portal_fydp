import React, { Suspense, useEffect, useState } from 'react'
import './profileTokenTransactions.scss'
import { handleUserRowsCompleted, userColumnsCompleted } from "./CompletedTableSource";
import { handleUserRowsPending,userColumnsPending } from './PendingTableSource';
import Datatable from '../../datatable/Datatable';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ProfileTokenTransactions() {
  const [userRowsCompleted,setUserRowsCompleted] = useState([])
  const [userRowsPending,setUserRowsPending] = useState([])
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("user_id");

  const { isLoading, error, data } = useQuery({
    queryKey: ['profileData'],
    queryFn: () =>
      axios.get("/api/admin/users/profile", {
        params: { user_id: userId },
    }).then(
      (res) => res.data
  ),
  })

  useEffect(()=>{
    if(data){
      setUserRowsCompleted(handleUserRowsCompleted(data.transactionsData))
      setUserRowsPending(handleUserRowsPending(data.PendingTransactionsData))
    }
  },[data])

  return (
    <div className=''>
        <Datatable title="Completed Transactions" userRows={userRowsCompleted} userColumns={userColumnsCompleted}/>
        <Datatable title="Pending Transactions" userRows={userRowsPending} userColumns={userColumnsPending}/>
    </div>
  )
}

export default ProfileTokenTransactions