const FEATURE_CARDS = [
  {
    img: '/images/download.png',
    title: 'Discover Opportunities',
    desc: 'Explore new paths and find the right project for your skillset.',
  },
  {
    img: '/images/download.png',
    title: 'Learn From The Experts',
    desc: 'Get insights and tutorials from industry leaders and professionals.',
  },
  {
    img: '/images/download.png',
    title: 'Connect Communities',
    desc: 'Join groups to collaborate, share, and grow together.',
  },
];

const AboutUs = () => {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {FEATURE_CARDS.map(({ img, title, desc }) => (
        <div key={title} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
          <img src={img} alt={title} className="w-full h-80 object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;