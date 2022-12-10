import { useTranslation } from "next-i18next";
import React from "react";

function GetInTouch() {
  const {t}=useTranslation();
  return (
    <>
      <div className="lg:flex gap-6 justify-center">
        <div className="lg:w-2/6 w-full">
          <p className="text-[42px] Allura_font mx-4 lg:text-left text-center">
           {t("Home:Get-In-Touch")}
          </p>
          <img
            className="lg:block hidden lg:my-0 my-4"
            src="/images/Dots_Shape.svg"
          />
        </div>
        <div className="lg:w-4/6 w-full ">
          <form className="w-full AkayaKanadaka_font text-lg bg-white p-4">
            <div className="flex items-center border-b border-teal-500 py-6">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder={t("Home:form-name")}
                aria-label="Full name"
              />
            </div>
            <div className="flex items-center border-b border-teal-500 py-6">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder={(t("Home:form-email"))}
                aria-label="Full name"
              />
            </div>
            <div className="flex items-center border-b border-teal-500 py-6 ">
              <textarea
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 pb-6 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder={(t("Home:form-message"))}
                aria-label="Full name"
              />
            </div>
            <button
              className=" my-6 mb-4 flex md:mx-0 mx-auto justify-center items-center w-[139px] h-[54px] bg-[#1D8346]  rounded-lg Cabin_font text-white"
              type="button"
            >
             {t("Home:form-send-btn")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;
