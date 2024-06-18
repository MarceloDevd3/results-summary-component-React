import React from "react";

export default function blueContent() {

    return (
        <article className="Blue--card-content">
           <h1 className="card--content-title"> Your Result</h1>
           <div className="Blue--circle">
              <h2 className="circle-txt"> 76 <br /> <span className="Op-50">of 100</span></h2>
           </div>
           <div className="card-info-bottom">
             <h3 className="info--bottom-title">Great</h3>
             <p className="info--bottom-sub-text">You scored higher than 65% of the people who have taken these tests.</p>
           </div>
        </article>
    )
}