import Image from "next/image";

const COMMUNITY_CARDS = [
  { img: "/images/community1.jpg", title: "Community Name 1", posts: 32 },
  { img: "/images/community1.jpg", title: "Community Name 2", posts: 18 },
  { img: "/images/community1.jpg", title: "Community Name 3", posts: 24 },
];

const Communities = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {COMMUNITY_CARDS.map(({ img, title, posts }) => (
        <div
          key={title}
          className="flex items-center bg-white border border-gray-200 rounded-lg p-4"
        >
          <Image
            height={40}
            width={40}
            src={img}
            alt={title}
            className="w-10 h-10 rounded-full object-cover mr-4"
          />
          <div className="flex-1">
            <h4 className="font-medium">{title}</h4>
            <span className="text-gray-500 text-sm">{posts} Posts</span>
          </div>
          <button
            className="bg-[#0A1128] text-white font-semibold px-6 py-2 rounded-md 
             shadow-md transition-all duration-300 ease-in-out 
             hover:bg-[#0c1533] hover:scale-105 hover:shadow-lg"
          >
            Join
          </button>
        </div>
      ))}
    </div>
  );
};

export default Communities;
