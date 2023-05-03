import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Signin from '../../../components/LoginComponent';
// import { providers, signIn, getSession, csrfToken } from 'next-auth/react';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useFormik } from 'formik';
import login_validate from '../../../lib/validate';

const Login = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState('');
  // redirect authenticated user to profile screen

  useEffect(() => {
    router.prefetch('/auth/signup');
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
    // const status = await signIn('credentials', {
    //   redirect: false,
    //   email: values.email,
    //   password: values.password,
    //   callbackUrl: '/',
    // });

    // if (status.ok) router.push(status.url);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // Google Handler function
  async function handleGoogleLogin() {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
  }

  // Github Handler function
  async function handleGithubLogin() {
    signIn('github', { callbackUrl: 'http://localhost:3000' });
  }

  // Github Facebook function
  async function handleFacebookLogin() {
    signIn('facebook', { callbackUrl: 'http://localhost:3000' });
  }

  // Github Apple function
  async function handleAppleLogin() {
    signIn('apple', { callbackUrl: 'http://localhost:3000' });
  }

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
                    <h2 className="text-2xl font-semibold text-gray-700 capitalize  mb-3 text-center">
                      Welcome back
                    </h2>
                  </div>
                  <form onSubmit={formik.handleSubmit}>
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
                            ? 'border-rose-700 focus:border-rose-700'
                            : 'border-gray-200 focus:border-gray-300'
                        }   rounded-md focus:outline-none`}
                        name="email"
                        autoComplete="off"
                        // onChange={formik.handleChange}
                        // value={formik.values.email}
                        {...formik.getFieldProps('email')}
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
                            ? 'border-rose-700 focus:border-rose-700'
                            : 'border-gray-200 focus:border-gray-300'
                        }   rounded-md focus:outline-none`}
                        name="password"
                        autoComplete="off"
                        // onChange={formik.handleChange}
                        // value={formik.values.password}
                        {...formik.getFieldProps('password')}
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
                      Log In
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
                      onClick={handleGoogleLogin}
                      className="flex items-center gap-4 justify-center px-7 py-3 text-[#344054] font-medium text-sm leading-snug  rounded-lg  bg-white  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full h-12 border border-[#D0D5DD]"
                    >
                      <Image
                        src={'/img/GoogleIcon.svg'}
                        alt={'google-icon'}
                        width={20}
                        height={20}
                        priority
                      />
                      continue with Google
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
                      continue with Facebook
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
                      continue with Apple
                    </button>
                    <button
                      type="button"
                      onClick={handleGithubLogin}
                      className="flex items-center gap-4 justify-center px-7 py-3 text-[#344054] font-medium text-sm leading-snug  rounded-lg  bg-white  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full h-12 border border-[#D0D5DD]"
                    >
                      <Image
                        src={'/img/GithubIcon.svg'}
                        alt={'github-icon'}
                        width={20}
                        height={20}
                        priority
                      />
                      continue with Github
                    </button>
                  </div>

                  {/* <Signin providers={providers}/> */}

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
