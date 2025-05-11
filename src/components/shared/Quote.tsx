import { cn } from "@/lib/utils";

interface QuoteProps {
  text: string;
  author?: string;
  className?: string;
}

export default function Quote({ text, author, className }: QuoteProps) {
  return (
    <div className={className}>
      <blockquote className="container-custom max-w-4xl mx-auto py-12 md:py-16">
        <p className="quote text-center mb-6 italic">"{text}"</p>
        {author && (
          <cite className="block text-center text-sm not-italic font-medium italic">
            — {author}
          </cite>
        )}
      </blockquote>
    </div>
  );
}
