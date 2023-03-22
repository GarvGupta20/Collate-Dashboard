import React from "react";



function FeatureCard({HeadingText , CardInfo , ButtonContent}) {
    return (
      <div className="bg-zinc-50 flex flex-col flex-nowrap items-center justify-center gap-y-1 rounded-lg shadow-md p-4 w-1/2 text-center">
        <h2 className="md:text-lg font-bold subpixel-antialiased text-sm text-gray-800">{HeadingText}</h2>
        <p className="text-gray-500 mt-2">{CardInfo}</p>
        <div className="flex justify-center mt-4 font-extrabold">
          <button className="bg-purple-50 hover:bg-purple-100 transition-colors duration-300 ease-in-out rounded-md border border-purple-200 text-purple-500 py-2 px-4 flex items-center">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M16.42 7.76l-7-4c-.4-.23-.9-.23-1.3 0l-7 4c-.56.32-.92.93-.92 1.59v6c0 .66.36 1.27.92 1.59l7 4c.4.23.9.23 1.3 0l7-4c.56-.32.92-.93.92-1.59v-6c0-.66-.36-1.27-.92-1.59zm-.58 1.83l-5 2.86v5.82l5-2.86v-5.82zm-12-1.83l5-2.86v5.82l-5 2.86v-5.82zm6.32-2.68l5 2.86-3.02 1.73-1.98-1.14-3.02 1.73-1.98-1.14-3.02 1.73 5-2.86 3.02-1.73 1.98 1.14z"/>
          </svg>
            {ButtonContent}
         </button>

        </div>
      </div>
    );
  }
  
  export default FeatureCard;
  