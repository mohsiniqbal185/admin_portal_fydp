import React from 'react'
import Header from '../../components/header/Header'
import InfoFields from '../../components/infoFields/InfoFields'
import Container from '../../components/container/Container'
import './tokenPaymentsDetail.scss'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
function FieldsForInfo(){
  
 
     const [userRowsPending,setUserRowsPending] = useState([])
     const {projecttId}= useParams();
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);

  const {paymentId}= useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/admin/view_token_payments/${projecttId}/${paymentId}`); // Replace with your API endpoint
        setUserRowsPending(response.data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); 

    return () => {
    };
  }, []);

    const details = [{title:'Payment ID', value:userRowsPending.payment_id},{title:'Payment Method', value:userRowsPending.payment_method},{title:'Payment From', value:userRowsPending.UserName},{title:'DateTime', value:userRowsPending.DATE_TIME},{title:'Payment Status', value:userRowsPending.payment_status},{title:'PaymentAmount', value:userRowsPending.Payment_Amount}]
    return (
      <>
      <InfoFields details={details}/>
      <div className='receipt-link'>
        View Payment Receipt
      </div>
    </>
  )
}

const componentData = {title:'Token Payments',caption:'The token payments information is listed below.',component:<FieldsForInfo/>}


function TokenPaymentsDetail() {
  return (
    <div>
      <Header title="Token Payments Detail"/>
      <Container tab={componentData}/>
    </div>
  )
}

export default TokenPaymentsDetail