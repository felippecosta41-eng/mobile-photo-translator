interface QuoteBlockProps {
  children: React.ReactNode;
}

const QuoteBlock = ({ children }: QuoteBlockProps) => {
  return (
    <blockquote className="quote-block rounded-r-lg text-foreground/90">
      {children}
    </blockquote>
  );
};

export default QuoteBlock;
