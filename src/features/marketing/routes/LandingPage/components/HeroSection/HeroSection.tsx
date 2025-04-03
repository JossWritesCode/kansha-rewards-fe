import heroImage from '@assets/heroImage.png';
function HeroSection() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center text-center">
      <h2 className="text-brand-black text-3xl font-normal leading-snug tracking-wide">
        Workplace recognition.
      </h2>

      <h3 className="text-brand-primary mt-2 text-5xl font-light leading-none">Redefined.</h3>

      <p className="text-brand-boulder mt-6 text-lg font-medium leading-relaxed tracking-wider">
        Making it easy to recognize your teams with rewards and personalized messages.
      </p>

      <button className="bg-brand-busyBerry text-brand-white hover:bg-brand-busyBerryDark mt-9 flex h-11 w-48 items-center justify-center rounded-lg px-6 py-3 text-xl tracking-wider transition hover:shadow-md">
        Join today
      </button>

      <img
        src={heroImage}
        alt="Happy team celebrating"
        className="mx-auto mt-10 h-[400px] w-full rounded-md object-cover sm:h-auto sm:w-[80%]"
      />
    </section>
  );
}

export default HeroSection;
