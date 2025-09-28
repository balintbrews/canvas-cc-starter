const Navigation = () => {
  // Data fetching is supported using SWR and @drupal-api-client/json-api-client.
  // @see https://project.pages.drupalcode.org/canvas/code-components/data-fetching
  // @todo Figure out how this fits in the development workflow of this repo.
  const data = [
    { href: "#", title: "Services" },
    { href: "#", title: "Blog" },
    { href: "#", title: "About" },
    { href: "#", title: "Careers" },
  ];
  return (
    <div className="md:flex md:items-center md:gap-12">
      <nav aria-label="Global" className="hidden md:!block">
        <ul className="flex items-center gap-6 text-sm">
          {data.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className="text-text hover:text-text/75 transition-colors"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="bg-teal text-inverted-text hover:bg-teal/90 rounded-md px-5 py-2.5 text-sm font-medium shadow-sm transition-colors"
            href="#"
          >
            Login
          </a>

          <div className="hidden sm:!flex">
            <a
              className="bg-surface-0/75 text-text hover:text-text/75 rounded-md px-5 py-2.5 text-sm font-medium transition-colors"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="bg-surface-2 text-text rounded-sm p-2">
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
};

export default Navigation;
