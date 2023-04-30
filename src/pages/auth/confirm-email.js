import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ConfirmEmail = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

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

  const confirmedEmail = false;

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
                {!confirmedEmail ? (
                  <>
                    <div className="w-full">
                      <div className="mb-10 text-center">
                        <h2 className="text-2xl font-semibold text-gray-700 capitalize  mb-3">
                          Confirm your mail
                        </h2>

                        <p className="mt-3 text-gray-500 ">
                          We sent a mail to{' '}
                          <span className="font-semibold text-[#0B0A1D]">
                            zabubu@gmail.com
                          </span>
                        </p>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <button
                          type="submit"
                          className="flex items-center justify-center gap-3 px-7 py-3 text-white font-medium text-base leading-snug rounded-lg  bg-[#6457EF]  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full h-12"
                          onClick={handleSubmit}
                        >
                          <span>
                            <Image
                              src={'/img/gmailicon.svg'}
                              priority
                              width={25}
                              height={25}
                              alt={`Gmail Icon`}
                            />
                          </span>
                          Open gmail
                        </button>
                      </form>

                      <div className="flex items-center justify-center mt-5">
                        <span className="text-[#807F88]">
                          You can resend mail in 0:55
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <SuccessSignUp />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function SuccessSignUp() {
  return (
    <>
      <div className="w-full">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 capitalize  mb-3">
            Success
          </h2>

          <p className="mt-3 text-gray-500 ">You can start exploring Screen3</p>
        </div>
        <Link
          href="/"
          className="flex items-center justify-center gap-3 px-7 py-3 text-white font-medium text-base leading-snug rounded-lg  bg-[#6457EF]  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full h-12"
        >
          Explore Screen3
        </Link>
      </div>
    </>
  );
}

export default ConfirmEmail;
