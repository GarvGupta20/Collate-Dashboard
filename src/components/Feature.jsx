import React from "react";
import FeatureCard from "./Feature/FeatureCard";


function Feature()
{
    return (
         
        <>
         
        <div className="flex flex-row justify-center items-center m-12 gap-x-4">

             <FeatureCard HeadingText="Share Your College Stories" CardInfo="Share your wonderful Journey and your unique Experience of College" ButtonContent="Share"/>
             <FeatureCard HeadingText="Become a tutor" CardInfo="You can be a member of collate to help students with their coursework" ButtonContent="Join"/>

        </div>
        
        </>
    )
}

export default Feature