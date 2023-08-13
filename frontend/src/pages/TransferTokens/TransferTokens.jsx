// import React from 'react'
// import { useLocation } from 'react-router-dom';
// import { useEffect , useState} from 'react';
// import axios from 'axios';
// import CircularProgress from '@mui/material/CircularProgress';
// import './TransferTokens.scss'
// function TransferTokens() {
//     const [data, setData] = useState(null);
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const no_of_tokens = queryParams.get("no_of_tokens");
//     const user_wallet_address = queryParams.get("user_wallet_address");
//     const property_contract_address = queryParams.get("property_contract_address");
//     const property_id = queryParams.get("property_id");
//     const pledger_id = queryParams.get("pledger_id");
//     const payment_id = queryParams.get("payment_id");
//     const tokens_sold = queryParams.get("tokens_sold");
//     const req_id = queryParams.get("req_id");

//     useEffect(() => {
//       // Check if all required dependencies are available
//       const [showProgress, setShowProgress] = useState(false);
//       const [progressMessage, setProgressMessage] = useState('');
//       if (no_of_tokens !== null && user_wallet_address !== null && property_contract_address !== null) {
//         const fetchUsers = async () => {
//           try {
//             const res = await axios.get("/api/admin/manage_token_transactions/transfer_tokens", {
//               params: {
//                 no_of_tokens: no_of_tokens,
//                 user_wallet_address: user_wallet_address,
//                 property_contract_address: property_contract_address,
//                 property_id: property_id,
//                 pledger_id: pledger_id,
//                 payment_id: payment_id,
//                 req_id: req_id,
//                 tokens_sold: tokens_sold
//               },
//             });
//             setData(res.data);
//             console.log(res)
//           } catch (error) {
//             console.log(error);
//           }
//         };
//         fetchUsers();
//       }
//     }, []);
//   return (
//     <div>
// {!data && <div><div className='centered-text-container'>Processing Transfer</div><div className='centered-progress-container'><CircularProgress/></div></div>}    
//     </div>
  
//   )
// }


// export default TransferTokens
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import './TransferTokens.scss';

function TransferTokens() {
  const location = useLocation();
  let navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const no_of_tokens = queryParams.get('no_of_tokens');
  const user_wallet_address = queryParams.get('user_wallet_address');
  const property_contract_address = queryParams.get('property_contract_address');
  const property_id = queryParams.get('property_id');
  const pledger_id = queryParams.get('pledger_id');
  const payment_id = queryParams.get('payment_id');
  const tokens_sold = queryParams.get('tokens_sold');
  const req_id = queryParams.get('req_id');
  const token_value_id = queryParams.get('token_value_id');

  const [showProgress, setShowProgress] = useState(true);
  const [progressMessage, setProgressMessage] = useState('Processing Transfer');
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);
  const [RedirectMessage, setRedirectMessage] = useState("");


  useEffect(() => {
    if (no_of_tokens !== null && user_wallet_address !== null && property_contract_address !== null) {
      const fetchUsers = async () => {
        try {
          const res = await axios.get('/api/admin/manage_token_transactions/transfer_tokens', {
            params: {
              no_of_tokens: no_of_tokens,
              user_wallet_address: user_wallet_address,
              property_contract_address: property_contract_address,
              property_id: property_id,
              pledger_id: pledger_id,
              payment_id: payment_id,
              req_id: req_id,
              tokens_sold: tokens_sold,
              token_value_id:token_value_id
            },
          });
          // setData(res.data);
          setProgressMessage('Transfer Successful');
          setRedirectMessage('Transfer Successful! Redirecting ....'); // Update message on success
          // Update message on success
        } catch (error) {
          console.log(error);
          setProgressMessage('Transfer Failed');
          setRedirectMessage('Transfer Failed! Redirecting ....'); // Update message on success
          // Update message on error
        } finally {
          setShowProgress(false);
          setShowRedirectMessage(true);

        }
      };
      fetchUsers();
    }
  }, []);
  useEffect(() => {
    if (showRedirectMessage) {
      setTimeout(() => {
        navigate('/'); // Redirect to dashboard after a delay
      }, 2000); // Delay in milliseconds
    }
  }, [showRedirectMessage, history]);

  return (
    <div className="transfer-tokens-container">
    <div className="progress-container">
      {showProgress && <CircularProgress className="circular-progress" />}
      <div className="progress-message">{progressMessage}</div>
    </div>

    {showRedirectMessage && <div className="redirecting-message">Redirecting to Dashboard...</div>}
  </div>
);
}

export default TransferTokens;
