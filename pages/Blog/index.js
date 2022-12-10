<<<<<<< HEAD
// import React from 'react'

function index() {
=======
import React from 'react'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
function Blog() {
  const { t } = useTranslation();
>>>>>>> 4f3097d9126be928088337811d3bb6b27bfc676b
  return (
    <>
 <div className="xl:mx-16 lg:mx-8">
      <h2 className="lg:text-[96px] md:text-[70px] text-[40px] AllertaStencil_font text-center mb-8">
      {t("blog:heading")}
      </h2>
      <div className="Actor_font flex flex-col gap-8 md:text-2xl text-xl text-justify">
        <p>
       {t("blog:firstParagraph")}
        </p>
        <p>
          {t("blog:secondParagraph")}
        </p>
        <p>
         {t("blog:thirdParagraph")}
        </p>
        <p>
        {t("blog:fourthParagraph")}
        </p>
        <p>
        {t("blog:fifthParagraph")}
        </p>
        <p>
        {t("blog:sixthParagraph")}
        </p>
      </div></div>
    </>
  )
}

export default Blog;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","Header","blog","footer","navbar"])),
      // Will be passed to the page component as props
    },
  };
}