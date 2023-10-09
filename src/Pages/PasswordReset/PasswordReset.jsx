import { useContext } from "react";
import { toast } from "react-toastify";
import Email from "../../Components/FormElements/FormFields/Email";
import SubmitBtn from "../../Components/FormElements/FormFields/SubmitBtn";
import FormHeader from "../../Components/FormElements/FormHeader/FormHeader";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";
import { AuthContext } from "../../MyContext/AuthContextProvider";

const PasswordReset = () => {
   const { resetPassword } = useContext(AuthContext);

   // Handle submit
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;

      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Processing...",
         isLoading: true,
      });

      // Firebase email password login
      resetPassword(email)
         .then(() => {
            toast.update(toastMsg, {
               render: "Please check your inbox!",
               type: "success",
               isLoading: false,
               autoClose: 1500,
            });
            e.target.reset();
         })
         .catch((err) => {
            if (err) {
               toast.update(toastMsg, {
                  render: "Reset failed! Try again",
                  type: "error",
                  isLoading: false,
                  autoClose: 1500,
               });
            }
         });
   };
   return (
      <div>
         <SiteTitle>Password Reset</SiteTitle>
         <PageHeader title="Password Reset" />
         <div className="flex flex-col items-center justify-center px-4 md:px-16 py-16">
            <div className="relative pb-6 flex w-full md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
               <FormHeader heading="Reset Password" />
               <form onSubmit={handleFormSubmit}>
                  <div className="flex flex-col gap-4 p-6">
                     <Email />
                     <SubmitBtn btnText="Reset" />
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default PasswordReset;
