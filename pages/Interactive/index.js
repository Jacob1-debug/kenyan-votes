import React from 'react'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
function Interactive() {
  const { t } = useTranslation();
  return (
    <>
     <h2 className="md::m-16 md:m-8 m-4 text-center lg:text-[20px] text-[28px] AllertaStencil_font">
     {t("interactive:Heading")}
      </h2>
      <p className='Actor_font md:text-2xl text-xl md:mx-16 mx-4'>
<<<<<<< HEAD
        This page enables to see how the general outlook of the hierachy of power is. 
         </p>
=======
        {t("interactive:Text")}
      </p>
>>>>>>> 4f3097d9126be928088337811d3bb6b27bfc676b
<img className='flex mx-auto my-8' src="/images/interactive.png"/>
    </>
  )
}

export default Interactive

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","Header","interactive","footer","navbar"])),
      // Will be passed to the page component as props
    },
  };
}