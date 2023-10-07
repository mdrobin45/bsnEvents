import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DisplayError from "../../Components/FormElements/FormFields/DisplayError";
import Email from "../../Components/FormElements/FormFields/Email";
import Password from "../../Components/FormElements/FormFields/Password";
import SubmitBtn from "../../Components/FormElements/FormFields/SubmitBtn";
import FormFooter from "../../Components/FormElements/FormFooter/FormFooter";
import GoogleSignIn from "../../Components/FormElements/FormFooter/SocialSignIn/GoogleSignIn";
import FormHeader from "../../Components/FormElements/FormHeader/FormHeader";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";
import { AuthContext } from "../../MyContext/AuthContextProvider";

const Login = () => {
   const [errorMessage, setErrorMessage] = useState(null);
   const { loginWithEmailPassword } = useContext(AuthContext);

   // Form submit
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      // Firebase email password login
      loginWithEmailPassword(email, password)
         .then((result) => {
            if (result.user) {
               // Do something after login
            }
         })
         .catch((err) => setErrorMessage(err.message));
   };
   return (
      <>
         <SiteTitle>Login</SiteTitle>
         <div className="flex flex-col items-center justify-center px-16 py-16">
            <div className="relative pb-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
               <FormHeader heading="Login" />
               <form onSubmit={handleFormSubmit}>
                  <div className="flex flex-col gap-4 p-6">
                     <Email />
                     <Password />
                     <div className="-ml-2.5">
                        <Link
                           to="/reset-password"
                           className="ml-1 mb-3 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased">
                           Forgotten Password?
                        </Link>
                        <DisplayError errMsg={errorMessage} />
                        <SubmitBtn btnText="Login" />
                     </div>
                  </div>
               </form>
               <FormFooter
                  linkComment="Don't have an account?"
                  linkText="Create a new account"
                  linkUrl="/register"
               />
               <GoogleSignIn setErrorMsg={setErrorMessage} />
            </div>
         </div>
      </>
   );
};

export default Login;
