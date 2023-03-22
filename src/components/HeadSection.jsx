import React from "react";
import Logo from "./Header/Logo";
import Profile from "./Header/Profile";
import Navigation from "./Header/Navigation";
function HeadSection()
{
    return (
            <>
              <div className="md:gap-0 gap-x-16 text-sky-900 flex flex-row flex-nowrap md:justify-center justify-between md:items-center">
  
                 <Logo />
                 <Navigation />
                 <Profile />

              </div>
            </>
    );
}

export default HeadSection;