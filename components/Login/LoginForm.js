import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import { useState } from "react";
function LoginForm() {
  const {t}=useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [selectValue, setSelectValue] = useState("DISTRICT");
  const dropdown = [
    {
      text: "All",
    },
    {
      text: "Inprogress",
    },
    {
      text: "Complete",
    },
  ];
  return (
    <div>
      <form className="w-full max-w-xl">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="AbrilFatface_font text-[#676767] lg:text-[18px]"
              for="inline-date"
            >
             {t("login:date-text")}
            </label>
          </div>
          <div className="md:w-2/3 Actor_font">
            <input
              className="bg-white rounded focus:outline-none w-full p-2 py-3 "
              id="inline-date"
              type="date"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="AbrilFatface_font text-[#676767] lg:text-[18px]"
              for="inline-contact"
            >
              {t("login:contact-text")}
            </label>
          </div>
          <div className="md:w-2/3 Actor_font">
            <input
              className="bg-white rounded focus:outline-none w-full p-2 py-3 "
              id="inline-contact"
              type="text"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="AbrilFatface_font text-[#676767] lg:text-[18px]"
              for="inline-password"
            >
             {t("login:district-text")}
            </label>
          </div>
          <div className="md:w-2/3 Actor_font">
            <div className="flex justify-between gap-4 ">
              <div className=" w-full ">
                <div className="relative  text-[#333333]">
                  <div
                    className=" cursor-pointer w-full flex items-center justify-between  bg-white rounded  px-3 py-3.5 "
                    onClick={() => setShowAll(!showAll)}
                  >
                    <p className="text-sm  ">{selectValue}</p>
                    <img
                      src="/images/down-arrow.png"
                      alt="down-arrow"
                      className={showAll == true && "rotate-180"}
                    />
                  </div>
                  <ul
                    className={`text-sm max-w-full z-20 shadow-[0px_3px_12px_#00000026]  
                  rounded-b  absolute left-0 right-0 top-[49px]  bg-white ${
                    showAll == false ? "hidden" : "block"
                  }`}
                  >
                    {dropdown.map((val, key) => {
                      return (
                        <>
                          <div onClick={() => setShowAll(!showAll)}>
                            <li
                              className="mt-[6px] relative  px-2 cursor-pointer flex py-2.5  justify-between  border-b border-[#E2E2E2]"
                              key={key}
                              onClick={() => setSelectValue(val.text)}
                            >
                              {val.text}
                            </li>
                          </div>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="AbrilFatface_font text-[#676767] lg:text-[18px]"
              for="Vote"
            >
             {t("login:password-text")}
            </label>
          </div>
          <div className="md:w-2/3 Actor_font">
            <input
              className="bg-white rounded focus:outline-none w-full p-2 py-3 "
              id="Vote"
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3 Actor_font">
            <button
              className="lg:w-[255px] w-[200px] flex md:mx-0 mx-auto justify-center items-center h-[70px] text-center rounded-lg bg-white 
              AkayaKanadaka_font text-[26px]"
              type="button"
            >
             {t("login:login-btn")}
            </button>
            <p className=" text-[20px] md:my-12 my-8"> {t("login:Signup-text")} <Link className="text-[#30429F]" href="/Register">{t("login:signup-text1")}</Link></p>
          </div>
        </div>
      </form>
     
    </div>
  );
}

export default LoginForm;
