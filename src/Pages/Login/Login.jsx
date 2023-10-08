import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Email from "../../Components/FormElements/FormFields/Email";
import Password from "../../Components/FormElements/FormFields/Password";
import SubmitBtn from "../../Components/FormElements/FormFields/SubmitBtn";
import FormFooter from "../../Components/FormElements/FormFooter/FormFooter";
import GithubSignIn from "../../Components/FormElements/FormFooter/SocialSignIn/GithubSignIn";
import GoogleSignIn from "../../Components/FormElements/FormFooter/SocialSignIn/GoogleSignIn";
import FormHeader from "../../Components/FormElements/FormHeader/FormHeader";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";
import { AuthContext } from "../../MyContext/AuthContextProvider";

const Login = () => {
   const { loginWithEmailPassword } = useContext(AuthContext);
   const { state } = useLocation();
   const navigate = useNavigate();

   // Form submit
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Please wait...",
         isLoading: true,
      });

      // Firebase email password login
      loginWithEmailPassword(email, password)
         .then((result) => {
            if (result.user) {
               toast.update(toastMsg, {
                  render: "Login Successful!",
                  type: "success",
                  isLoading: false,
                  autoClose: 1500,
               });
               if (state !== null) {
                  navigate(state.prevUrl);
               } else {
                  navigate("/");
               }
            }
         })
         .catch((err) => {
            if (err) {
               toast.update(toastMsg, {
                  render: "Incorrect email or password",
                  type: "error",
                  isLoading: false,
                  autoClose: 1500,
               });
            }
         });
   };
   return (
      <>
         <SiteTitle>Login</SiteTitle>
         <PageHeader title="Login" />
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
                        <SubmitBtn btnText="Login" />
                     </div>
                  </div>
               </form>
               <FormFooter
                  linkComment="Don't have an account?"
                  linkText="Create a new account"
                  linkUrl="/register"
               />
               <GoogleSignIn />
               <GithubSignIn />
            </div>
         </div>
      </>
   );
};

export default Login;
