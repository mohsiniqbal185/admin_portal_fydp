import { Box, Tab, Tabs, Typography } from "@mui/material"
import Header from "../../components/header/Header"
import './settings.scss'
import PropTypes from 'prop-types';
import { useState } from "react"
import Container from "../../components/container/Container"
import PersonalDetails from "../../components/settings/personalDetails/PersonalDetails"
import BankDetails from "../../components/settings/bankDetails/BankDetails"
import WalletDetails from "../../components/settings/walletDetails/WalletDetails"

const tabHeadings = [{title:'Personal Details',caption:'Please keep your personal information up-to-date at all times. We do not share your information with any third party.',component:<PersonalDetails/>},
{title:'Bank Details',caption:'Your personal information is completely secure and we don’t share it with anyone.',component:<BankDetails/>},
{title:'Wallet Details',caption:'You can share your wallet address with others using the code below.',component:<WalletDetails/>}]

const headerOptions = {title:'Settings',caption:'Manage your account'}

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


function Settings() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
  )
}

export default Settings