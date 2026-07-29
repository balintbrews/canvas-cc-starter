import { cn } from 'drupal-canvas';

function Heading({ className, text, ...props }) {
  return (
    <h2
      className={cn(
        'max-w-5xl font-serif text-3xl leading-tight font-normal text-balance text-text',
        className,
      )}
      {...props}
    >
      {text}
    </h2>
  );
}

export { Heading };
export default Heading;
