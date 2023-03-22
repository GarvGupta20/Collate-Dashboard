import React from "react";
import SubjectSelect from "./NotesForm/SubjectSelect";
import GetNotesButton from "./NotesForm/GetNotesButton";


function NotesForm()
{
    return (

        <>
        <div className="flex md:flex-row flex-col gap-y-8 flex-nowrap md:justify-center justify-start items-center m-8">
            <SubjectSelect />
            <GetNotesButton />
        </div>
        </>
    )
}

export default NotesForm