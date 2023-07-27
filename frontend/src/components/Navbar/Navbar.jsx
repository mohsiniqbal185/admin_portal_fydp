import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
            
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className='icon'/>                   
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon className='icon'/>                    
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className='icon'/>
                    <div className="counter">1</div>                   
                </div>
                <div className="item">
                    <ListOutlinedIcon className='icon'/>                 
                </div>
                <div className="item">
                    <img className='avatar' src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />              
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar