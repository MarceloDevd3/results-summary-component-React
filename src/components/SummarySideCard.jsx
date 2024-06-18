import React from "react";
import data from './Data/data.json'

export default function whiteContent() {

    const ListItem = data.map(dados => {
        
        return (
            <article className={dados.bgColor} key={dados.id}>
               <div className="left">
                   <img src={dados.icon} alt="icon" />
                   <p className={dados.classNames}>{dados.category}</p>
               </div>
               <div className="right">
                  <p className="numeros"> {dados.score} <span className="Op-50">  / 100</span></p>
               </div>
            </article>
        )
    })

    return (
        <article className="summary--card-content">
          <h4 className="summary--content-title"> Summary</h4>
          <section className="sumarry-row-section">
            {ListItem }
            <button className="btn">Continue</button>
          </section>
        </article>
    )
}