import React, { useState, useEffect } from "react";
import ReactMapGL, { HTMLOverlay, Marker, Popup, Layer } from "react-map-gl";
import Instagram from "./instagram"
import continents from "./continents.json";

export default function Map({ posts }) {
  const [viewport, setViewport] = useState({
    latitude: 36.592206968562685,
    longitude: 3.332469343750031,
    width: "100vw",
    height: "100vh",
    zoom: 0.8,    
  });

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isPopupShown, setIsPopupShown] = useState(false);

  const continentLayer = {
    id: "continents",
    type: "fill",
    source: {
      type: "geojson",
      data: continents
    },
    paint: {
      "fill-color": [
        "match",
        ["get", "CONTINENT"],
        "Asia",
        "#009128",
        "Europe",
        "#007B56",
        "North America",
        "#007BCC",
        "Africa",
        "#008B91",
        "South America",
        "#008EDF",
        "Australia",
        "#699D24",
        "Antarctica",
        "#7AA739",
        "Oceania",
        "#7AA739",
        /* default */ "yellow"
      ]
    }
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedProperty(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <>
    <div className="root">
      <div className="map" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <ReactMapGL
      
      setRenderWorldCopies={1}
      scrollZoom={false}
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiamF5NTA1MyIsImEiOiJja3M1d2R0Y3QwNTY1MnBxeWkwaGE3cTJtIn0.04HjfOaY_NSQ2-jH53Fv_w"
        mapStyle="mapbox://styles/jay5053/cksfobclk316a18nvog34cn2d"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
       <Layer {...continentLayer} />
        {selectedProperty && (
            
            <HTMLOverlay
            redraw={(props) => {
              
              return (
                <div
                    style={{
                      width: isPopupShown ? props.width : 0,
                      height: isPopupShown ? props.height : 0,
                      transition: "all .2s ease-in-out",
                      transform: "scale(1.1)",
                      overflow: "hidden",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundImage: `url(http://localhost:1337${selectedProperty.Thumbnail.url})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
                    }}
                  >
                  <div style={{display:"flex",marginTop:"20%", textAlign:"center",color:"#fff", justifyContent:"center",alignItems:"center"}}>
                    <h1>{selectedProperty.Title}</h1>
                  </div>
                  {/* todo: text/content position */}
                  {/* <img style={{height:"100%", width:"100%"}} src={`http://localhost:1337${maps.Thumbnail.url}`}/> */}
                </div>
              );
            }}
          />

          )}

          {posts &&
            posts.map((maps) => (
            <Marker
              key={maps.id}
              latitude={maps.Latitude}
              longitude={maps.Longitude}
            >
              {/* <div>{maps.Title}</div> */}
              <button
                    className="marker-btn"                    
                  >
                <img src="placeholder.svg" 
                    onMouseEnter={() => {
                      setSelectedProperty(maps);
                      setIsPopupShown(true);
                    }}
                    onMouseOut={() => {
                      setSelectedProperty(null);
                      setIsPopupShown(false);
                    }}
                    onClick={() => {
                      // todo: open some URL
                      window.open(`http://localhost:1337${maps.Thumbnail.url}`);
                    }}
                    />
                    
              </button>
            </Marker>
          ))}
          </ReactMapGL>
        </div>

      
    <div style={{textAlign:"center", fontSize:"25px", fontWeight:"bold",color:"#fff", marginTop:"-70px"}}>PASSPORT LEGACY</div>
    </div>

      </>
      
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/maps");
  const posts = await res.json();

  return {
    props: { posts },
  };
}
