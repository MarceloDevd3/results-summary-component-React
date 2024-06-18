import React from "react";

import BlueCard from './BlueCard';
import SummaryCard from './SummarySideCard';

export default function CardContainer() {

    return (
        <article className="card-container">
          <BlueCard/>
          <SummaryCard/>
        </article>
    )
}