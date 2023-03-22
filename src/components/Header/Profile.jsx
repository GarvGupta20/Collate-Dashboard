import React from "react";
import imgUrl from '../images/Drop.png';


function Profile()
{
    return (
       <>
       <div className="flex flex-row flex-nowrap item-center justify-center md:justify-start md:w-1/6 w-1/2 md:h-fit flex-initial">
     <div className="relative inline-block w-10 h-12  bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
     </div>
     <button class="bg-blue-500 hover:bg-blue-500 text-violet-50 h-9/12 font-bolder mx-4 rounded w-1/2 flex flex-row items-center justify-center">
       <p className="flex-grow">Garv</p>
     </button>
     </div>


       </>
    );
}

export default Profile;

//<img src={imgUrl} className="w-1/4" alt="Drop"/>