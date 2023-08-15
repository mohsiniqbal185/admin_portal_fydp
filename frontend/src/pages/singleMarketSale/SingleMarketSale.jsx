import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import InfoFields from '../../components/infoFields/InfoFields'
import Container from '../../components/container/Container'
import './singleMarketSale.scss'
import CircularProgress from '@mui/material/CircularProgress';

const headerOptions = {title:'Token Market Sale'}

function SingleMarketSale() {
  const [data,setData] = useState([])
  const [showProgress, setShowProgress] = useState(false);
  const {req_id} = useParams()

  useEffect(()=>{
    async function fetchRow(e){
      try{
          const res = await axios.get(`/api/admin/manage_token_transactions/manage_sale/${req_id}`)
          if (res.status == 200){
              setData(res.data[0])
          }
      }
      catch(err){
          console.log(err)
      }
    }
    fetchRow()
  },[])

  async function handleForm(e){
    e.preventDefault()
    setShowProgress(true)
    try{
      const res = await axios.post(`/api/admin/manage_token_transactions/manage_sale/verify/${req_id}`,{
        ...data,
        req_id:parseInt(req_id)
      })
      if (res.status == 200){
          console.log('success')
      }
    }
    catch(err){
        console.log(err)
    }finally{
      setShowProgress(false)
    }
  }

  const details = [
    {title:'Seller ID',value:data?.Seller_ID},
    {title:'Seller Name',value:data?.Seller_Name},
    {title:'Pledger ID',value:data?.Pledger_ID},
    {title:'Pledger Name',value:data?.Pledger_Name},
    {title:'Token Value ID',value:data?.token_value_id},
    {title:'Token Market Sale ID',value:data?.idtoken_market_sale},
    {title:'Property ID',value:data?.property_id},
    {title:'Token Name',value:data?.token_name},
    {title:'Date Of Request',value:data?.Date_of_Request},
    {title:'Token Value',value:data?.TokenValue},
    {title:'Number of Tokens',value:data?.no_of_tokens},
    {title:'Transaction Value',value:data?.TransactionValue},
    {title:'Remaining Tokens',value:data?.RemainingTokens},
    {title:'Recipt File Name',value:data?.payment_receipt_file_name},
    {title:'Date Of Payment',value:data?.Date_of_Payment},
    {title:'Payment Method',value:data?.payment_method},
    {title:'Seller Wallet Address',value:data?.Seller_Wallet_Address},
    {title:'Pledger Wallet Address',value:data?.Pledger_Wallet_Address},
    {title:'Property Contract Address',value:data?.Property_Contract_Address},
    {title:'Payment ID',value:data?.payment_id},
    {title:'Payment Done',value:data?.payment_done},
  ]

  function FieldsForInfo() {
    return (
      <>
      <InfoFields details={details}/>
      <form onSubmit={handleForm}>
        <div className="form-btn">
            <button>Verify</button>
        </div>
      </form>
      </>
    )
  }


  return (
    <div>
        {showProgress && <CircularProgress className="circular-progress" />}
        <Header title={headerOptions.title}/>
        <Container tab={{title:'Token Details',caption:'The token details are listed below.',component:<FieldsForInfo/>}}/>
    </div>
  )
}

export default SingleMarketSale