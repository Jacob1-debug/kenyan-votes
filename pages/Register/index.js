import AccountSidebar from "../../components/Login/AccountSidebar";
import RegisterForm from "../../components/Register/RegisterForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
function Register() {;
  return (
    <>
      <div className="md:flex justify-between w-full md:my-16 my-8">
   <div className="md:w-30%">
    <AccountSidebar/>
   </div>
        <div className="md:w-[70%] w-full md:border-l md:pt-16 pt-4 p-4 lg:px-16">
     <RegisterForm/>
        </div>
      </div>
    </>
  );
}

export default Register;


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","Header","footer","login","register","navbar"])),
      // Will be passed to the page component as props
    },
  };
}