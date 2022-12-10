import React from "react";
import GetInTouch from "../../components/Home/GetInTouch";
import ResultSection from "../../components/Home/ResultSection";
import { TypeAnimation } from 'react-type-animation';
<<<<<<< HEAD
// import Head from 'next/head';
// import { makeStyles } from '@material-ui/core/styles';
// import HighContrast from '@material-ui/icons/HighContrast';
// import TextField from '@material-ui/core/TextField';

function index() {
  // const useStyles = makeStyles(theme => ({
  //   root: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   },
  //   highContrastButton: {
  //   cursor: 'pointer',
  //   '&:hover': {
  //   color: theme.palette.primary.main,
  //   },
  //   },
  //   highContrast: {
  //   backgroundColor: '#000',
  //   color: '#fff',
  //   },
  //   textField: {
  //   width: '75%',
  //   marginTop: theme.spacing(2),
  //   },
  //   }));
=======
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
function Home() {
  const {t}=useTranslation();
>>>>>>> 4f3097d9126be928088337811d3bb6b27bfc676b
  return (
    
    <div className="xl:mx-16 lg:mx-12">
      
      <h2 className="xl:text-[96px] md:text-[70px] text-[40px] AllertaStencil_font text-center mb-8">INFO-VAP</h2>
      <h2 className="xl:text-[36px] md:text-[70px] text-[40px] AllertaStencil_font text-center mb-8">
        <TypeAnimation
      sequence={[
        'Get the most reliable information on voting', // Types 'One'
        5000, // Waits 1s
        '', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        ' ', // Types 'Three' without deleting 'Two'
       
      ]}
     
      cursor={true}
      repeat={Infinity}
      
    />
      </h2>
      <div className="Actor_font flex flex-col gap-8 md:text-2xl text-xl text-justify">
        <p>
          {t("Home:firstParagraph")}
        </p>
        <p>
<<<<<<< HEAD
        Voting is an essential part of democracy, and it’s important for everyone to have a chance to make their voice heard.
         Unfortunately, too often people with disabilities are left out of the voting process. This is especially true in Kenya,
          where the percentage of adults with disabilities who have ever voted is just 21%. 
This is why we’re committed to making sure everyone feels included in our voting app.
 . {" "}
 </p>

{/* <br/> */}
<p>
Our app features multiple levels of accessibility so that everyone can easily find and use it. For example, 
we offer visual aids such as high contrast visuals and text-to-speech options so that visually impaired individuals 
can still participate in the voting process. We also make sure that anyone who requires special hardware or software, 
such as screen readers or braille displays, can access the app and use it with ease. Additionally, we provide adjustable 
font sizes and magnified content for those who may have trouble seeing small text on a standard display. 
By creating an accessible and inclusive voting app, we are helping to ensure that no one is excluded from having
 a say in the future of their nation. By making sure that everyone feels included and can cast their vote, we are helping to create a better and more equitable society. We encourage everyone in Kenya to make their voice heard by participating in this important democratic process.
 </p>
=======

        {t("Home:secondParagraph")}
        </p>
        {/* <p>
          A stone hand-picked from the river Thames and brought to Flat 8. Fresh
          handmade pizzas can be made on this stone provided the oven
          temperature can be regulated. Note: stones do not catch fire (unlike
          cardboard takeout boxes housing fish and chips and/or electric kettles
          turned on by placing them on stoves).
        </p> */}
>>>>>>> 4f3097d9126be928088337811d3bb6b27bfc676b
      </div>
      <ResultSection/>
      <GetInTouch/>
    </div>
  );
}

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","Home","footer","header"])),
      // Will be passed to the page component as props
    },
  };
}