import React, { useEffect } from "react";

export default function Parallax() {

  useEffect(function onFirstMount() {
    const changeBackground = () => {
      console.log(window.scrollY);
    }

    window.addEventListener('scroll', changeBackground);

    return null;
  }, []);

  return (
    <>
    <div style={{backgroundColor:"#0E2043",padding:"50px",height:"1000px"}}>
      <div style={{color:"#fff",textAlign:"center",fontSize:"100px",fontFamily:"Roboto", position:"absolute", display:"flex"}}>Vanuatu</div>
    </div>
    </>
  )
}