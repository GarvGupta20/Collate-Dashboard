import React from "react";

const navElement = ['Home', 'About' , 'Contact' , 'Blog' , 'Careers'];

function Navigation()
{
    return (
       <>
         
         <div className=" md:px-0.5  md:w-9/12 hidden md:h-fit md:flex md:flex-row md:flex-nowrap md:justify-center md:items-center md:flex-auto">
            <ul className="w-9/12  block">

               
            {navElement.map((item) => <li className="m-6 list-none text-center inline" >{item}</li>)}

            </ul>
         </div>

       </>
    );
}

export default Navigation;