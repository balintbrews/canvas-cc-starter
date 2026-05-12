import { cn } from 'drupal-canvas';
import type { ReactNode } from 'react';

export interface LogoProps {
  className?: string;
  linkToFrontPage?: boolean;
}

export interface LogoMarkProps {
  className?: string;
  primaryClassName?: string;
}

function LogoMark({ className, primaryClassName }: LogoMarkProps) {
  return (
    <svg
      className={cn('h-full w-auto shrink-0', className)}
      viewBox="0 0 34 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        className={cn('fill-text', primaryClassName)}
        x="3"
        y="4"
        width="8"
        height="32"
        rx="4"
      />
      <rect
        className={cn('fill-text', primaryClassName)}
        x="23"
        y="4"
        width="8"
        height="32"
        rx="4"
      />
      <rect className="fill-green" x="13" y="4" width="8" height="14" rx="4" />
      <rect className="fill-green" x="13" y="22" width="8" height="14" rx="4" />
    </svg>
  );
}

function LogoContent({ linkToFrontPage }: { linkToFrontPage: boolean }) {
  return (
    <>
      {linkToFrontPage && <span className="sr-only">Home</span>}
      <LogoMark />
      <span className="shrink-0 text-2xl leading-none font-bold text-text md:text-3xl">
        Humanify
      </span>
    </>
  );
}

function Logo({ className, linkToFrontPage = true }: LogoProps) {
  const classes = cn('inline-flex h-10 items-center gap-3 md:h-12', className);
  const content: ReactNode = <LogoContent linkToFrontPage={linkToFrontPage} />;

  if (linkToFrontPage) {
    return (
      <a className={classes} href="/page/home">
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}

export { Logo, LogoMark };
export default Logo;
