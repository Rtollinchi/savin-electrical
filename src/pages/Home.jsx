export default function Home() {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-lg text-white">
          <h1 className="text-5xl font-bold">Powering Your Home with Excellence</h1>
          <p className="mt-4 text-lg">Residential & Commercial Electrical Services</p>
          <a href="/contact" className="mt-6 inline-block bg-accent text-primary font-bold px-6 py-3 rounded-lg hover:scale-105 transition">
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
