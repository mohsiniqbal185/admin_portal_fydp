import React from 'react'
import Header from '../../components/header/Header'
import Container from '../../components/container/Container'
import InfoFields from '../../components/infoFields/InfoFields'
import './manageTokenTransactionsDetail.scss'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import axios from 'axios'

function FieldsForInfo(details){
  return (
    <>
      <InfoFields details={details}/>
      <div className='receipt-link'>
            View Payment Receipt
      </div>
      <div className='btn'>
        <button>Verify</button>
      </div>
      <div className='btn'>
        <button>Transfer Tokens</button>
      </div>
    </>
  )
}

const componentData = {title:'Transaction Details',caption:'The transaction details information is listed below.',component:<FieldsForInfo/>}

function ManageTokenTransactionsDetail() {
  const [userRowsPending,setUserRowsPending] = useState([])
  const manageId= useParams();
  const { isLoading, error, data } = useQuery({
  
    queryKey: ['propertyData'],
    queryFn: () =>
    
      axios.get(`/api/admin/manage_token_transactions/manage/${manageId}`).then(
          (res) => res.data
      ),
  })
  
  // const property = data?.filter((p)=>p.property_id == projectId)
  
    useEffect(()=>{
      if(data){
        setUserRowsPending(data)
      }
    },[data])
    const details = [{title:'Pledger ID', value: data?.Pledger_ID},{title:'Pledger Name', value: data?.Pledger_ID},{title:'Request ID', value: data?.Pledger_ID},{title:'Property Name', value: data?.Pledger_ID},{title:'Property ID',value: data?.Pledger_ID},{title:'Token Name', value: data?.Pledger_ID},{title:'Date of Request',value: data?.Pledger_ID},{title:'Status',value: data?.Pledger_ID},{title:'Token Value',value: data?.Pledger_ID},{title:'No of tokens',value: data?.Pledger_ID},{title:'Transaction Value',value: data?.Pledger_ID},{title:'Remaining Tokens',value: data?.Pledger_ID},{title:'Payment Amount',value: data?.Pledger_ID},{title:'Payment Status',value: data?.Pledger_ID},{title:'payment ID',value: data?.Pledger_ID},{title:'Payment Method',value: data?.Pledger_ID},{title:'Date of Payment',value: data?.Pledger_ID},{title:'Date of Payment',value: data?.Pledger_ID}]

  return (
    <div>
      <Header title="Manage Token Transactions Detail"/>
      <Container tab={{title:'Transaction Details',caption:'The transaction details information is listed below.',component:<FieldsForInfo details={details}/>}}/>
    </div>
  )
}

export default ManageTokenTransactionsDetail