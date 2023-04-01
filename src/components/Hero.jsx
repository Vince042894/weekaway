import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With WEEKAWAY</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            iusto velit nisi maxime qui maiores, ullam illo animi quisquam?
            Necessitatibus labore quis unde quasi nesciunt ex incidunt dolores
            eos et?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
