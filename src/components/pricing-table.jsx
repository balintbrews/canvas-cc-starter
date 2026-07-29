import { useState } from 'react';
import { cn } from 'drupal-canvas';

const getIconMaskStyle = (iconName) => ({
  maskImage: `url(https://esm.sh/lucide-static@0.544.0/icons/${iconName}.svg)`,
  maskPosition: 'center',
  maskRepeat: 'no-repeat',
  maskSize: 'contain',
  WebkitMaskImage: `url(https://esm.sh/lucide-static@0.544.0/icons/${iconName}.svg)`,
  WebkitMaskPosition: 'center',
  WebkitMaskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
});

function PricingTable({
  entryTierName,
  entryTierDescription,
  entryTierIconNameFromLucide,
  entryTierPriceMonthly,
  entryTierPriceAnnual,
  midTierName,
  midTierDescription,
  midTierIconNameFromLucide,
  midTierPriceMonthly,
  midTierPriceAnnual,
  advancedTierName,
  advancedTierDescription,
  advancedTierIconNameFromLucide,
  advancedTierPriceMonthly,
  advancedTierPriceAnnual,
  defaultTier,
  annualSelectedByDefault,
  annualBadgeText,
  buttonLabel,
  buttonLink,
  intro,
  className,
  ...props
}) {
  const [isAnnual, setIsAnnual] = useState(annualSelectedByDefault ?? false);
  const tiers = [
    {
      description: entryTierDescription,
      iconName: entryTierIconNameFromLucide,
      id: 'entry',
      name: entryTierName,
      priceAnnual: entryTierPriceAnnual,
      priceMonthly: entryTierPriceMonthly,
    },
    {
      description: midTierDescription,
      iconName: midTierIconNameFromLucide,
      id: 'mid',
      name: midTierName,
      priceAnnual: midTierPriceAnnual,
      priceMonthly: midTierPriceMonthly,
    },
    {
      description: advancedTierDescription,
      iconName: advancedTierIconNameFromLucide,
      id: 'advanced',
      name: advancedTierName,
      priceAnnual: advancedTierPriceAnnual,
      priceMonthly: advancedTierPriceMonthly,
    },
  ];

  return (
    <div className={cn('w-full', className)} {...props}>
      {intro && (
        <div className="mx-auto mb-10 w-full max-w-6xl border-y border-line py-8 md:py-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center *:max-w-3xl">
            {intro}
          </div>
        </div>
      )}

      {/* Billing toggle */}
      <div className="mb-6 flex items-center justify-center">
        <div className="w-24 text-right text-sm">
          <span
            className={cn('font-medium text-muted', !isAnnual && 'text-text')}
          >
            Monthly
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative mx-4 h-8 w-16 cursor-pointer rounded-full border-0 bg-green p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          aria-label="Toggle annual billing"
        >
          <div
            className={cn(
              'absolute top-1 size-6 rounded-full border border-green bg-paper transition-all duration-200',
              isAnnual ? 'left-9' : 'left-1',
            )}
          />
        </button>
        <div className="flex w-36 items-center text-sm">
          <span
            className={cn('font-medium text-muted', isAnnual && 'text-text')}
          >
            Annual
          </span>
          <span className="ml-3 rounded-full bg-surface-0 px-3 py-1 text-xs leading-none font-medium whitespace-nowrap text-green">
            {annualBadgeText}
          </span>
        </div>
      </div>

      {/* Pricing tiers */}
      <div className="grid gap-8 md:grid-cols-3">
        {tiers.map((tier) => {
          const isSelected = defaultTier === tier.id;
          const price = isAnnual ? tier.priceAnnual : tier.priceMonthly;

          return (
            <div
              key={tier.id}
              data-state={isSelected ? 'selected' : undefined}
              className={cn(
                'relative flex flex-col rounded-xl border border-line bg-paper p-6 shadow-sm transition-colors',
                'data-[state=selected]:border-green',
              )}
            >
              <div className="mb-5 flex min-h-6 justify-center">
                {tier.id === 'mid' && (
                  <div className="inline-flex h-5 items-center rounded-full bg-surface-0 px-3 text-xs leading-none font-bold tracking-wide text-green uppercase">
                    Most popular
                  </div>
                )}
              </div>

              <div className="mb-4 flex items-center gap-5">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-surface-0">
                  <span
                    aria-hidden="true"
                    className="size-9 bg-green"
                    style={getIconMaskStyle(tier.iconName)}
                  />
                </div>
                <div>
                  <h3 className="text-xl leading-6 font-bold text-text">
                    {tier.name}
                  </h3>
                  <div className="mt-4 font-serif text-4xl leading-none font-normal text-text">
                    ${price.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="mb-5 min-h-12 text-sm leading-6 text-muted">
                {tier.description}
              </div>

              <a
                href={buttonLink}
                className={cn(
                  'mt-auto inline-flex min-h-11 items-center justify-center rounded-md border border-green px-5 text-center text-base font-medium text-green transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green',
                  isSelected && 'bg-green text-inverted-text hover:bg-green/90',
                  !isSelected && 'hover:bg-surface-0',
                )}
              >
                {buttonLabel.replace('{tier}', tier.name)}
              </a>

              <span className="sr-only">
                {isSelected ? 'Selected plan: ' : 'Plan: '}
                {tier.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { PricingTable };
export default PricingTable;
