import FormattedText from "@/lib/FormattedText";

const Paragraph = ({ text }) => {
  return (
    <FormattedText
      as="p"
      className="mx-auto max-w-2xl text-center leading-relaxed text-balance text-text"
    >
      {text}
    </FormattedText>
  );
};

export default Paragraph;
