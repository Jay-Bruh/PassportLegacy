import React from "react";
import Link from "next/link";

export default function Footer({ children }) {
  return (
    <div>
      <div className="bottomnav">
      <div style={{padding:"20px"}} className="footerPadding">
        <img src="logo.png" className="logo"/>
        </div>
        <div style={{padding:"20px"}} className="footerPadding">
        <div className="footerLines"></div>
        </div>
        <div style={{padding:"20px"}} className="footerPadding">
        <div style={{flexDirection:"row", color:"#fff", fontSize:"12px", cursor:"pointer"}}>
          <div>HOME</div>
          <div>ABOUT US</div>
          <div>PROGRAMS</div>
          <div>BENEFITS</div>
          <div>FAQ</div>
          <div>BLOG</div>
          <div>WORLDWIDE NETWORKS</div>
          <div>CONTACT US</div>
        </div>
        </div>
        <div style={{padding:"20px"}} className="footerPadding">
        <div className="footerLines"></div>
        </div>
        <div style={{padding:"20px"}} className="footerPadding">
        <div style={{flexDirection:"row", maxWidth:"250px", textAlign:"justify"}}>
          <div style={{color:"#E3AB50", fontSize:"12px"}}>About Us</div>
          <div style={{color:"#fff", fontSize:"12px", paddingTop:"10px"}}>Passport Legacy is a boutique firm with over 12 years of combined experience in the citizenship-by-investment industry. We provide a range of professional services to our private clients including the acquisition of alternative residence or citizenship as well as real estate.</div>
        </div>
        </div>
        <div style={{padding:"20px"}} className="footerPadding">
        <div className="footerLines"></div>
        </div>
        <div style={{padding:"20px"}} className="footerPadding">
        <div style={{flexDirection:"row", maxWidth:"250px", textAlign:"justify"}}>
          <div style={{color:"#E3AB50", fontSize:"12px"}}>Follow Us</div>
          <div style={{flexDirection:"row",display:"flex",paddingTop:"20px"}}>
          <div>
      <img style={{width:"20px"}} src="facebook.png"/>
      </div>
      <div style={{paddingLeft:"10px"}}>
      <img style={{width:"20px"}} src="facebook.png"/>
      </div>
      <div style={{paddingLeft:"10px"}}>
      <img style={{width:"20px"}} src="facebook.png"/>
      </div>
      <div style={{paddingLeft:"10px"}}>
      <img style={{width:"20px"}} src="facebook.png"/>
      </div>
      <div style={{paddingLeft:"10px"}}>
      <img style={{width:"20px"}} src="facebook.png"/>
      </div>
      </div>
          </div>
          </div>
      </div>
    </div>
  );
}
