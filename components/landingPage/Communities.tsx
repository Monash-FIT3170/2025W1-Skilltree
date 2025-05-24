const COMMUNITY_CARDS = [
  { img: 'https://via.placeholder.com/40', title: 'Community Name 1', posts: 32 },
  { img: 'https://via.placeholder.com/40', title: 'Community Name 2', posts: 18 },
  { img: 'https://via.placeholder.com/40', title: 'Community Name 3', posts: 24 },
];

const Communities = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {COMMUNITY_CARDS.map(({ img, title, posts }) => (
        <div key={title} className="flex items-center bg-white border border-gray-200 rounded-lg p-4">
          <img src={img} alt={title} className="w-10 h-10 rounded-full object-cover mr-4" />
          <div className="flex-1">
            <h4 className="font-medium">{title}</h4>
            <span className="text-gray-500 text-sm">{posts} Posts</span>
          </div>
          <button className="bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700">
            Join
          </button>
        </div>
      ))}
    </div>
  );
}

export default Communities;