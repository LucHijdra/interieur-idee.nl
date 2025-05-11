import { cn } from "@/lib/utils";

interface ImageQuoteProps {
  className?: string;
}

export default function ImageQuote({ className }: ImageQuoteProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-offwhite", className)}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="/public/lovable-uploads/Afbeelding3.png"
            alt="Interieur hal met witte muren"
            className="w-full h-[400px] object-cover"
          />
          <img
            src="/public/lovable-uploads/Afbeelding4.png"
            alt="Trap met fotolijsten"
            className="w-full h-[400px] object-cover"
          />
          <img
            src="/public/lovable-uploads/Afbeelding5.png"
            alt="Moderne keuken"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <blockquote className="font-mono text-lg md:text-xl italic">
            "Speciaal op maat gemaakte onderdelen zorgen dat lijnen doorlopen waardoor er meer samenhang is meer rust ontstaat."
          </blockquote>
          <p className="mt-6 text-sm text-gray-600 italic">
            fotografie: Barbra Verbij
          </p>
        </div>
      </div>
    </section>
  );
}
