import FormattedText from "@/lib/FormattedText";

const Paragraph = ({ text }) => {
  return (
    <FormattedText
      as="p"
      className="text-text mx-auto max-w-2xl text-balance text-center leading-relaxed"
    >
      {text}
    </FormattedText>
  );
};

export default Paragraph;
