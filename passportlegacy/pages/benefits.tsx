export default function Benefits({ posts }) {
  return (
    <>
    <div style={{backgroundColor:"#0E2043"}}>
    <div style={{color:"#fff",backgroundColor:"#0E2043", textAlign:"center", fontSize:"30px", padding:"20px",display:"flex",flexDirection:"column"}}>
    <div><img style={{width:"50px",marginTop:"-80px"}} src="logo2.png"/></div>
    <div>BENEFITS OF A SECOND PASSPORT</div>
    </div>
    <div className="container4" style={{padding:"20px 50px"}}>
    
        {/* <div style={{width:"50%",height:"100%", backgroundColor:"#000"}}>
            <div style={{justifyContent:"center", maxHeight:"100%", display:"flex"}}>
                <img style={{padding:"20px", maxHeight:"100%", maxWidth:"100%"}} src="passport.png"/>
            </div>
        </div>
        <div style={{width:"50%",height:"100%", backgroundColor:"#fff"}}></div> */}

        <div className="img-col">
            <img className="passportImage" src="passportbg.png"/>
        </div>
        <div className="text-col">
            <div style={{display:"flex", paddingBottom:"15px"}}>
                <img src="visa.svg"/>
                <div style={{display:"flex", flexDirection:"column", paddingLeft:"25px", }}>
                    <div style={{color:"#E3AB50",fontSize:"13px"}}>VISA-FREE TRAVEL</div>
                    <div style={{color:"#fff",fontSize:"13px", maxWidth:"410px"}}>Get a secondary passport from a Caribbean or European country enables you to travel visa-free to more 135 countries across the globe.</div>
                </div>
            </div>
            <div style={{display:"flex", paddingBottom:"15px"}}>
                <img src="education.svg"/>
                <div style={{display:"flex", flexDirection:"column", paddingLeft:"15px", }}>
                    <div style={{color:"#E3AB50",fontSize:"13px"}}>Educate Your Children in Europe</div>
                    <div style={{color:"#fff",fontSize:"13px", maxWidth:"410px"}}>Acquiring European citizenship from Dubai enables you and your immediate family members to study, work, or live anywhere in Europe.</div>
                </div>
            </div>
            <div style={{display:"flex", paddingBottom:"15px"}}>
                <img src="global.svg"/>
                <div style={{display:"flex", flexDirection:"column", paddingLeft:"25px", }}>
                    <div style={{color:"#E3AB50",fontSize:"13px"}}>Do Business Globally</div>
                    <div style={{color:"#fff",fontSize:"13px", maxWidth:"410px"}}>By obtaining secondary citizenship by investment from Dubai, you will be able to travel visa-free on short notice and thereby make use of global business opportunities.</div>
                </div>
            </div>
            <div style={{display:"flex", paddingBottom:"15px"}}>
                <img src="future.svg"/>
                <div style={{display:"flex", flexDirection:"column", paddingLeft:"15px", }}>
                    <div style={{color:"#E3AB50",fontSize:"13px"}}>Pave the Way for Future Generations</div>
                    <div style={{color:"#fff",fontSize:"13px", maxWidth:"410px"}}>Many secondary citizenship programs offer citizenship through descent. Your investment today can grant ample benefits to your future generations.</div>
                </div>
            </div>
            <div style={{display:"flex", paddingBottom:"15px"}}>
                <img src="tax.svg"/>
                <div style={{display:"flex", flexDirection:"column", paddingLeft:"15px", }}>
                    <div style={{color:"#E3AB50",fontSize:"13px"}}>Avail Tax Benefits</div>
                    <div style={{color:"#fff",fontSize:"13px", maxWidth:"410px"}}>By making a smart investment choice, you can benefit from favorable tax structures such as zero capital gains tax, inheritance tax, and net worth tax.</div>
                </div>
            </div>
            <div style={{display:"flex", paddingBottom:"15px"}}>
                <img src="planB.svg"/>
                <div style={{display:"flex", flexDirection:"column", paddingLeft:"15px", }}>
                    <div style={{color:"#E3AB50",fontSize:"13px"}}>The plan-b</div>
                    <div style={{color:"#fff",fontSize:"13px", maxWidth:"410px"}}>Dual citizenship enables you to ensure the safety and security of your family by offering you an opportunity to migrate to another country – almost immediately, once citizenship has been granted.</div>
                </div>
            </div>
        </div>
</div>
    </div>
    </>
  )
}