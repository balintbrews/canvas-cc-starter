import { cn } from 'drupal-canvas';
import type { ReactNode } from 'react';

export interface LogoProps {
  className?: string;
  darkBackground?: boolean;
  linkToFrontPage?: boolean;
}

export interface LogoMarkProps {
  className?: string;
  darkBackground?: boolean;
}

function LogoMark({ className, darkBackground = false }: LogoMarkProps) {
  const primaryColor = darkBackground ? 'fill-inverted-text' : 'fill-text';

  return (
    <svg
      className={cn('h-full w-auto shrink-0', className)}
      viewBox="0 0 34 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect className={primaryColor} x="3" y="4" width="8" height="32" rx="4" />
      <rect
        className={primaryColor}
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

function LogoContent({
  darkBackground,
  linkToFrontPage,
}: {
  darkBackground: boolean;
  linkToFrontPage: boolean;
}) {
  const primaryColor = darkBackground ? 'text-inverted-text' : 'text-text';

  return (
    <>
      {linkToFrontPage && <span className="sr-only">Home</span>}
      <LogoMark darkBackground={darkBackground} />
      <span
        className={cn(
          'shrink-0 text-2xl leading-none font-bold md:text-3xl',
          primaryColor,
        )}
      >
        Humanify
      </span>
    </>
  );
}

function Logo({
  className,
  darkBackground = false,
  linkToFrontPage = true,
}: LogoProps) {
  const classes = cn('inline-flex h-10 items-center gap-3 md:h-12', className);
  const content: ReactNode = (
    <LogoContent
      darkBackground={darkBackground}
      linkToFrontPage={linkToFrontPage}
    />
  );

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
