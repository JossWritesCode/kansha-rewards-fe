import heroImage from '@assets/heroImage.png';
import CTAButton from '@/features/marketing/components/CTAButton';

function HeroSection() {
  return (
    <section className="w-full md:bg-brand-softBeach">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center px-5 py-10 text-center md:flex-row md:items-center md:justify-between md:py-24 md:text-left">
        {/* Text Section */}
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
          <div className="mt-9">
            <CTAButton text="Join today" />
          </div>
        </div>
        {/* Image Section */}
        <img
          src={heroImage}
          alt="Happy team celebrating"
          className="mt-10 w-full rounded-md object-cover sm:w-[80%] md:mt-0 md:h-auto md:w-[48%]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
