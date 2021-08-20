import Head from "next/head";
import React from "react";
import Image from "next/image";

export default function Citizenship({ items }) {
  return (
    <>
    
    <img src="mapBg.png" style={{position:"absolute",paddingTop:"100px"}}/>
    
    <div style={{textAlign:"center", marginTop:"20px", fontSize:"25px", color:"#0E2043", fontWeight: "500"}}>CITIZENSHIP</div>
    <div style={{display:"flex",justifyContent:"center", paddingTop:"10px",flexWrap: "wrap"}}>
        <div style={{width:"140px", height:"30px", backgroundColor:"#0E2043", borderRadius:"10px", color:"#E3AB50", display:"flex", alignItems:"center", justifyContent:"center",border: "1px solid #0E2043", marginRight:"30px"}}>CARRIBEAN</div>
        <div style={{width:"140px", height:"30px", backgroundColor:"#fff", borderRadius:"10px", color:"#0E2043", display:"flex", alignItems:"center", justifyContent:"center", border: "1px solid #0E2043",}}>EUROPE</div>
    </div>
    <div style={{display:"flex",justifyContent:"center", paddingTop:"10px",flexWrap: "wrap"}}>
        <div style={{paddingLeft:"5px", paddingRight:"5px", height:"30px", backgroundColor:"#fff", borderRadius:"10px", color:"#0E2043", display:"flex", alignItems:"center", justifyContent:"center", border: "1px solid #0E2043",}}>OTHER PROGRAMS</div>
    </div>

        <div class="flexbox-container" style={{margin:"70px", marginTop:"0px"}}>
        {
          items &&
          items.map((item) => (
            <div style={{ padding: "40px" }}>

          <div class="citizen-item" key={item.id}>   
            <div className="container6">
              <img
                style={{ height: "100%", width: "100%", minHeight:"180px" }}
                src={`http://localhost:1337${item.Thumbnail.url}`}
              />
              <div style={{textAlign:"center", color:"#E3AB50", padding:"10px", fontSize:"20px"}}>{item.Title}</div>
              <div style={{textAlign:"center", color:"#000", padding:"10px", fontSize:"15px"}}>Access to {item.Countries} countries</div>
              <div style={{display:"flex", justifyContent:"center", paddingTop:"20px", paddingBottom:"20px"}}>
              <button class="findButton">FIND OUT MORE</button>
              </div>
            </div>
          </div>
        </div>        
        ))}

        {/* Find Out more Card */}
      <div style={{padding:"40px"}}>
        <div class="citizen-item" style={{height:"100%", minHeight:"348.8px"}}>   
            <div className="container6" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              
              <div style={{textAlign:"center", color:"#E3AB50", padding:"10px", fontSize:"20px"}}>CARIBBEAN CITIZENSHIP</div>
              <div style={{display:"flex", justifyContent:"center", paddingTop:"20px", paddingBottom:"10px"}}>
              <button class="findButton">APPLY NOW</button>
              </div>
              <div style={{textAlign:"center", color:"#0E2043", padding:"10px",paddingTop:"30px", fontSize:"15px"}}>COMPARE PROGRAMS</div>

            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:1337/citizenships?_limit=5');
  const items = await res.json();  
  
  return {
    props: {items},
  }
}