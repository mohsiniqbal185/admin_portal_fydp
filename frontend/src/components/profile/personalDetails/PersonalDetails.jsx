import React, { useEffect } from 'react'
import './personalDetails.scss'
import InfoFields from '../../infoFields/InfoFields'
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function PersonalDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("user_id");

  const { isLoading, error, data } = useQuery({
    queryKey: ['profileDataUser'],
    queryFn: () =>
      axios.get("/api/admin/users/profile", {
        params: { user_id: userId },
    }).then(
      (res) => res.data.user[0]
    ),
  })

  const details = [
    {title:'First Name',value:data?.fname},
    {title:'Last Name',value:data?.lname},
    {title:'Email',value:data?.email},
    {title:'Contact Number',value:data?.contact},
    {title:'CNIC',value:data?.CNIC}
  ]

  return (
    <div>
        <InfoFields details={details}/>
    </div>
  )
}

export default PersonalDetails