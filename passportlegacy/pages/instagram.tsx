import React from "react";
import InstagramEmbed from "react-instagram-embed";
import Head from 'next/head'

export default function Instagram({ posts }) {
  return (
    <>
      <InstagramEmbed
        url='https://www.instagram.com/p/CBukEh6lifK/?utm_source=ig_web_copy_link'
        clientAccessToken='IGQVJVN204R21lMy1UQnFESE5lYmljUUlweGFmcXN0SUhfSUJSc1VYWkQtMlNuQ09XVy1ZAc1lDSV9JeDREV213dTBfMW5aT0d3RVJHUUF6elVreHc3RTZAPR2hIQnIzOVNNUkdjblZAfMmRZATE9IWkdjegZDZD'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </>
  );
}

