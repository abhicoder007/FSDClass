import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Switch from '@mui/material/Switch';
function Header() {
  return (
    <div className='header'>
        {/* <h2>hellow rold</h2> */}
        <IconButton>

        <AccountCircleIcon fontSize='large' className='header__icon'/>
        </IconButton>
        <img src="data:image/png;base64,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" alt="tinderlogo" className='header__logo' />
        <IconButton>

        {/* <Switch  color='default'/> */}
        <ExpandCircleDownIcon fontSize='large' className='header__dropdown'/>
        </IconButton>
        
    </div>
  )
}

export default Header