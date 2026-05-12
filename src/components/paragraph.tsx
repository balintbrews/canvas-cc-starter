import { cva } from 'class-variance-authority';
import { cn, FormattedText } from 'drupal-canvas';
import type { HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';

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

type ParagraphVariant = NonNullable<
  VariantProps<typeof paragraphVariants>['variant']
>;

export interface ParagraphProps {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  text: string;
  variant?: ParagraphVariant;
}

function Paragraph({ className, text, variant }: ParagraphProps) {
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
