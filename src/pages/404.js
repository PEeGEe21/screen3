import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
  return (
    <div>
      <main className="relative h-screen overflow-y-auto bg-white">
        <div className="container relative z-10 flex items-center px-6 py-5 md:py-10 mx-auto md:px-12">
          <div className="container relative flex flex-col items-center justify-between px-6 mx-auto">
            {/* <div className="flex flex-col items-center justify-center w-full mb-16 space-x-12 md:flex-row md:mb-8">
              <h1 className="text-6xl font-thin text-center text-gray-800">
                GOT LOST ?
              </h1>
              <button className="w-32 px-3 py-2 text-2xl font-light uppercase transition duration-200 ease-in border-b border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none">
                Help Me
              </button>
            </div> */}
            <div className="relative  w-full mx-auto mt-6 md:mt-0 flex justify-center items-center">
              <div className="">
                <div>
                  <img src="/img/404.svg" className="w-full max-h-100 h-96 " />
                </div>
                <div className="text-center">
                  <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Page not found
                  </h1>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn&apos;t find the page you&apos;re looking
                    for.
                  </p>

                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                      href="/"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Go back home
                    </Link>
                    <Link
                      href="/"
                      className="text-sm font-semibold text-gray-900"
                    >
                      Contact support <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
