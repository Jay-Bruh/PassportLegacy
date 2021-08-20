import Head from "next/head";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div  
    className={className}    
      style={{ }}
      onClick={onClick}
    ><img style={{width:"20px"}} src="rightArrow.png"/></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div      
    className={className}    
      style={{}}
      onClick={onClick}
    ><img style={{width:"20px"}} src="leftArrow.png"/></div>
  );
}

export default function About({posts}) {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
    <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossorigin="anonymous"/>
      </Head>
      <div className="aboutPage">     
        <div>
        <img src="aboutPage.png"/>
<div style={{marginTop:"-180px", position:"absolute", width:"100%"}}>
        <div style={{color:"#fff", fontFamily:"Roboto", fontSize:"60px", textAlign:"center", }}>PASSPORT LEGACY</div>
        <div style={{color:"#fff", fontSize:"20px", textAlign:"center", display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{maxWidth:"70%"}}>Your partner in alternative residence & citizenship.
Over 12 years of experience in the citizenship-by-investment industry</div>
</div>
</div>
</div>  
        <div style={{padding:"30px"}}>
          <div style={{color:"#0E2043", fontSize:"25px", fontWeight:"600", textAlign:"center"}}>ABOUT US</div>
          <section class="section-padding" id="about" >
                <div class="container">
                    <div class="row">                        

                        <div class="col-lg-4 col-md-5 col-12 mx-auto">
                            <video width="100%" height="100%" controls>
                              <source src="PassportVid.mp4" type="video/mp4"/>
                            </video>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12">

                            <p style={{color:"#0E2043", textAlign:"justify"}}>Passport Legacy is a boutique firm with over 12 years of combined experience in the citizenship-by-investment industry. We provide a range of professional services to our private clients including the acquisition of alternative residence or citizenship as well as real estate.<br/>

As a boutique firm, we are able to offer our clients tailored solutions to meet their specific needs with attractive professional fee structures – ensuring our clients receive a superior experience at an economical rate.<br/>

We are dedicated to providing our clients with the highest service standards, ensuring a smooth and efficient process to gaining alternative residence or citizenship.
</p>

                        </div>

                    </div>
                </div>
            </section>
            
        </div>
        
            <div style={{padding:"30px",backgroundColor:"#0E2043"}}>
              <div style={{color:"#fff", fontSize:"25px",textAlign:"center"}}>OUR <font style={{color:"#E3AB50"}}>MANAGEMENT</font> TEAM</div>
              <Slider {...settings}>
                <div>
                  <section class="section-padding" id="about" >
                <div class="container">
                    <div class="row">                        

                        <div class="col-lg-4 col-md-5 col-12 mx-auto" style={{minHeight:"300px"}}>
                            <video width="100%" height="100%" controls>
                              <source src="PassportVid.mp4" type="video/mp4"/>
                            </video>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12" style={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column",}}>
                            <div style={{paddingBottom:"10px"}}><img src="logo2.png" style={{width:"45px"}}/></div>
                            <p style={{color:"#fff",fontSize:"25px", textAlign:"center"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>

                        </div>

                    </div>
                </div>
            </section>
                </div>
                <div>
                  <section class="section-padding" id="about" >
                <div class="container">
                    <div class="row">                        

                        <div class="col-lg-4 col-md-5 col-12 mx-auto" style={{minHeight:"300px"}}>
                            <video width="100%" height="100%" controls>
                              <source src="PassportVid.mp4" type="video/mp4"/>
                            </video>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12" style={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column",}}>
                            <div style={{paddingBottom:"10px"}}><img src="logo2.png" style={{width:"45px"}}/></div>
                            <p style={{color:"#fff",fontSize:"25px", textAlign:"center"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>

                        </div>

                    </div>
                </div>
            </section>
                </div>
                <div>
                  <section class="section-padding" id="about" >
                <div class="container">
                    <div class="row">                        

                        <div class="col-lg-4 col-md-5 col-12 mx-auto" style={{minHeight:"300px"}}>
                            <video width="100%" height="100%" controls>
                              <source src="PassportVid.mp4" type="video/mp4"/>
                            </video>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12" style={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column",}}>
                            <div style={{paddingBottom:"10px"}}><img src="logo2.png" style={{width:"45px"}}/></div>
                            <p style={{color:"#fff",fontSize:"25px", textAlign:"center"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>

                        </div>

                    </div>
                </div>
            </section>
                </div>
              </Slider>
            </div>            
           
      </div>
      </>
  );
}
