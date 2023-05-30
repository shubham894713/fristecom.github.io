import React from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  return (
    <div className='contact'>
        <div>
            <h1>You can reach out to us at :-</h1>
            <a href='https://www.w3schools.com/css/css_link.asp'>
            <AlternateEmailIcon />
            <h3>****@gmail.com</h3>
            </a>
            <a href="whatsapp.com">
              <WhatsAppIcon />
              <h3>98*****34</h3>
            </a>
            <button><a href='/'>Home</a></button>
        </div>
    </div>
  )
}

export default Contact
