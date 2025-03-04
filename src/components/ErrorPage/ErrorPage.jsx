export default function ErrorPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700 mt-4">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Go Home
        </a>
      </div>
    );
  }
  