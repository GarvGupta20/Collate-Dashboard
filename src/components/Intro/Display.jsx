import React from "react";
import InviteButton from "./InviteButton";
import imgUrl from '../images/LogoImg.jpeg'


function Display()
{
    return (
       <>
        
        <div className="md:h-fit flex-auto md:w-1/2 w-full md:order-first order-last flex flex-col flex-nowrap justify-center items-center gap-y-3"> 
        <h1 class="subpixel-antialiased text-4xl md:text-5xl font-bold tracking-wider text-center text-violet-800  w-full">Hey Garv!!</h1>


              <h2 className="text-black md:text-2xl text-xl brightness-105 subpixel-antialiased w-full flex-auto font-bolder" > Welcome To Our Platform</h2>
              <img src={imgUrl} alt="collate-logo" />
              <InviteButton />
              
        </div>

       </>
    );
}

export default Display;