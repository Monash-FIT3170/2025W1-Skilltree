import React from "react";

const OurFooter = () => {
  return (
    <footer className="border-t border-black bg-white text-black px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Site name + Social Icons */}
        <div className="flex flex-col justify-between">
          <div className="text-xl font-semibold mb-4">Footer</div>

          <div className="flex space-x-4 text-gray-500 text-lg">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-linkedin-in" /></a>
            <a href="#"><i className="fab fa-youtube" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
          </div>
        </div>

        {/* 3 Link Columns */}
        {[1, 2, 3].map((col) => (
          <div key={col}>
            <div className="font-semibold mb-2">Topic</div>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default OurFooter;