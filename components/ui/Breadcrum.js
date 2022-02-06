import Link from "next/link";

export default function Breadcrum() {
  return (
    <div aria-label="navigation" id="Breadcrum" className="mb-4">
      <div className="sm:hidden">
        <Link
          href="/"
          className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-700"
        >
          <a>Back</a>
        </Link>
      </div>
      <div className="hidden items-center text-sm font-medium leading-5 sm:flex">
        <Link
          href="/"
          className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-700"
        >
          <a>Home</a>
        </Link>
        <svg
          className="mx-2 h-5 w-5 flex-shrink-0 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <Link
          href="/blog/"
          className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-700"
        >
          <a>Blog</a>
        </Link>
      </div>
    </div>
  );
}
