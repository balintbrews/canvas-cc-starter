const Grid = ({ content }) => {
  return (
    <div className="min-w-sm grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
      {content}
    </div>
  );
};

export default Grid;
