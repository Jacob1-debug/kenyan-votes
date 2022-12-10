import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
function Navbar() {
  const [langauge ,setLanguage]=useState(false);
  const router = useRouter();
  
  const { t } = useTranslation();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );
  return (
    <div className=" bg-[#1A1A1A] text-white AbrilFatface_font text-sm">
      <ul className="md:flex justify-around md:h-[32px] h-[60px]">
        <div className="flex items-center justify-center md:gap-14 gap-6">
          {/* <li ><Link href="/">HOME</Link></li> */}
          <Link href="/">
            <div
              className={`active ${
                router.asPath === "/" && "text-[red] AllertaStencil_font"
              } `}
            >
              <span>{t("navbar:HOME")}</span>
            </div>
          </Link>
          <Link href="/Candidate">
            <div
              className={`active ${
                router.asPath === "/Candidate" && "text-[red] AllertaStencil_font"
              } `}
            >
              <span>{t("navbar:CANDIDATE")}</span>
            </div>
          </Link>
        </div>
        <div className="flex md:gap-14 gap-4 items-center justify-center md:mt-0 mt-2">
        <Link href="/Interactive">
            <div
              className={`active ${
                router.asPath === "/Interactive" && "text-[red] AllertaStencil_font"
              } `}
            >
              <span>{t("navbar:INTERACTIVE")}</span>
            </div>
          </Link>
          <Link href="/About">
            <div
              className={`active ${
                router.asPath === "/About" && "text-[red] AllertaStencil_font"
              } `}
            >
              <span>{t("navbar:ABOUT")}</span>
            </div>
          </Link>
          <Link href="/Blog">
            <div
              className={`active ${
                router.asPath === "/Blog" && "text-[red] AllertaStencil_font"
              } `}
            >
              <span>{t("navbar:BLOG")}</span>
            </div>
          </Link>

          {otherLocales?.map((locale) => {
                const { pathname, query, asPath } = router;
                return (
                  <span key={"locale-" + locale}>
                    <Link
                      href={{ pathname, query }}
                      as={asPath}
                      locale={locale}
                    >
                      <li className="bg-[#010101] rounded-full p-0.5 px-1 font-sans font-semibold cursor-pointer" onClick={()=>{
            setLanguage(!langauge)
          }}>
            {langauge ==false ? "EN" :"SW"}
          
          </li>
                    </Link>
                  </span>
                );
              })}
         
          <Link href="/Login">
            <div
              className={`active ${
                router.asPath === "/Login" && "text-[red] AllertaStencil_font"
              } `}
            >
              <span>{t("navbar:LOGIN")}</span>
            </div>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
