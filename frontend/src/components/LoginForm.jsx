import React from 'react';

const LoginForm = () => {
  return (
    <>
      <h2 className="text-[#111418] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Welcome back</h2>
      <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">Log in to your account to continue your healthy eating journey.</p>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Email"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637488] p-4 text-base font-normal leading-normal"
            defaultValue=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            type="password"
            placeholder="Password"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637488] p-4 text-base font-normal leading-normal"
            defaultValue=""
          />
        </label>
      </div>
      <p className="text-[#637488] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">Forgot password?</p>
      <div className="flex px-4 py-3">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#1978e5] text-white text-base font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Log In</span>
        </button>
      </div>
    </>
  );
};

export default LoginForm;
