import Layout from '../../layout';
import heroImage from '@assets/heroImage.png';
function LandingPage() {
  return (
    <Layout>
      <section className="flex w-full flex-col items-center bg-white text-center sm:mx-auto sm:mt-24 sm:max-w-6xl sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div className="sm:w-1/2">
          <h2 className="text-[32px] font-normal leading-tight text-gray-900">
            Workplace recognition.
          </h2>
          <h3 className="text-primary mb-4 mt-9 text-5xl font-light sm:mt-4 sm:text-6xl">
            Redefined.
          </h3>
          <p className="mx-auto max-w-md leading-relaxed text-gray-600 sm:mx-0">
            Making it easy to recognize your teams with rewards and personalized messages.
          </p>
          <button className="bg-primary hover:bg-primary-dark mt-6 rounded-md px-8 py-3 text-base font-medium text-white transition">
            Join today
          </button>
        </div>
        <img
          src={heroImage}
          alt="Team jumping in the snow"
          className="mt-10 w-[85%] object-cover sm:mt-0 sm:w-1/2 sm:max-w-sm"
        />
      </section>
    </Layout>
  );
}

export default LandingPage;
