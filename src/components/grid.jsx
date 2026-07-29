import { cn } from 'drupal-canvas';

function Grid({ className, content, ...props }) {
  return (
    <div
      className={cn(
        'grid w-full grid-cols-1 overflow-hidden border-y border-line md:grid-cols-2 lg:grid-cols-3',
        '*:border-line [&>*+*]:border-t',
        'md:[&>*+*]:border-t-0 md:[&>*:not(:nth-child(2n+1))]:border-l md:[&>*:nth-child(n+3)]:border-t',
        'lg:[&>*+*]:border-t-0 lg:[&>*:not(:nth-child(2n+1))]:border-l-0 lg:[&>*:not(:nth-child(3n+1))]:border-l lg:[&>*:nth-child(n+3)]:border-t-0 lg:[&>*:nth-child(n+4)]:border-t',
        className,
      )}
      {...props}
    >
      {content}
    </div>
  );
}

export { Grid };
export default Grid;
