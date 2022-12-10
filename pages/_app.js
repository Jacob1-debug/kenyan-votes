import "../styles/globals.css";
import Script from "next/script";
import Header from "../components/Layout/Header";
import OpinionPolls from "../components/Sidebar/OpinionPolls";
import { useTranslation } from "next-i18next";
import { appWithTranslation } from 'next-i18next'

import Login from "../pages/Login";
import Footer from "../components/Layout/Footer";
import { useState } from "react";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","navbar","footer"])),
      // Will be passed to the page component as props
    },
  };
}


function MyApp({ Component, pageProps, props }) {
 const { t } = useTranslation();
  const [Sidebar, setSidebar] = useState(false);
  const [ChangeBg, setChangeBg] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  
 

  const handleIncrease = () => {
    document
      .querySelector("html")
      .setAttribute("style", "font-size:140% !important;");
  };
  const handleDecrease = () => {
    document
      .querySelector("html")
      .setAttribute("style", "font-size:55% !important;");
  };
  const handleNormal = () => {
    document
      .querySelector("html")
      .setAttribute("style", "font-size:100% !important;");
  };
  const textToSpeach = () => {
    document
      .querySelector("html")
      .setAttribute("style", "font-size:100% !important;");
  };

  return (
    <div
      className={`  ${ChangeBg == false ? "bg-[#F5F5F5]" : "bg-[#CBEDEA] "}
      } || `}
    >
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      <Header />
      {/* <Login/> */}

      <div className="flex justify-between ">
        <div
          className={`${
            ChangeBg == false ? " bg-[#f3f2f2da] " : "bg-[#CBEDEA]"
          }  md:w-[15%] md:mt-16 mt-[14%]  `}
        >
          <div className="">
            <div
              className="fixed flex z-20"
              onClick={() => {
                setSidebar(!Sidebar);
              }}
            >
              <div className="bg-white">
                {Sidebar == false ? null : (
                  <div className="p-2">
                    <h2 className="text-[30px] mb-6">{t("common:Accessibility")}</h2>
                    <ul className="flex flex-col gap-4">
                      <li
                        className="flex gap-2 cursor-pointer"
                        onClick={handleIncrease}
                      >
                        <span className="flex my-auto">
                          <img className="w-4 h-4" src="/images/increase.png" />
                        </span>
                        {t("common:Increase-Text")}
                        
                      </li>
                      <li
                        className="flex gap-2 cursor-pointer"
                        onClick={handleDecrease}
                      >
                        <span className="flex my-auto">
                          <img className="w-4 h-4" src="/images/decrease.png" />
                        </span>
                        {t("common:Decrease-Text")}
                      
                      </li>
                      <li
                        className="flex gap-2 cursor-pointer"
                        onClick={() => {
                          setChangeBg(true);
                        }}
                      >
                        <span className="flex my-auto">
                          <img
                            className="w-4 h-4"
                            src="/images/grayscale.png"
                          />
                        </span>
                        {t("common:grayscale")}
                        
                      </li>
                      <li
                        className="flex gap-2 cursor-pointer"
                        onClick={() => {
                          setChangeBg(false);
                        }}
                      >
                        <span className="flex my-auto">
                          <img className="w-4 h-4" src="/images/reset.svg" />
                        </span>
                        <p className="w-full" onClick={handleNormal}>{t("common:Reset")}</p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <img
                className="bg-white p-4 lg:w-[120px] md:h-[120px] h-[100px] mt-0 cursor-pointer  md:opacity-100   "
                src="/images/wheelchair.svg"
              />
            </div>
          </div>
          <h2 className="AllertaStencil_font xl:text-[30px] lg:text-[24px] xl:w-full md:w-56 my-8 underline fixed mt-36 md:block hidden">
           {t("common:Electoral-Law")}
          </h2>
        </div>
        <div className="md:w-[60%] w-[100%] md:mx-0 mx-2 ">
          {/* For login need to keep the w-[100%] */}
          <Component {...pageProps} />
        </div>
        <div
          className="md:hidden block fixed  right-0 z-30 mt-8"
          onClick={() => {
            setShowAlert(!showAlert);
          }}
        >
          {showAlert == false ? null : (
            <div className="fixed right-0 w-[50%]">
              <OpinionPolls />
            </div>
          )}
          {showAlert == false ? (
            <img
              className="w-10 z-30 mt-6 m-1"
              src="/images/alert-triangle.svg"
            />
          ) : (
            <img className="w-8 z-30" src="/images/Alert_close.png" />
          )}
        </div>
        <div
          className={` ${
            ChangeBg == false ? " bg-[#f3f2f2da] " : "bg-[#CBEDEA]"
          }  md:w-[25%]  md:block hidden  `}
        >
          <OpinionPolls />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default appWithTranslation(MyApp);
