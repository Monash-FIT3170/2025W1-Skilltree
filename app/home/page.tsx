'use client';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Main content */}
            <div className="ml-[60px] min-h-screen flex flex-col px-6 py-8">
                {/* Communities & Events */}
                <div className="w-full">
                    {/* Subscribed Communities */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">Subscribed communities:</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
                            <div className="bg-gray-200 rounded-lg p-8 text-center text-gray-700 shadow hover:-translate-y-1 hover:shadow-lg transition duration-200 cursor-pointer"></div>
                            <div className="bg-gray-200 rounded-lg p-8 text-center text-gray-700 shadow hover:-translate-y-1 hover:shadow-lg transition duration-200 cursor-pointer"></div>
                            <div className="bg-gray-200 rounded-lg p-8 text-center text-gray-700 shadow hover:-translate-y-1 hover:shadow-lg transition duration-200 cursor-pointer"></div>
                        </div>
                    </div>
                    {/* Recent Events */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">Recent events:</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="bg-gray-200 rounded-lg p-8 text-center text-gray-700 shadow hover:-translate-y-1 hover:shadow-lg transition duration-200 cursor-pointer"></div>
                            <div className="bg-gray-200 rounded-lg p-8 text-center text-gray-700 shadow hover:-translate-y-1 hover:shadow-lg transition duration-200 cursor-pointer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
