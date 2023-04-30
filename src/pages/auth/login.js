import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState('');
  // redirect authenticated user to profile screen

  useEffect(() => {
    router.prefetch('/collector/dashboard');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   if (user) {
  //     router.push('/collector/dashboard');
  //   }
  // }, []);

  return (
    <>
      <section className="h-screen">
        <div className="  h-full">
          <div className="flex justify-between items-center h-full g-6 text-gray-800">
            <div
              className=" left w-full md:w-1/2 lg:w-2/5 py-5 md:py-5 md:mb-0  relative hidden md:block h-full bg-slate-400 "
              style={{
                backgroundImage: 'url(/img/auth-pic.svg)',
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* <div className="overlay"></div> */}
            </div>
            <div className=" w-full md:w-1/2 grow bg-white h-full overflow-y-auto px-4 md:px-[60px] lg:px-[80px] xl:px-[100px] pt-[30px] pb-7 scrollbar ">
              <div className="max-w-[500px] mx-auto flex items-center h-full justify-center">
                <div className="w-full">
                  <div className="mb-10 text-left">
                    <h2 className="text-2xl font-semibold text-gray-700 capitalize  mb-3">
                      Welcome back
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        className="text-[#807F88] font-medium mb-3 text-sm"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border ${
                          error
                            ? 'border-red-700 focus:border-red-700'
                            : 'border-gray-200 focus:border-gray-300'
                        }   rounded-md focus:outline-none`}
                        name="email"
                        min="3"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="text-[#807F88] font-medium mb-3 text-sm"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className={`block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border ${
                          error
                            ? 'border-red-700 focus:border-red-700'
                            : 'border-gray-200 focus:border-gray-300'
                        }   rounded-md focus:outline-none`}
                        name="password"
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded-lg  bg-[#6457EF]  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full h-12"
                      onClick={handleSubmit}
                    >
                      Log In
                    </button>
                  </form>

                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-normal mx-4 mb-0 text-[#807F88]">
                      OR
                    </p>
                  </div>

                  <div className="flex items-center justify-center mt-5">
                    <span className="">Don&apos;t have an account?</span>
                    <Link href="/auth/signup" className=" text-[#6457EF] ml-2">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
