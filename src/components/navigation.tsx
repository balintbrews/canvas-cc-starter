import { cn } from 'drupal-canvas';
import type { HTMLAttributes } from 'react';

interface MenuItem {
  title: string;
  url: string;
}

const menu: MenuItem[] = [
  { title: 'Home', url: '/page/home' },
  { title: 'Services', url: '/page/services' },
  { title: 'Blog', url: '/page/blog' },
  { title: 'About', url: '/page/about' },
  { title: 'Careers', url: '/page/careers' },
];

export interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  activeUrl?: string;
}

function Navigation({
  activeUrl = '/page/home',
  className,
  ...props
}: NavigationProps) {
  // Data fetching is supported using SWR and @drupal-api-client/json-api-client.
  // @see https://project.pages.drupalcode.org/canvas/code-components/data-fetching
  return (
    <div
      className={cn('flex items-center lg:gap-10 xl:gap-16', className)}
      {...props}
    >
      <nav aria-label="Global" className="hidden lg:block!">
        <ul className="flex items-center gap-5 text-sm font-medium xl:gap-8">
          {menu.map((item) => (
            <li key={item.title}>
              <a
                href={item.url}
                className={cn(
                  'inline-flex min-h-10 items-center border-b border-transparent text-text transition-colors hover:text-green dark:hover:text-green',
                  item.url === activeUrl &&
                    'border-green dark:border-green dark:text-cream',
                )}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-3">
        <div className="hidden lg:flex lg:items-center lg:gap-4 xl:gap-5">
          <a
            href="/page/login"
            className="inline-flex text-sm font-medium text-text transition-colors hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green dark:hover:text-green"
          >
            Login
          </a>

          <div className="flex">
            <a
              href="/page/register"
              className="inline-flex min-h-12 items-center rounded-md bg-surface-1 px-5 text-sm font-bold text-text shadow-sm transition hover:bg-surface-1/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green xl:px-6"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block lg:hidden">
          <button
            type="button"
            className="rounded-sm bg-surface-0 p-2 text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Navigation };
export default Navigation;
