import { Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer>
      <div className="subFooter1">
        <div className="welcomePart">
          <Typography variant="h4" className="thanks">
            Thanks for visiting us
          </Typography>
          <button className="contactus"><a href="/contact">contact us</a></button>
        </div>
        <div className="followus">
          <Typography variant="h4" className="follow">
            Follow us
          </Typography>
          <div className="followList">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div className="subFooter2">
        <Typography variant="h3" className="footerHead">
          Ecom
        </Typography>
        <Typography variant="p" className="footerCopyRight">
          copywright @2023
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;

