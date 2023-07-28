import React from "react"
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Datatable from "../../components/datatable/Datatable"
import { Box, Tab, Tabs, Typography } from "@mui/material"
import Header from "../../components/header/Header"
import './profile.scss'
import PropTypes from 'prop-types';
import Container from "../../components/container/Container"
import PersonalDetails from "../../components/settings/personalDetails/PersonalDetails"
import BankDetails from "../../components/settings/bankDetails/BankDetails"
import WalletDetails from "../../components/settings/walletDetails/WalletDetails"

const tabHeadings = [{title:'Personal Details',caption:'Please keep your personal information up-to-date at all times. We do not share your information with any third party.',component:<PersonalDetails/>},
{title:'Bank Details',caption:'Your personal information is completely secure and we don’t share it with anyone.',component:<BankDetails/>},
{title:'Wallet Details',caption:'You can share your wallet address with others using the code below.',component:<WalletDetails/>},
{title:'Token Transactions',caption:'Token Transactions.',component:<WalletDetails/>},
{title:'Rental Transactions',caption:'Rental Transactions.',component:<WalletDetails/>}]

const headerOptions = {title:'User Profile',caption:'Account Overview'}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function Profile() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
    };
    const thStyle = {
        width :"15px",
        padding: "12px 15px",
        textAlign: "left",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#f2f2f2",
    };

    const tdStyle = {
        padding: "12px 15px",
        textAlign: "left",
        borderBottom: "1px solid #ddd",
    };

    const trHoverStyle = {
        backgroundColor: "#f5f5f5",
    };
    const buttonstyle = {
        backgroundColor: "grey",

    };
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("user_id");
    // <div className='users'>
    //   <Sidebar/>


    //   <div className="listContainer">

    //   <Navbar/>
    //   <Datatable/>
    //   </div>
    // </div>
    const [userdata, setUsersData] = useState(null);
    const [transactionsdata, setData] = useState(null);
    const [Pendingtransactionsdata, setPendingData] = useState(null);



    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("/api/admin/users/profile", {
                params: { user_id: userId },
            });

            try {
                setUsersData(res.data.user)
                setData(res.data.transactionsData)
                setPendingData(res.data.PendingTransactionsData)
                // console.log(res)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchUsers();

    }, [])


    return (
        <div>
            {/* <p>User Details</p>

            {userdata && userdata.length>0 ? (
                <div>
                <table style={tableStyle}>
                    <thead>
                        <tr style={trHoverStyle}>
                            <th style={thStyle}>ID</th>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}> Email</th>
                            <th style={thStyle}>Contact</th>
                            <th style={thStyle}>CNIC</th>
                            <th style={thStyle}>Wallet Address</th>



                        </tr>
                    </thead>
                    <tbody>
                        
                        {userdata.map((item) => (
                            <tr key={item.user_id} style={trHoverStyle}>
                                <td style={tdStyle}>{item.user_id}</td>
                                <td style={tdStyle}>{item.fname} {item.lname}</td>
                                <td style={tdStyle}>{item.email}</td>
                                <td style={tdStyle}>{item.contact}</td>
                                <td style={tdStyle}>{item.CNIC}</td>
                                <td style={tdStyle}>{item.wallet_address}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>

                ) : (
                <p>No user data found</p>

            )}
            <p>Completed Transactions</p>
            {transactionsdata && transactionsdata.length ? (

                <div>
                <table style={tableStyle}>
                    <thead>
                        <tr style={trHoverStyle}>
                            <th style={thStyle}>Token Transaction ID</th>
                            <th style={thStyle}>Property Name</th>
                            <th style={thStyle}>Property ID</th>
                            <th style={thStyle}> SenderID</th>
                            <th style={thStyle}>Number Of Tokens</th>
                            <th style={thStyle}>transaction hash</th>



                        </tr>
                    </thead>
                
                    <tbody>
                        {transactionsdata.map((item) => (
                            <tr key={item.token_transaction_id} style={trHoverStyle}>
                                <td style={tdStyle}>{item.token_transaction_id}</td>
                                <td style={tdStyle}>{item.name}</td>
                                <td style={tdStyle}>{item.property_id}</td>
                                <td style={tdStyle}>{item.sender_id}</td>
                                <td style={tdStyle}>{item.no_of_tokens}</td>
                                <td style={tdStyle}>{item.transaction_hash}</td>
                                <td><button id = {item.user_id}style={buttonstyle}>View Payment Details</button></td>
                            <td><button id = {item.user_id}style={buttonstyle}>View On Etherscan</button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                
            ) : (
                <p>No Token transactions available</p>
            )}
            <p>Pending Transactions</p>
            {Pendingtransactionsdata && Pendingtransactionsdata.length>0 ? (

                <div>
                <table style={tableStyle}>
                    <thead>
                        <tr style={trHoverStyle}>
                            <th style={thStyle}>Request ID</th>
                            <th style={thStyle}>Property Name</th>
                            <th style={thStyle}>Property ID</th>
                            <th style={thStyle}> Payment Status</th>
                            <th style={thStyle}>Token Name</th>
                            <th style={thStyle}>Date Of Request</th>
                            <th style={thStyle}>Status</th>
                            <th style={thStyle}>Number Of tokens</th>
                            <th style={thStyle}>Remaining Tokens</th>
                            <th style={thStyle}>Action</th>





                        </tr>
                    </thead>
           
                    <tbody>
                        {Pendingtransactionsdata.map((item) => (
                            <tr key={item.req_id} style={trHoverStyle}>
                                <td style={tdStyle}>{item.req_id}</td>
                                <td style={tdStyle}>{item.Property_Name}</td>
                                <td style={tdStyle}>{item.property_id}</td>
                                <td style={tdStyle}>{item.payment_status}</td>
                                <td style={tdStyle}>{item.token_name}</td>
                                <td style={tdStyle}>{item.date_of_request}</td>
                                <td style={tdStyle}>{item.date_of_request}</td>
                                <td style={tdStyle}>{item.no_of_tokens}</td>
                                <td style={tdStyle}>{item.RemainingTokens}</td>

                                <td><button id = {item.user_id}style={buttonstyle}>Manage</button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                
            ) : (
                <p>No Pending transactions available</p>
            )} */}
        <div className="settingsContainer">
            <Header title={headerOptions.title} caption={headerOptions.caption}/>
            <div className="tab-container">
                <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {tabHeadings?.map((tab,i)=>(
                        <Tab key={i} label={tab.title} {...a11yProps(i)} />
                    ))}
                    </Tabs>
                </Box>
                {tabHeadings?.map((tab,i)=>(
                    <CustomTabPanel value={value} index={i} sx={{padding:0}}>
                    <Container tab={tab}/>
                    </CustomTabPanel>
                ))}
            </Box>
        </div>
    </div>
        </div>
    );
}

export default Profile;