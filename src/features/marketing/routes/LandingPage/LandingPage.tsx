import Layout from '../../layout';

function LandingPage() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12 text-gray-900">
        <section className="w-full max-w-md space-y-6 text-center">
          <h1 className="text-3xl font-extrabold">
            Workplace recognition. <br /> Redefined.
          </h1>

          <p className="text-base text-gray-600">
            Kansha helps teams build a culture of praise, positivity, and performance.
          </p>

          <button className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800">
            Join today
          </button>
        </section>
      </main>
    </Layout>
  );
}

export default LandingPage;
