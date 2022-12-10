import { useTranslation } from 'next-i18next'
import React from 'react'
<<<<<<< HEAD
import ElectoralLaw from '../Sidebar/ElectoralLaw'
import Link from 'next/link'
function AccountSidebar() {
  

  return (
    <div className='flex flex-col md:gap-44 gap-8'>
      {/* <Link className="Cabin_font text-xl" href="/constitution">
            
          
            <p className="mt-8 text-[#1D8346]  underline">
          {" "}
          Get the Case Study
        </p>
         
        </Link> */}
      <Link href="/constitution">
      <div className=" ">
          <ElectoralLaw />
=======

function AccountSidebar() {
  const {t}=useTranslation();
  return (
    <div className='flex flex-col md:gap-44 gap-8'>
          <div className="  ">
          
>>>>>>> 4f3097d9126be928088337811d3bb6b27bfc676b
          </div>
          </Link>

          
          
          <div className="mx-8">
            <p className="AdventPro_font text-[32px] text-center">{t("login:sidebar-heading")}</p>
            <div className="py-1 my-4 rounded-full bg-[#D9D9D9] md:w-[316px] flex px-8 mx-auto">
              <div className="flex justify-between">
                <div className="flex my-auto">
                  <img src="/images/alert-triangle.svg" />
                </div>
                <h2 className="flex my-auto w-[80%] ">
                 {t("login:sidebar-text")}
                </h2>
              </div>
            </div>
          </div>
        
    </div>
  )
}

export default AccountSidebar