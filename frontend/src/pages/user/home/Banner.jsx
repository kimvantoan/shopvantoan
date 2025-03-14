import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col bg-gray-100 md:flex-row">
      <div className="flex-1">
        <img
          src="/Paste image.png"
          alt="Stylish living room"
          className="w-full h-auto "
        />
      </div>
      <div className="flex-1 flex flex-col justify-center p-4">
        <h2 className="text-blue-400 font-bold text-xl mb-2">
          SALE UP TO 35% OFF
        </h2>
        <h3 className="text-3xl font-semibold mb-2">
          HUNDREDS of New lower prices!
        </h3>
        <p className="text-muted-foreground mb-4">
          It's more affordable than ever to give every room in your home a
          stylish makeover.
        </p>
      </div>
    </div>
  );
};

export default Banner;
