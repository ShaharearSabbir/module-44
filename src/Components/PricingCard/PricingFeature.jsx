import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingFeature = ({ feature }) => {
  return <p className="flex"> <CircleCheckBig className="mr-3"></CircleCheckBig> {feature}</p>;
};

export default PricingFeature;
