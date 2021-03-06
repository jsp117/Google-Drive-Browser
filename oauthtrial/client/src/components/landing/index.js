import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Home</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Welcome.</p>
          <Link className="max-w-xl pt-10 mx-auto text-xl text-blue-500" to={"/login"}>Click Here to Log In</Link>
        </div>
      </div>
    </div>
  )
}