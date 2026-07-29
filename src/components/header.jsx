import { cva } from 'class-variance-authority';
import { cn } from 'drupal-canvas';

const headerVariants = cva('', {
  variants: {
    backgroundColor: {
      cream: 'bg-cream',
      paper: 'bg-paper',
      mist: 'bg-mist',
      navy: 'dark bg-navy',
    },
  },
  defaultVariants: {
    backgroundColor: 'cream',
  },
});

function Header({
  backgroundColor,
  branding,
  className,
  navigation,
  ...props
}) {
  return (
    <header
      className={cn(
        headerVariants({
          backgroundColor,
        }),
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-x-8 px-5 py-4 sm:px-8 lg:px-16">
        <div className="h-10 min-w-32 shrink-0 items-center justify-start md:h-12">
          {branding}
        </div>
        <div className="flex min-h-12 grow items-center justify-end">
          {navigation}
        </div>
      </div>
    </header>
  );
}

export { Header };
export default Header;
