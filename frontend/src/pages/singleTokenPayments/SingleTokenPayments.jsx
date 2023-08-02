import React, { useEffect, useState } from 'react'
import './singleTokenPayments.scss'
import Datatable from '../../components/datatable/Datatable'
import { handleUserRows, userColumns } from "./TableSource";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import Header from '../../components/header/Header';
import { useParams } from 'react-router-dom';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';

function SingleTokenPayments() {
    const [userRows,setUserRows] = useState([])
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
        setUserRows(handleUserRows(data))
      }
    },[data])

  return (
    <div>
        <Header title={property ? property[0]?.name :''} iconProp={<ApartmentOutlinedIcon/>} caption={'Token Payments'}/>
        <Datatable userRows={userRows} userColumns={userColumns}/>
        {/* <Datatable userRows={userRows} userColumns={userColumns}/> */}
    </div>
  )
}

export default SingleTokenPayments