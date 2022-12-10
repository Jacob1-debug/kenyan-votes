import React from 'react'
import Navbar from './Navbar'
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
function Header() {
  const { t } = useTranslation();
  return (
    <>
    <div className='bg-[url("/images/header_background.svg")] h-44 bg-no-repeat bg-cover w-full'>
      <h2 className='md:text-8xl text-6xl  text-white opacity-10 py-2'>{t("Header:h1")}</h2>
      <p className=' AdventPro_font text-white absolute right-0 top-14 mx-3 md:text-[28px] text-2xl'>{t("Header:h2")}</p>
   
    </div>
      <div className=''>
      <Navbar/>
      </div>
      </>
  )
}

export default Header