import { useContext, useState } from "react";
import DisplayError from "../../Components/FormElements/FormFields/DisplayError";
import Email from "../../Components/FormElements/FormFields/Email";
import Name from "../../Components/FormElements/FormFields/Name";
import Password from "../../Components/FormElements/FormFields/Password";
import SubmitBtn from "../../Components/FormElements/FormFields/SubmitBtn";
import TOS from "../../Components/FormElements/FormFields/TOS";
import FormFooter from "../../Components/FormElements/FormFooter/FormFooter";
import GoogleSignIn from "../../Components/FormElements/FormFooter/SocialSignIn/GoogleSignIn";
import FormHeader from "../../Components/FormElements/FormHeader/FormHeader";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";
import { AuthContext } from "../../MyContext/AuthContextProvider";
import { formValidation } from "./Validation";

const Register = () => {
   const [errorMessage, setErrorMessage] = useState(null);
   const { registerWithEmailPassword, profileUpdate } = useContext(AuthContext);

   // Form submit
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const checkBox = e.target.checkbox.checked;

      // Form Validation
      const validationError = formValidation(name, email, password, checkBox);
      if (validationError) {
         setErrorMessage(validationError);
         return;
      }

      // Firebase email password signUp
      registerWithEmailPassword(email, password)
         .then((result) => {
            if (result.user) {
               profileUpdate({
                  displayName: name,
               });
               // Do something after register
            }
         })
         .catch((err) => setErrorMessage(err.message));
   };
   return (
      <>
         <SiteTitle>Register</SiteTitle>
         <div className="flex flex-col items-center justify-center px-16 py-16">
            <div className="relative pb-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
               <FormHeader heading="Create New Account" />
               <form onSubmit={handleFormSubmit}>
                  <div className="flex flex-col gap-4 p-6">
                     <Name />
                     <Email />
                     <Password />
                     <TOS />
                     <SubmitBtn btnText="Register" />
                     <DisplayError errMsg={errorMessage} />
                  </div>
               </form>
               <FormFooter
                  linkComment="Already have an account?"
                  linkUrl="/login"
                  linkText="Login"
               />
               <GoogleSignIn setErrorMsg={setErrorMessage} />
            </div>
         </div>
      </>
   );
};

export default Register;
