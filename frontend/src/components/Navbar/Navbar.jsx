import React, { useState } from 'react'
import './navbar.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import logo from "../../assets/logo.png"
// import useAuthStore from '../../context/AuthContext';
// import axios from 'axios';

// important for letting axios have access to session data
// axios.defaults.withCredentials = true;

const emailDropStyles = {paddingBlock:'20px',cursor:'default',background:'#f5f5f5',marginBottom:'5px'}

function Navbar({setLoggedIn}) {

    // will set user to null in the store
    // const logout = useAuthStore((state) => state.logout);
    // const loggedUser = useAuthStore((state) => state.user);
    // console.log(loggedUser);

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    const handleLogout = async ()=>{
    //   handleCloseUserMenu()
    //   deleteSession()
    //   logout()
    //   setLoggedIn(false)
    }

    // const deleteSession = async () => {
    //   try{
    //     const res = await axios.get("/delete-session")
    //     return res
    //   }catch(err){
    //     console.log(err)
    //   }
    // }

    // const settings = [{title:loggedUser?.email,icon:<PersonOutlineOutlinedIcon/>},{title:'Logout',click:handleLogout,icon:<LogoutOutlinedIcon/>}];

    const settings = [{title:'Logout',click:handleLogout,icon:<LogoutOutlinedIcon/>}]
    
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="top">
                <Link to="/" className='navbar-logo'>
                    <img src={logo} alt="Logo Image"/>
                    <span className='logo'>Asaan Portal<sup className='admin-tag'>Admin</sup></span>
                </Link>
            </div>
            <div className="items">
                <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} className='item account-logo'>
                <AccountCircleOutlinedIcon style={{fontSize:'1.8rem',color:'#2c45a8'}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} style={!setting?.click ? emailDropStyles:{}} onClick={setting?.click ? handleLogout:null}>
                  <Typography display="flex" alignItems="center" textAlign="center" fontWeight={setting?.click ? '600':'500'}>{setting.icon}&nbsp;{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            </div>
        </div>
    </div>
  )
}

export default Navbar