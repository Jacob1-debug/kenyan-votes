// import AccountSidebar from "../../components/Login/AccountSidebar";
import LoginForm from "../../components/Login/LoginForm";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
function Login() {
  return (
    <>
      <div className="md:flex justify-center w-full md:my-16">
   <div className="lg:w-30%">
    {/* <AccountSidebar/> */}
   </div>
        <div className="md:w-[70%] w-full md:border-l md:pt-16 pt-4 p-4 lg:px-16">
       <LoginForm/>
        </div>
      </div>
    </>
  );
}

export default Login;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","Header","footer","login","register","navbar"])),
      // Will be passed to the page component as props
    },
  };
}