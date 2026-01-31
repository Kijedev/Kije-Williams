import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="bg-gradient-to-br from-black via-[#111] to-black min-h-screen flex flex-col items-center justify-center text-center px-4 font-poppins">
      <h1 className="lg:text-5xl text-2xl mb-4 text-white max-w-4xl">Oops! You don go enter where i no know o 😂 </h1>
      <Link
        to="/"
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
