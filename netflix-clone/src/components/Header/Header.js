import React from 'react'
import './header.css'
import NetflixLogo from '../../assets/images/netflix logo.jpg' // Adjust the path as necessary 
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header_outer_container'> 
    <div className='header_container'>
    <div className='left'>
    <ul>
        <li><img src={NetflixLogo} alt='Netflix logo' width="100" /></li>
        <li>Netflix</li>
        <li>Home</li>
        <li>TVShows</li>
        <li>Movies</li>
        <li>Latest</li>
        <li>MyList</li>
        <li>Browse by languages</li>
    </ul>
    </div>
      <div className='right'>
        <ul>
          <li>
            <SearchIcon />
          </li>
          <li><NotificationsIcon /></li>
          <li><AccountBoxIcon /></li>
          <li><ArrowDropDownIcon /></li>
          </ul>
      
     </div>
    </div>

    </div>
  )
}

export default Header
