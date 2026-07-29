import { cva } from 'class-variance-authority';
import { cn } from 'drupal-canvas';

const sectionVariants = cva('', {
  variants: {
    backgroundColor: {
      cream: 'bg-cream',
      paper: 'bg-paper',
      mist: 'bg-mist',
    },
  },
  defaultVariants: {
    backgroundColor: 'cream',
  },
});

function Section({ backgroundColor, className, content, ...props }) {
  return (
    <section
      className={cn(
        sectionVariants({
          backgroundColor,
        }),
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-8 px-5 py-10 sm:px-8 md:py-12 lg:px-16">
        {content}
      </div>
    </section>
  );
}

export { Section };
export default Section;
