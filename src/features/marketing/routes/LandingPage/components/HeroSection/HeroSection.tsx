import heroImage from '@assets/heroImage.png';

function HeroSection() {
  return (
    <section className="w-full md:bg-brand-softBeach">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center px-5 py-10 text-center md:flex-row md:items-end md:justify-between md:py-24 md:text-left">
        <div className="flex max-w-3xl flex-col items-center md:items-start">
          <h2 className="text-3xl leading-snug tracking-wide text-brand-black md:text-4xl lg:text-6xl">
            Workplace recognition.
          </h2>

          <h3 className="mt-2 text-5xl font-light leading-none text-brand-primary md:text-7xl lg:text-8xl">
            Redefined.
          </h3>

          <p className="mt-6 text-lg leading-relaxed tracking-wider text-brand-boulder">
            Making it easy to recognize your teams with rewards and personalized messages.
          </p>

          <button className="mt-9 flex h-11 w-48 items-center justify-center rounded-lg bg-brand-busyBerry px-6 py-3 text-xl tracking-wider text-brand-white transition hover:bg-brand-busyBerryDark hover:shadow-md">
            Join today
          </button>
        </div>
        <img
          src={heroImage}
          alt="Happy team celebrating"
          className="mx-auto mt-10 h-[400px] w-full rounded-md object-cover sm:w-[80%] md:mt-0 md:h-[440px] md:w-[48%]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
