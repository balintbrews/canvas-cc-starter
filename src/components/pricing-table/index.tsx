import { useState } from 'react';
import {
  buildTierDescriptions,
  buildTierNames,
  buildTierPrices,
  getCurrentPrice,
  TIER_NAMES,
} from '@/lib/pricing-utils';
import { cn } from 'drupal-canvas';
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';
import type { TierName } from '@/lib/pricing-utils';

export interface PricingTableProps extends Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
> {
  advancedTierDescription: string;
  advancedTierIconNameFromLucide: string;
  advancedTierName: string;
  advancedTierPriceAnnual: number;
  advancedTierPriceMonthly: number;
  annualBadgeText: string;
  annualSelectedByDefault?: boolean;
  buttonLabel: string;
  buttonLink: string;
  defaultTier: TierName;
  entryTierDescription: string;
  entryTierIconNameFromLucide: string;
  entryTierName: string;
  entryTierPriceAnnual: number;
  entryTierPriceMonthly: number;
  intro?: ReactNode;
  midTierDescription: string;
  midTierIconNameFromLucide: string;
  midTierName: string;
  midTierPriceAnnual: number;
  midTierPriceMonthly: number;
}

const getIconMaskStyle = (iconName: string): CSSProperties => ({
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
}: PricingTableProps) {
  const [isAnnual, setIsAnnual] = useState(annualSelectedByDefault ?? false);
  const tier = defaultTier;

  const tierNames = buildTierNames({
    entryTierName,
    midTierName,
    advancedTierName,
  });
  const tierDescriptions = buildTierDescriptions({
    entryTierDescription,
    midTierDescription,
    advancedTierDescription,
  });
  const tierIcons: Record<TierName, string> = {
    entry: entryTierIconNameFromLucide,
    mid: midTierIconNameFromLucide,
    advanced: advancedTierIconNameFromLucide,
  };
  const tierPrices = buildTierPrices({
    entryTierPriceMonthly,
    entryTierPriceAnnual,
    midTierPriceMonthly,
    midTierPriceAnnual,
    advancedTierPriceMonthly,
    advancedTierPriceAnnual,
  });

  return (
    <div className={cn('w-full', className)} {...props}>
      {intro && (
        <div className="mx-auto mb-10 w-full max-w-6xl border-y border-line py-8 md:py-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center [&>*]:max-w-3xl">
            {intro}
          </div>
        </div>
      )}

      {/* Billing toggle */}
      <div className="mb-6 flex items-center justify-center">
        <div className="w-24 text-right text-sm">
          <span
            className={cn(
              'font-medium text-subtext-0',
              !isAnnual && 'text-text',
            )}
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
            className={cn(
              'font-medium text-subtext-0',
              isAnnual && 'text-text',
            )}
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
        {TIER_NAMES.map((planName) => {
          const isSelected = tier === planName;
          const price = getCurrentPrice({
            tierPrices,
            tierName: planName,
            isAnnual,
          });

          return (
            <div
              key={planName}
              data-state={isSelected ? 'selected' : undefined}
              className={cn(
                'relative flex flex-col rounded-xl border border-line bg-paper p-6 transition-colors',
                'data-[state=selected]:border-green data-[state=selected]:shadow-sm',
              )}
            >
              <div className="mb-5 flex min-h-6 justify-center">
                {planName === 'mid' && (
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
                    style={getIconMaskStyle(tierIcons[planName])}
                  />
                </div>
                <div>
                  <h3 className="text-xl leading-6 font-bold text-text">
                    {tierNames[planName]}
                  </h3>
                  <div className="mt-4 font-serif text-4xl leading-none font-normal text-text">
                    ${price.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="mb-5 min-h-12 text-sm leading-6 text-subtext-0">
                {tierDescriptions[planName]}
              </div>

              <a
                href={buttonLink}
                className={cn(
                  'mt-auto inline-flex min-h-11 items-center justify-center rounded-md border border-green px-5 text-center text-base font-medium text-green transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green',
                  isSelected && 'bg-green text-inverted-text hover:bg-green/90',
                  !isSelected && 'hover:bg-surface-0',
                )}
              >
                {buttonLabel.replace('{tier}', tierNames[planName])}
              </a>

              <span className="sr-only">
                {isSelected ? 'Selected plan: ' : 'Plan: '}
                {tierNames[planName]}
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
