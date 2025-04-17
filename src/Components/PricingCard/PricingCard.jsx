import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  return (
    <div className="border bg-slate-700 rounded-2xl p-5">
      {/* Card Header */}
      <h1 className="text-5xl">{pricing.planName}</h1>
      <h4 className="text-2xl">{pricing.price}</h4>
      {/* Card Body */}
      <div className="bg-slate-600 p-4 rounded-2xl">
        <p className="mb-3">{pricing.description}</p>
        {pricing.features.map((feature,index)=> <PricingFeature key={index} feature={feature}></PricingFeature>)}
      </div>
    </div>
  );
};

export default PricingCard;
