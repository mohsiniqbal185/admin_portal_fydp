import React, { useEffect, useState } from 'react'
import './profileTokenTransactions.scss'
import { handleUserRows, userColumns } from "./TableSource";
import Datatable from '../../datatable/Datatable';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ProfileTokenTransactions() {
  const [userRows,setUserRows] = useState([])
  const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("user_id");

  const { isLoading, error, data } = useQuery({
    queryKey: ['profileData'],
    queryFn: () =>
      axios.get("/api/admin/users/profile", {
        params: { user_id: userId },
    })
  })
  console.log(data?.data)

  useEffect(()=>{
    if(data){
      setUserRows(handleUserRows(data.data))
    }
  },[data])

  return (
    <>
    {userRows ?
      <div>
        {/* <Datatable userRows={userRows} userColumns={userColumns}/>
        <Datatable userRows={userRows} userColumns={userColumns}/> */}
      </div>
    :
    null}
    </>
  )
}

export default ProfileTokenTransactions