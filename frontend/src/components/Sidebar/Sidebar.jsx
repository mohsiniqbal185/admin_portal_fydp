import './sidebar.scss'
import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from "react-router-dom"

function Sidebar() {
    const [isviewTransactionsVisible, setIsviewTransactionVisible] = useState(false);
    const [ismanageTransactionsVisible, setmanageTransactionsVisible] = useState(false);
    const [ishandlePropertiesVisible, sethandlePropertiesVisible] = useState(false);

    const handleviewTransactionsClick = () => {
        setIsviewTransactionVisible(!isviewTransactionsVisible);
    };
    const handlemanageTransactionsClick = () => {
        setmanageTransactionsVisible(!ismanageTransactionsVisible);
    };
    const handlepropertiesClick = () => {
        sethandlePropertiesVisible(!ishandlePropertiesVisible);
    };
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>ASAAN REIT </span>
                </Link>
            </div>
            <hr />
            <div className="centre">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">CLIENTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PeopleAltIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>


                    <li onClick={handleviewTransactionsClick}>

                        <StoreIcon className='icon' />
                        <span>View Transactions </span>
                    </li>
                    {isviewTransactionsVisible && (
                        <ul className='nested-list'>
                            <Link to='/view_token_transactions' style={{ textDecoration: "none" }}>
                                <li>
                                    <StoreIcon className='icon' />
                                    <span>Token Transactions </span>
                                </li>
                            </Link>
                            <Link to='/property_token_transactions' style={{ textDecoration: "none" }}>
                                <li>
                                    <StoreIcon className='icon' />
                                    <span>Rental Transactions </span>
                                </li>
                            </Link>
                        </ul>
                    )}
                    <p className="title">TOKENS SALE</p>

                    <li>
                        <EqualizerIcon className='icon' />
                        <span>View Token Payments </span>
                    </li>
                    <li onClick={handlemanageTransactionsClick}>
                        <CreditCardIcon className='icon' />
                        <span>Manage Transactions</span>
                    </li>
                    {ismanageTransactionsVisible && (
                        <ul className='nested-list'>
                            <li>
                                <StoreIcon className='icon' />
                                <span>Token Transactions </span>
                            </li>
                            <li>
                                <StoreIcon className='icon' />
                                <span>Rental Transactions</span>
                            </li>
                        </ul>
                    )}

                    <li onClick={handlepropertiesClick}>
                        <NotificationsIcon className='icon' />
                        <span>Manage Properties</span>
                    </li>
                    {ishandlePropertiesVisible && (
                        <ul className='nested-list'>
                            <li>
                                <StoreIcon className='icon' />
                                <span>Edit Property Details </span>
                            </li>
                            <li>
                                <StoreIcon className='icon' />
                                <span>Create Property</span>
                            </li>
                        </ul>
                    )}
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Token Market Sale</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <AccountCircleIcon className='icon' />
                        <span>Settings</span>
                    </li>

                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar