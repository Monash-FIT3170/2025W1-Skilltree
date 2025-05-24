import SignInButton from "./buttons/SignInButton";

const Hero = () => {
  return (
    <section className="pb-16 text-center container mx-auto px-6">
      {/* Hero Banner */}
      <div className="w-full h-96 mb-10">
        <img
          src="/images/herobanner.jpg"
          alt="Hero Banner"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Text content below the image */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        An app for your creativity
      </h1>
      <p className="text-gray-600 mb-6 text-lg max-w-xl mx-auto">
        Everything you need to spark your imagination and connect with like-minded people.
      </p>
      <SignInButton label="Get Started" />
    </section>
  );
};


export default Hero;
