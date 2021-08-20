import React from 'react';
import Map from './map';
import Instagram from './instagram';
import Benefits from './benefits';
import Citizenship from './citizenship';
import Video from './video';
import Team from './team';
import Contact from './contact';
import Features from './features';

export default function Home({ posts, items }) {
  return (
    <div>
    {/* <div className="mapLayout"> */}
      <Map posts={posts}/>
      {/* </div> */}
      <Features/>
      <Benefits/>
      <Citizenship items={items}/>
      <Video/>
      <Team/>
      <Contact/>
      <Instagram/>
    </div>
  );
}

export async function getStaticProps() {
  const Mapres = await fetch("http://localhost:1337/maps");
  const Citizenshipres = await fetch('http://localhost:1337/citizenships');

  const items = await Citizenshipres.json();  
  const posts = await Mapres.json();

  return {
    props: { posts, items },
  };
}