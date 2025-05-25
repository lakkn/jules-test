import React from 'react';

const SocialLoginButtons = () => {
  return (
    <>
      <p className="text-[#637488] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">Or continue with</p>
      <div className="flex justify-center">
        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] grow"
          >
            <span className="truncate">Google</span>
          </button>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] grow"
          >
            <span className="truncate">Facebook</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLoginButtons;
