import Image from "next/image";

const FEATURE_CARDS = [
  {
    img: "/images/aboutus1.jpg",
    title: "Discover Opportunities",
    desc: "Explore new paths and find the right project for your skillset.",
  },
  {
    img: "/images/aboutus2.jpg",
    title: "Learn From The Experts",
    desc: "Get insights and tutorials from industry leaders and professionals.",
  },
  {
    img: "/images/aboutus3.jpg",
    title: "Connect Communities",
    desc: "Join groups to collaborate, share, and grow together.",
  },
];

const AboutUs = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold mb-8 ">About Us</h2>
      <div className="text-4xl md:text-5xl font-bold mb-4 grid gap-8 md:grid-cols-3">
        {FEATURE_CARDS.map(({ img, title, desc }) => (
          <div
            key={title}
            className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
          >
            <Image
              height={300}
              width={400}
              src={img}
              alt={title}
              className="w-full h-80 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
