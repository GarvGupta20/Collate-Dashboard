import React from "react";
import MainImg from "./Intro/MainImg";
import Display from "./Intro/Display";

function IntroSection()
{
    return (
            <>
              <div className="text-center m-16 flex md:flex-row flex-col flex-nowrap justify-center items-center md:gap-0  gap-y-12 ">

                    
                  <Display />
                  <MainImg />

              </div>
            </>
    );
}

export default IntroSection;