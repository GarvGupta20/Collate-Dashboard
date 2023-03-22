import React from "react";


function SubjectSelect()
{
    return (

        <>
          
        <form className="md:w-1/3 w-full flex flex-row flex-nowrap justigy-start gap-x-4" action="">

        <label className="md:text-2xl text-1xl font-bolder text-black subpixel-antialiased"  for="subject-select">

          Enter Subject  
            
        </label>    

        <input className="border-black border-2 md:h-fit h-9/12" name="subject-select" type="text" />
            
        </form> 
         
        </>
    )
}

export default SubjectSelect