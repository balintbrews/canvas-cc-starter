import { useState } from "react";
import { cn } from "@/lib/utils";

const PricingTable = ({
  entryTierName,
  entryTierDescription,
  entryTierPriceMonthly,
  entryTierPriceAnnual,
  midTierName,
  midTierDescription,
  midTierPriceMonthly,
  midTierPriceAnnual,
  advancedTierName,
  advancedTierDescription,
  advancedTierPriceMonthly,
  advancedTierPriceAnnual,
  defaultTier,
  defaultIsAnnual,
  annualBadgeText,
  buttonLabel,
  buttonLink,
}) => {
  const [isAnnual, setIsAnnual] = useState(defaultIsAnnual);
  const [tier, setTier] = useState(defaultTier);

  const tierNames = {
    entry: entryTierName,
    mid: midTierName,
    advanced: advancedTierName,
  };
  const tierDescriptions = {
    entry: entryTierDescription,
    mid: midTierDescription,
    advanced: advancedTierDescription,
  };
  const tierPrices = {
    entry: {
      monthly: entryTierPriceMonthly,
      annual: entryTierPriceAnnual,
    },
    mid: {
      monthly: midTierPriceMonthly,
      annual: midTierPriceAnnual,
    },
    advanced: {
      monthly: advancedTierPriceMonthly,
      annual: advancedTierPriceAnnual,
    },
  };

  // Calculate current price based on selections.
  const getCurrentPrice = (tierName) => {
    return tierPrices[tierName][isAnnual ? "annual" : "monthly"];
  };

  return (
    <div className="max-w-2xl">
      {/* Billing toggle */}
      <div className="mb-8 flex items-center justify-center">
        <div className="w-24 text-right">
          <span
            className={cn(
              "text-subtext-0/75 font-medium",
              !isAnnual && "text-mauve",
            )}
          >
            Monthly
          </span>
        </div>

        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="bg-surface-1 relative mx-3 h-7 w-14 cursor-pointer rounded-full border-0 p-0.5"
        >
          <div
            className={cn(
              "border-flamingo bg-inverted-text absolute top-0.5 h-6 w-6 rounded-full border-2 transition-all duration-200",
              isAnnual ? "left-7" : "left-0.5",
            )}
          />
        </button>
        <div className="flex w-36 items-center">
          <span
            className={cn(
              "text-subtext-0/75 font-medium",
              isAnnual && "text-mauve",
            )}
          >
            Annual
          </span>
          <span
            className={cn(
              "bg-green text-inverted-text ml-2 whitespace-nowrap rounded-full px-2 py-1 text-xs font-medium leading-none transition-opacity duration-200",
              isAnnual ? "opacity-100" : "opacity-0",
            )}
          >
            {annualBadgeText}
          </span>
        </div>
      </div>

      {/* Pricing tiers */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        {["entry", "mid", "advanced"].map((planName) => {
          const isSelected = tier === planName;
          const price = getCurrentPrice(planName);

          return (
            <div
              key={planName}
              onClick={() => setTier(planName)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setTier(planName);
                }
              }}
              data-state={isSelected ? "selected" : undefined}
              role="button"
              tabIndex={0}
              className={cn(
                "group flex-1 cursor-pointer rounded-lg p-5 transition-all duration-200",
                "bg-surface-1",
                "data-[state=selected]:outline-mauve data-[state=selected]:outline-offset-3 data-[state=selected]:outline-2",
                "focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-offset-2",
              )}
            >
              <h3 className="text-text mb-3 text-lg font-bold">
                {tierNames[planName]}
              </h3>

              <div className="mb-4">
                <div className="text-text mb-1 text-2xl font-bold">
                  ${price.toLocaleString()}
                </div>
              </div>

              <div className="text-text text-sm leading-relaxed">
                {tierDescriptions[planName]}
              </div>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div>
        <a
          href={buttonLink}
          className={cn(
            "bg-mauve text-inverted-text hover:bg-mauve/75 inline-block w-full rounded-sm px-12 py-3 text-center text-sm font-medium transition",
            "focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-offset-2",
          )}
        >
          {buttonLabel.replace("{tier}", tierNames[tier])}
        </a>
      </div>
    </div>
  );
};

export default PricingTable;
