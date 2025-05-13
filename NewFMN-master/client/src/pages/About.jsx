import React from "react";

const About = () => {
  return (
    <div className="h-heightWithoutNavbar flex flex-col items-center justify-start p-5 lg:flex-row">
      <div className="grid h-full w-full place-content-center">
        <img
          src="./aboutUs.svg"
          alt=""
          className="w-[300px] sm:w-[400px]  md:w-[450px] lg:w-[600px]"
        />
      </div>
      <div className="flex h-full  w-full flex-col items-center justify-center">
        <div className="">
          <h1 className="relative w-fit text-2xl font-bold before:absolute before:top-[90%] before:h-[3px] before:w-[60%] before:bg-[#2563eb] lg:text-4xl lg:before:top-full">
            About Us:-
          </h1>
          <p className="mt-1 text-[15px] lg:mt-3">
          FindMyNotes is more than just a website; it's a community-driven
            initiative fueled by the passion for learning. Founded by a group of
            dedicated students, our platform is a testament to the belief that
            education should be a collective journey. Our team comprises tech
            enthusiasts, educators, and creative minds, all united in the
            mission to enhance the learning landscape
          </p>
        </div>
        <div className="">
          <h1 className="relative w-fit text-2xl font-bold before:absolute before:top-[90%] before:h-[3px] before:w-[60%] before:bg-[#2563eb] lg:text-4xl lg:before:top-full">
            Who We Are:-
          </h1>
          <p className="mt-1 text-[15px] lg:mt-3">
            FindMyNotes is more than just a website; it's a community-driven
            initiative fueled by the passion for learning. Founded by a group of
            dedicated students, our platform is a testament to the belief that
            education should be a collective journey. Our team comprises tech
            enthusiasts, educators, and creative minds, all united in the
            mission to enhance the learning landscape.
          </p>
        </div>
        <div className="">
          <h1 className="relative w-fit text-2xl font-bold before:absolute before:top-[90%] before:h-[3px] before:w-[60%] before:bg-[#2563eb] lg:text-4xl lg:before:top-full">
            Our Mission:-
          </h1>
          <p className="mt-1 text-[15px] lg:mt-3">
          FindMyNotes is more than just a website; it's a community-driven
            initiative fueled by the passion for learning. Founded by a group of
            dedicated students, our platform is a testament to the belief that
            education should be a collective journey. Our team comprises tech
            enthusiasts, educators, and creative minds, all united in the
            mission to enhance the learning landscape
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
