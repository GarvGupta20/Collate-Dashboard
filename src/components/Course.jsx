import React from "react";
import CourseTitle from "./Coursework/CourseTitle";
import CourseCard from "./Coursework/CourseCard";
import Laptop from "./images/Laptop.jpg"
import IT from './images/IT.jpg'
import ECE from './images/ECE.jpg'


function Course()
{
    return (
       <>
       <div className="flex flex-col flex-nowrap justify-start m-8 gap-y-8">
         <CourseTitle />
         <div className="flex flex-col md:flex-row justify-center items-center flex-nowrap md:gap-x-12 gap-y-10">
           
         <CourseCard title="CSE" imageUrl={Laptop}/>
         <CourseCard title="IT" imageUrl={IT}/>
         <CourseCard title="ECE" imageUrl={ECE}/>

         </div>
       </div>
       </>
    )
}

export default Course