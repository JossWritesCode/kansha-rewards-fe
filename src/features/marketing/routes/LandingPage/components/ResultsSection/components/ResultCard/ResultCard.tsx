function ResultCard({ src, alt, text }: { src: string; alt: string; text: string }) {
  return (
    <div className="flex flex-col items-center text-center md:items-start">
      <img src={src} alt={alt} className="h-64 w-64 rounded-md object-cover md:h-80 md:w-80" />
      <p className="mt-8 text-base text-brand-black md:text-lg">{text}</p>
    </div>
  );
}

export default ResultCard;
