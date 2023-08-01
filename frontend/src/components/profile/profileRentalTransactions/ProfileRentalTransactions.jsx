import React, { useEffect, useState } from 'react'
import './profileRentalTransactions.scss'
import { handleUserRows, userColumns } from "./TableSource";
import Datatable from '../../datatable/Datatable';
import { useQuery } from '@tanstack/react-query';

function ProfileRentalTransactions() {
  const [userRows,setUserRows] = useState([])

  const { isLoading, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      axios.get('/api/admin/users').then(
          (res) => res.data
      ),
  })

  useEffect(()=>{
    if(data){
      setUserRows(handleUserRows(data))
    }
  },[])

  return (
    <div>
      <Datatable userRows={userRows} userColumns={userColumns}/>
    </div>
  )
}

export default ProfileRentalTransactions