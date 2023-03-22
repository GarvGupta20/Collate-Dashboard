import React from "react";

import imageUrl from '../images/LogoSVG.svg';

function Logo()
{
    return (
       <>
        
        <div className="md:w-1/12 w-1/3 h-fit flex-initial p-2"> 
          <img className="" src={imageUrl} alt="Collate-Logo" />
        </div>

       </>
    );
}

export default Logo;