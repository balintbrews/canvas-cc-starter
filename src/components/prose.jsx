import { FormattedText } from 'drupal-canvas';

const Component = ({ text = 'Prose' }) => {
  // @see `@plugin '@tailwindcss/typography'` in src/global.css.
  // (Global CSS tab in the Canvas code editor)
  return <FormattedText className="prose">{text}</FormattedText>;
};

export default Component;
