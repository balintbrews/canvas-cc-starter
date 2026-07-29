import { cva } from 'class-variance-authority';
import { cn, FormattedText } from 'drupal-canvas';

const paragraphVariants = cva('max-w-5xl text-balance', {
  variants: {
    variant: {
      body: 'text-base leading-7 text-muted',
      eyebrow: 'text-base leading-6 font-semibold text-green',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

function Paragraph({ className, text, variant }) {
  return (
    <FormattedText
      as="div"
      className={cn(paragraphVariants({ variant }), className)}
    >
      {text}
    </FormattedText>
  );
}

export { Paragraph };
export default Paragraph;
