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
import PersonalDetails from "../../components/profile/personalDetails/PersonalDetails"
import BankDetails from "../../components/profile/bankDetails/BankDetails"
import WalletDetails from "../../components/profile/walletDetails/WalletDetails"
import ProfileTokenTransactions from "../../components/profile/profileTokenTransactions/ProfileTokenTransactions";
import ProfileRentalTransactions from "../../components/profile/profileRentalTransactions/ProfileRentalTransactions";

const tabHeadings = [{title:'Personal Details',caption:'Please keep your personal information up-to-date at all times. We do not share your information with any third party.',component:<PersonalDetails/>},
{title:'Bank Details',caption:'Your personal information is completely secure and we don’t share it with anyone.',component:<BankDetails/>},
{title:'Wallet Details',caption:'You can share your wallet address with others using the code below.',component:<WalletDetails/>},
{title:'Token Transactions',caption:'Token Transactions.',component:<ProfileTokenTransactions/>},
{title:'Rental Transactions',caption:'Rental Transactions.',component:<ProfileRentalTransactions/>}]

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

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("user_id");
    const [userdata, setUsersData] = useState(null);
    const [transactionsdata, setData] = useState(null);
    const [Pendingtransactionsdata, setPendingData] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("/api/admin/users/profile", {
                params: { user_id: userId },
            });
            console.log(res.data)

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