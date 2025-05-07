
import { cn } from "@/lib/utils";

interface QuoteProps {
  text: string;
  author?: string;
  className?: string;
}

export default function Quote({ text, author, className }: QuoteProps) {
  return (
    <blockquote className={cn("max-w-4xl mx-auto py-12 md:py-16", className)}>
      <p className="quote text-center mb-6">"{text}"</p>
      {author && (
        <cite className="block text-center text-sm not-italic font-medium">
          — {author}
        </cite>
      )}
    </blockquote>
  );
}
