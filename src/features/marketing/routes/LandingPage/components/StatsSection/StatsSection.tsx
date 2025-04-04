import adminDashboard from '@assets/adminDashboard.png';
import CTAButton from '@/features/marketing/components/CTAButton';

function StatsSection() {
  return (
    <section className="w-full bg-brand-softBeach py-16">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center px-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Text Section */}
        <div className="flex max-w-lg flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-4xl font-normal leading-snug tracking-wide text-brand-black md:text-5xl">
            Did you know...
          </h2>
          <p className="mt-4 text-lg font-medium leading-relaxed tracking-wide text-brand-boulder md:text-xl">
            Companies with robust employee recognition programs are known to have 31% lower
            voluntary turnover than those that don't (Anderson, 2018).
          </p>
          <div className="mt-9 flex w-full justify-center lg:justify-start">
            <CTAButton text="Get started" />
          </div>
        </div>
        {/* Image Section */}
        <div className="mt-12 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
          <img
            src={adminDashboard}
            alt="Admin dashboard showing analytics"
            className="mx-auto rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
