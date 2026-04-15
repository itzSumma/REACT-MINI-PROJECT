import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center text-white max-w-lg w-full">
        
        <h1 className="text-7xl font-bold mb-4">404</h1>
        
        <h2 className="text-2xl font-semibold mb-2">
          Oops! Page Not Found
        </h2>
        
        <p className="text-white/80 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-lg bg-white text-purple-600 font-medium hover:scale-105 transition"
          >
            Go Back
          </button>

          <a
            href="/"
            className="px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-purple-600 transition"
          >
            Home
          </a>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;