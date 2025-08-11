import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css'
const Footer = () => {
  return (
    <div className='footer_outer_container'>
       <div className='footer_inner_container'>
         <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <InstagramIcon /> 
          <YouTubeIcon />
        </div>
        <div className='footer_text'>
          <div>
          <ul>
            <li>Audio description</li>
            <li>Investigator Relations</li>
            <li>Legal notices</li>
          </ul>
          </div>

          <div>
          <ul>
            <li>Help center</li>
            <li>Jobs</li>
            <li>Cookie Preference</li>
          </ul>
          </div>
          <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Coorporate Information</li>
          </ul>
          </div>

        <div>
          <ul>
            <li>Media center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
          </div>
          </div>
          <div className='service_code'>
            <p>
              service code
            </p>
            </div>
          <div className='copy_write'>
            &copy; 1997-2025 Netflix, Inc.
            </div>
        </div>
        </div>
  )
}

export default Footer
