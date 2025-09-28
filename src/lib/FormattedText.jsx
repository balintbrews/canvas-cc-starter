// Copied from https://git.drupalcode.org/project/canvas/-/blob/1.x/ui/lib/astro-hydration/src/lib/FormattedText.tsx.

export default function FormattedText({ children, as = "div", ...props }) {
  const Component = as;
  return (
    <Component dangerouslySetInnerHTML={{ __html: children }} {...props} />
  );
}
