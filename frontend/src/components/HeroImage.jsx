import React from 'react';

const HeroImage = () => {
  return (
    <div className="@container">
      <div className="@[480px]:px-4 @[480px]:py-3">
        <div
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-lg min-h-80"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvfMW5hOArSkBKGNgGT_U-r8oofl2gXoJNvbWq0Z2K4sQCXPn7puGOAhDc8eDd8SNj91uuIPfcZEM6qqlBX6MeGFLl_XbBNQxqtSVeL_SdPl_MRC6XkCn5ZDM1JF2jox2iriBWyiH-ANZLSHy2Dk9XU_lrhb77vkslkTtfgsWRYPyB-nVuXDk-dS6scJqs60jU7A_y_dYFj6n-q2SdBEDzt60G03X0NjSSi19dpbctfSWqgN5-X9ESKCJAlCjdlNdpBgVskIwnm-0")',
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroImage;
