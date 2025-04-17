import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOption = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <h2 className="text-2xl">Get Our Membership</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.planName} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
