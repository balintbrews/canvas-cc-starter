import { hasEmptySlotPlaceholder } from '@/lib/types';
import { cn, FormattedText } from 'drupal-canvas';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

function LinkedInLogoIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-4.5 fill-current" aria-hidden="true">
      <path d="M28.778 1.004H3.191a2.185 2.185 0 0 0-2.186 2.159v25.672a2.186 2.186 0 0 0 2.186 2.161h25.612c1.2 0 2.175-.963 2.194-2.159V3.165a2.195 2.195 0 0 0-2.195-2.161h-.029.001zM9.9 26.562H5.446V12.251H9.9zM7.674 10.293a2.579 2.579 0 1 1 2.579-2.58v.004a2.577 2.577 0 0 1-2.577 2.577h-.003zm18.882 16.269h-4.441v-6.959c0-1.66-.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441V12.252h4.266v1.951h.058a4.686 4.686 0 0 1 4.22-2.312h-.009c4.5 0 5.332 2.962 5.332 6.817v7.855z" />
    </svg>
  );
}

function XLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 fill-current" aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="h-5 fill-none stroke-current"
      aria-hidden="true"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect width={20} height={16} x={2} y={4} rx={2} />
    </svg>
  );
}

interface SocialLinkProps {
  children: ReactNode;
  label: string;
  url: string;
}

function SocialLink({ children, label, url }: SocialLinkProps) {
  return (
    <a
      href={url}
      className="inline-flex size-10 items-center justify-center rounded-full border border-inverted-text/30 text-inverted-text transition hover:border-green hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export interface FooterProps extends Omit<
  ComponentPropsWithoutRef<'footer'>,
  'children'
> {
  branding?: ReactNode;
  copyrightNotice: string;
  emailUrl?: string;
  linkedInUrl?: string;
  xUrl?: string;
}

function Footer({
  branding,
  className,
  copyrightNotice,
  emailUrl,
  linkedInUrl,
  xUrl,
  ...props
}: FooterProps) {
  return (
    <footer className={cn('bg-navy text-inverted-text', className)} {...props}>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-16">
        <div className="flex flex-col gap-3">
          <div
            className={cn(
              'h-10 shrink-0 items-center justify-start',
              hasEmptySlotPlaceholder(branding) && 'min-w-32',
            )}
          >
            {branding}
          </div>
          <FormattedText
            as="div"
            className="text-xs leading-5 text-inverted-text/65 md:text-sm"
          >
            {copyrightNotice}
          </FormattedText>
        </div>

        {(linkedInUrl || xUrl || emailUrl) && (
          <div className="flex gap-4 md:justify-end">
            {linkedInUrl && (
              <SocialLink label="LinkedIn" url={linkedInUrl}>
                <LinkedInLogoIcon />
              </SocialLink>
            )}
            {xUrl && (
              <SocialLink label="X" url={xUrl}>
                <XLogoIcon />
              </SocialLink>
            )}
            {emailUrl && (
              <SocialLink label="Email" url={emailUrl}>
                <MailIcon />
              </SocialLink>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}

export { Footer };
export default Footer;
