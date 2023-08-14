import React from 'react'
import Header from '../../components/header/Header'
import Container from '../../components/container/Container'
import InfoFields from '../../components/infoFields/InfoFields'
import './manageTokenTransactionsDetail.scss'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import axios from 'axios'

function FieldsForInfo(){
  const PF = import.meta.env.VITE_APP_PUBLIC_FOLDER;
  const [userRowsPending,setUserRowsPending] = useState([])
  const [verifyPayment,setVerifyPayment] = useState([])
  const {manageId}= useParams();

  const { isLoading, error, data } = useQuery({
  
    queryKey: ['propertyDataManageSingle'],
    queryFn: () =>
    
      axios.get(`/api/admin/manage_token_transactions/manage/${manageId}`).then(
          (res) => res.data[0]
      ),
  })
  const VerifyPayment = async () => {
      const response = await axios.get(`/api/admin/manage_token_transactions/manage/verify/${manageId}`);
      setVerifyPayment(response.data[0]);
  
  };
  const handleTransferTokens   =  (no_of_tokens,user_wallet_address,property_contract_address,property_id,pledger_id,payment_id,req_id,tokens_sold,token_value_id) =>{
    const confirmed = window.confirm('Are you sure you want to transfer tokens?');
    if (confirmed) {
      window.location.href=`/transfer_tokens?no_of_tokens=`+no_of_tokens+`&user_wallet_address=`+user_wallet_address+`&property_contract_address=`+property_contract_address+`&property_id=`+property_id+`&pledger_id=`+pledger_id+`&payment_id=`+payment_id+`&req_id=`+req_id+`&tokens_sold=`+tokens_sold+`&token_value_id=`+token_value_id;
    }
  }
  const handleVerifyPayment = () => {
    VerifyPayment();
    // Refresh the page after API request is completed
    window.location.reload();
  };
  // const property = data?.filter((p)=>p.property_id == projectId)
  
    useEffect(()=>{
      if(data){
        setUserRowsPending(data)
      }
    },[data])
    const details = [{title:'Pledger ID', value: data?.Pledger_ID},{title:'Pledger Name', value: data?.Pledger_Name},{title:'Request ID', value: data?.req_id},{title:'Property Name', value: data?.Property_Name},{title:'Property ID',value: data?.property_id},{title:'Token Name', value: data?.token_name},{title:'Date of Request',value: data?.Date_of_Request},{title:'Status',value: data?.Status},{title:'Token Value',value: data?.TokenValue},{title:'No of tokens',value: data?.no_of_tokens},{title:'Transaction Value',value: data?.TransactionValue},{title:'Remaining Tokens',value: data?.RemainingTokens},{title:'Tokens Sold',value: data?.TokensSold},{title:'Payment Amount',value: data?.Payment_Amount},{title:'Payment Status',value: data?.payment_status},{title:'payment ID',value: data?.payment_id},{title:'Payment Method',value: data?.payment_method},{title:'Date of Payment',value: data?.Date_of_Payment},{title:'Client  Wallet Address',value: data?.Client_Wallet_Address},{title:'Property Contract Address',value: data?.Property_Contract_Address}]

  return (
    <>
      <InfoFields details={details}/>
      {data?.payment_status === 'BEING PROCESSED' && (
      <div className='paymentReceipt'>
      <img src={PF+userRowsPending.payment_receipt_file_name} className='paymentReceiptPicture'/>
     </div>
      

           )}
      <div className='btn'>
      
      {data?.payment_status === 'BEING PROCESSED' && (
         
          <button onClick={handleVerifyPayment}>Verify</button>
        )}
      {/* {!userRowsPending && <button onClick={handleVerifyPayment}>Verify</button>}
        <button onClick={handleVerifyPayment}>Verify</button> */}
      </div>

      <div className='btn'>
      {data?.payment_status === 'VERIFIED' && (
        <button onClick={() => handleTransferTokens(data?.no_of_tokens,data?.Client_Wallet_Address,data?.Property_Contract_Address,data?.property_id,data?.Pledger_ID,data?.payment_id,data?.req_id,data?.TokensSold,data?.token_value_id)}>Transfer Tokens</button>
        )}
        </div>
    
    </>
  )
}

const componentData = {title:'Transaction Details',caption:'The transaction details information is listed below.',component:<FieldsForInfo/>}

function ManageTokenTransactionsDetail() {

  return (
    <div>
      <Header title="Manage Token Transactions Detail"/>
      <Container tab={{title:'Transaction Details',caption:'The transaction details information is listed below.',component:<FieldsForInfo/>}}/>
    </div>
  )
}

export default ManageTokenTransactionsDetail