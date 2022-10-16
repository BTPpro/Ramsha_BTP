import React from "react";
import Jobcard from "./Jobcards";
import Search from "./searches";
import AppCss from "./app.module.css";

function Jobs()
{
    return (
        <div className="card">
        <div className="latestJobPostings">
      <h3 className={AppCss.h3} >LATEST JOB POSTINGS</h3>
     <Jobcard />
     <Search />
     </div>
     </div>
    )
}

export default Jobs;