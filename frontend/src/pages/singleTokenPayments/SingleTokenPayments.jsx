import React, { useEffect, useState } from 'react'
import './singleTokenPayments.scss'
import Datatable from '../../components/datatable/Datatable'
import { handleUserRows, userColumns } from "./TableSource";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

function SingleTokenPayments() {
    const [userRows,setUserRows] = useState([])

    const { isLoading, error, data } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
          axios.get('/api/admin/users').then(
              (res) => res.data
          ),
      })

      console.log(data)
  
      useEffect(()=>{
        if(data){
          setUserRows(handleUserRows(data))
        }
      },[data])

  return (
    <div>
        <Datatable userRows={userRows} userColumns={userColumns}/>
        {/* <Datatable userRows={userRows} userColumns={userColumns}/> */}
    </div>
  )
}

export default SingleTokenPayments