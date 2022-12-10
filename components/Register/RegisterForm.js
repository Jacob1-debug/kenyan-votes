import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import { useState } from "react";
function RegisterForm() {
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
              for="inline-Name"
            >
             {t("register:name")}
            </label>
          </div>
          <div className="md:w-2/3 Actor_font">
            <input
              className="bg-white rounded focus:outline-none w-full p-2 py-3 "
              id="inline-Name"
              type="text"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="AbrilFatface_font text-[#676767] lg:text-[18px]"
              for="inline-date"
            >
             {t("register:gender")}
            </label>
          </div>
          <div className="md:w-2/3 Actor_font">
            <div className="flex ">
              <div className="form-check form-check-inline">
                <input
                  className=" form-check-input appearance-none mt-1 rounded-full h-4 w-4 border border-black bg-white checked:bg-blue-600  bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label
                  className="form-check-label inline-block "
                  for="inlineRadio10"
                >
                  {t("register:male")}
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className=" form-check-input appearance-none mt-1 rounded-full h-4 w-4 border border-black bg-white checked:bg-blue-600  bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label
                  className="form-check-label inline-block "
                  for="inlineRadio20"
                >
                {t("register:female")}
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input  mt-1 appearance-none rounded-full h-4 w-4 border border-black bg-white  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label
                  className="form-check-label inline-block "
                  for="inlineRadio30"
                >
                  {t("register:other")}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="AbrilFatface_font text-[#676767] lg:text-[18px]"
              for="inline-date"
            >
            {t("register:date-of-birth")}
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
             {t("register:email")}
            </label>
          </div>
          <div className="md:w-2/3 Actor_font">
            <input
              className="bg-white rounded focus:outline-none w-full p-2 py-3 "
              id="inline-contact"
              type="Email"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="AbrilFatface_font text-[#676767] lg:text-[18px]"
              for="inline-contact"
            >
              {t("register:contact")}
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
              {t("register:district")}
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
             {t("register:password")}
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
              className="xl:w-[255px] w-[200px] flex md:mx-0 mx-auto justify-center items-center h-[70px] text-center rounded-lg bg-white 
              AkayaKanadaka_font text-[26px]"
              type="button"
            >
              {t("register:register-btn")}
            </button>
            <p className="md:my-12 my-8 text-[20px] md:text-left text-center">
            {t("register:signIn-text")}
              <Link className="text-[#30429F]" href="/Login">
              {t("register:signIn-link")}
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
