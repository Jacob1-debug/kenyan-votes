import React from 'react'
import Home from "./Home"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';



function main() {
    
  return (
    <>
    <Home/>
    </>
  )
}
export default main;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","Header","navbar","Home","footer"])),
      // Will be passed to the page component as props
    },
  };
}
