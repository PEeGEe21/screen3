import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useFormik } from 'formik';
import { signupValidate } from '../../../lib/validate';

const Signup = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState('');
  // redirect authenticated user to profile screen

  useEffect(() => {
    router.prefetch('/auth/login');
  }, []);

  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      password: '',
    },
    validate: signupValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
    } catch (err) {
      console.log(err);
    }
  };

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
              <div className="max-w-[500px] mx-auto flex items-center justify-center">
                <div className="w-full">
                  <div className="mb-10 text-left">
                    <h2 className="text-2xl font-semibold text-gray-700 capitalize text-center  mb-3">
                      Sign up to get started
                    </h2>
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-2 gap-3 w-full">
                      <div className="mb-4 ">
                        <label
                          className="text-[#807F88] font-medium mb-3 text-sm"
                          htmlFor="fname"
                        >
                          First name
                        </label>
                        <input
                          id="fname"
                          type="text"
                          className={`block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border ${
                            formik.errors.fname && formik.touched.fname
                              ? 'border-red-700 focus:border-red-700'
                              : 'border-gray-200 focus:border-gray-300'
                          }   rounded-lg focus:outline-none`}
                          name="fname"
                          autoComplete="off"
                          {...formik.getFieldProps('fname')}
                        />
                        {formik.errors.fname && formik.touched.fname ? (
                          <span className="text-xs text-rose-500 ">
                            {formik.errors.fname}
                          </span>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="mb-4">
                        <label
                          className="text-[#807F88] font-medium mb-3 text-sm"
                          htmlFor="lname"
                        >
                          Last name
                        </label>
                        <input
                          id="lname"
                          type="text"
                          className={`block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border ${
                            formik.errors.lname && formik.touched.lname
                              ? 'border-red-700 focus:border-red-700'
                              : 'border-gray-200 focus:border-gray-300'
                          }   rounded-lg focus:outline-none`}
                          name="lname"
                          autoComplete="off"
                          {...formik.getFieldProps('lname')}
                        />
                        {formik.errors.lname && formik.touched.lname ? (
                          <span className="text-xs text-rose-500">
                            {formik.errors.lname}
                          </span>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>

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
                          formik.errors.email && formik.touched.email
                            ? 'border-red-700 focus:border-red-700'
                            : 'border-gray-200 focus:border-gray-300'
                        }   rounded-lg focus:outline-none`}
                        name="email"
                        min="3"
                        autoComplete="off"
                        {...formik.getFieldProps('email')}
                        // onChange={(e) => setEmail(e.target.value)}
                      />
                      {formik.errors.email && formik.touched.email ? (
                        <span className="text-xs text-rose-500">
                          {formik.errors.email}
                        </span>
                      ) : (
                        <></>
                      )}
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
                          formik.errors.password && formik.touched.password
                            ? 'border-red-700 focus:border-red-700'
                            : 'border-gray-200 focus:border-gray-300'
                        }   rounded-lg focus:outline-none`}
                        name="password"
                        autoComplete="off"
                        {...formik.getFieldProps('password')}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                      {formik.errors.password && formik.touched.password ? (
                        <span className="text-xs text-rose-500">
                          {formik.errors.password}
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded-lg  bg-[#6457EF]  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full h-12"
                    >
                      Sign Up
                    </button>
                  </form>

                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-normal mx-4 mb-0 text-[#807F88]">
                      OR
                    </p>
                  </div>

                  {/* Social auth */}
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      className="flex items-center gap-4 justify-center px-7 py-3 text-[#344054] font-medium text-sm leading-snug  rounded-lg  bg-white  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full h-12 border border-[#D0D5DD]"
                    >
                      <Image
                        src={'/img/GoogleIcon.svg'}
                        alt={'google-icon'}
                        width={20}
                        height={20}
                        priority
                      />
                      Sign up with Google
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-4 justify-center px-7 py-3 text-[#344054] font-medium text-sm leading-snug  rounded-lg  bg-white  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full h-12 border border-[#D0D5DD]"
                    >
                      <Image
                        src={'/img/FacebookIcon.svg'}
                        alt={'facebook-icon'}
                        width={20}
                        height={20}
                        priority
                      />
                      Sign up with Facebook
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-4 justify-center px-7 py-3 text-[#344054] font-medium text-sm leading-snug  rounded-lg  bg-white  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full h-12 border border-[#D0D5DD]"
                    >
                      <Image
                        src={'/img/AppleIcon.svg'}
                        alt={'apple-icon'}
                        width={20}
                        height={20}
                        priority
                      />
                      Sign up with Apple
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-4 justify-center px-7 py-3 text-[#344054] font-medium text-sm leading-snug  rounded-lg  bg-white  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full h-12 border border-[#D0D5DD]"
                    >
                      <Image
                        src={'/img/GithubIcon.svg'}
                        alt={'github-icon'}
                        width={20}
                        height={20}
                        priority
                      />
                      Sign up with Github
                    </button>
                  </div>

                  <div className="flex items-center justify-center mt-3 text-xs text-[#807F88]">
                    <span className="">By signing up, you agree to our</span>
                    <Link
                      href="/signup"
                      className=" text-[#6457EF] ml-1 underline"
                    >
                      Terms of use &amp; service
                    </Link>
                  </div>
                  <div className="flex items-center justify-center mt-5">
                    <span className="text-[#807F88]">
                      Already have an account?{' '}
                    </span>
                    <Link href="/auth/login" className=" text-[#6457EF] ml-2">
                      Log in
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

export default Signup;
