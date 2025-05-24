import SignInButton from "./buttons/SignInButton";

const HERO_IMAGES = [
    {
        img: '/images/download.png'
    },
    {
        img: '/images/download.png'
    },
    {
        img: '/images/download.png'
    },
];

const Hero = () => {
  return (
    <section className="pb-16 text-center container mx-auto px-6">
      <div className="flex flex-wrap justify-center pb-10">
        {HERO_IMAGES.map(({img}) => (
            <img src={img} className="w-1/3 max-w-sm object-cover rounded"/>
        ))}
      </div>
      <h1 className="text-4xl font-bold mb-4">An app for your creativity</h1>
      <p className="text-gray-600 mb-6">
        Everything you need to spark your imagination and connect with like-minded people.
      </p>
      <SignInButton label = "Get Started"/>
    </section>
  );
}

export default Hero;