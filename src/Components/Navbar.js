import React, { useState } from 'react'
import Logo from '../assets/trademark.png'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText 
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import {Link} from 'react-router-dom'
import CurrentTime from './CurrentTime';


const Navbar = () => {

  const [openMenu,setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text:"Home",
      icon:<HomeIcon/>,
      path: '/',
    },
    {
      text:"About us",
      icon:<InfoIcon/>,
      path: '/about',
    },
    {
      text:"Contact",
      icon:<PhoneRoundedIcon/>,
      path: '/contact',
    }
  ];

  return (
    <nav>
      <div className='nav-logo-container'>
        <img src={Logo} />
      </div>
      <div className='navbar-links-container'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact</Link>
        <button className='primary-button'>Toggle theme</button>
      </div>
      <CurrentTime />
      <div>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item,i) => (
              <Link to={item.path} key={i} >
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem></Link>
            )) }
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar