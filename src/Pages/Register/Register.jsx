import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DisplayError from "../../Components/FormElements/FormFields/DisplayError";
import Email from "../../Components/FormElements/FormFields/Email";
import Name from "../../Components/FormElements/FormFields/Name";
import Password from "../../Components/FormElements/FormFields/Password";
import SubmitBtn from "../../Components/FormElements/FormFields/SubmitBtn";
import TOS from "../../Components/FormElements/FormFields/TOS";
import FormFooter from "../../Components/FormElements/FormFooter/FormFooter";
import GithubSignIn from "../../Components/FormElements/FormFooter/SocialSignIn/GithubSignIn";
import GoogleSignIn from "../../Components/FormElements/FormFooter/SocialSignIn/GoogleSignIn";
import FormHeader from "../../Components/FormElements/FormHeader/FormHeader";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";
import { AuthContext } from "../../MyContext/AuthContextProvider";
import { formValidation } from "./Validation";

const Register = () => {
   const [errorMessage, setErrorMessage] = useState(null);
   const { registerWithEmailPassword, profileUpdate } = useContext(AuthContext);

   const navigate = useNavigate();

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

      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Please wait...",
         isLoading: true,
      });

      // Firebase email password signUp
      registerWithEmailPassword(email, password)
         .then((result) => {
            if (result.user) {
               profileUpdate({
                  displayName: name,
               });
               toast.update(toastMsg, {
                  render: "Registration Successful!",
                  type: "success",
                  isLoading: false,
                  autoClose: 1500,
               });
               navigate("/");
            }
         })
         .catch((err) => {
            toast.update(toastMsg, {
               render: "Registration failed!",
               type: "error",
               isLoading: false,
               autoClose: 1000,
            });
            setErrorMessage(err.message);
         });
   };
   return (
      <>
         <SiteTitle>Register</SiteTitle>
         <PageHeader title="Create New Account" />
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
               <GoogleSignIn />
               <GithubSignIn />
            </div>
         </div>
      </>
   );
};

export default Register;
