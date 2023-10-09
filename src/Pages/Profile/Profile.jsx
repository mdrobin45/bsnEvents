import { useContext } from "react";
import { toast } from "react-toastify";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SiteTitle from "../../Components/SiteTitle/SiteTitle";
import { AuthContext } from "../../MyContext/AuthContextProvider";

const Profile = () => {
   const { user } = useContext(AuthContext);
   const { displayName, email, phoneNumber, photoURL, emailVerified } = user;

   const { verifyEmail } = useContext(AuthContext);

   // handle email verification
   const verificationHandle = () => {
      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Processing...",
         isLoading: true,
      });

      verifyEmail().then(() => {
         toast.update(toastMsg, {
            render: "Verification email sent!",
            type: "success",
            isLoading: false,
            autoClose: 1500,
         });
      });
   };

   return (
      <div>
         <SiteTitle>Profile</SiteTitle>
         <PageHeader title="Profile" />
         <div className="bg-white mx-6 lg:w-2/4 lg:mx-auto my-20 overflow-hidden shadow rounded-lg border">
            <div className="flex items-center justify-between">
               <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                     My Profile
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                     This is some information about you.
                  </p>
               </div>
               <div className="px-4">
                  <img
                     className="w-10 md:w-20 h-10 md:h-20 rounded-full border"
                     src={
                        photoURL
                           ? photoURL
                           : "https://i.ibb.co/238dYyx/user.png"
                     }
                     alt="User"
                  />
               </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
               <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt className="text-sm font-medium text-gray-500">
                        Full name
                     </dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {displayName}
                     </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt className="text-sm font-medium text-gray-500">
                        Email address
                     </dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {email}
                     </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt className="text-sm font-medium text-gray-500">
                        Phone number
                     </dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {phoneNumber ? phoneNumber : "Phone not available"}
                     </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     <dt className="text-sm font-medium text-gray-500">
                        Account Status
                     </dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {emailVerified ? (
                           <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                              Active
                           </span>
                        ) : (
                           <span
                              onClick={verificationHandle}
                              className="bg-red-100 cursor-pointer text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                              Click here to verify email
                           </span>
                        )}
                     </dd>
                  </div>
               </dl>
            </div>
         </div>
      </div>
   );
};

export default Profile;
