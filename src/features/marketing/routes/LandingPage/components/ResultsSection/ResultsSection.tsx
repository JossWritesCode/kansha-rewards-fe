import CTAButton from '@/features/marketing/components/CTAButton';
import ResultCard from './components/ResultCard';
import engagedTeamImage from './assets/engagedTeamMeeting.png';
import teamHighFive from './assets/teamHighFive.png';
import workStation from './assets/workStation.png';

function ResultsSection() {
  return (
    <section className="flex w-full flex-col items-center bg-brand-softBeach px-5 py-16">
      {/* Heading */}
      <div className="mb-12 w-full max-w-screen-2xl">
        <h2 className="text-center text-3xl font-normal text-brand-black md:text-left md:text-5xl">
          Results you can <span className="font-semibold italic text-brand-busyBerry">see</span>.
        </h2>
        <p className="mt-4 text-center text-lg font-medium text-brand-boulder md:text-left md:text-xl">
          Watch it work for you.
        </p>
      </div>

      {/* Images and Captions */}
      <div className="grid w-full max-w-screen-2xl grid-cols-1 gap-12 md:grid-cols-3">
        <ResultCard
          src={engagedTeamImage}
          alt="Four smiling employees have an engaging team meeting"
          text="Get employees in touch with your organization's values."
        />
        <ResultCard
          src={teamHighFive}
          alt="Four employees do a group high five"
          text="Reduce voluntary turnover."
        />
        <ResultCard
          src={workStation}
          alt="Desktop computer with a plant and a cup of coffee"
          text="Improve productivity, engagement, and innovation."
        />
      </div>

      {/* CTA Button */}
      <div className="mt-16 flex w-full max-w-screen-2xl justify-center">
        <CTAButton text="Get Started" />
      </div>
    </section>
  );
}

export default ResultsSection;
