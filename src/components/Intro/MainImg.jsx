import React from "react";
import imgUrl from '../images/MainImg.png'


function MainImg()
{
    return (
       <>
        
        <div className="md:h-fit flex-auto md:w-1/2"> 
          <img className="md:w-5/12  w-1/2 m-auto" src={imgUrl} alt="Collate-Logo" />
        </div>

       </>
    );
}

export default MainImg;