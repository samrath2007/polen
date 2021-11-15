import React from "react";

import HeadMeta from "~/components/partials/HeadMeta";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import WaitlistForm from "~/components/parts/WaitlistForm";

const Home: React.FC = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <HeadMeta
        title="Polen ━ Meet an all-new take on open-source task management, powered by your community."
        description=""
        keywords=""
        image=""
        url=""
      />

      <div className="md:p-[4rem] mx-auto h-screen w-screen flex flex-col justify-between">
        <Header />
        <Content />
        <Footer />
      </div>

      {/* Right */}
      <img
        src="/images/corner_vector.svg"
        alt=""
        className="absolute top-0 right-0 hidden lg:block lg:h-[40rem] lg:w-[40rem] xl:h-[50rem] xl:w-[50rem] 2xl:h-[60rem] 2xl:w-[60rem]"
      />
    </div>
  );
};

const Content = () => {
  return (
    <div className="flex flex-col md:w-[80%] md:mx-auto lg:m-0 lg:w-[34rem] text-center lg:text-left">
      <p className="text-accent2 text-sm md:text-md lg:text-lg xl:text-xl tracking-[0.4em] mb-[1rem]">
        STREAMLINED, SOCIAL, SLEEK
      </p>

      <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl lg:leading-[3.6rem] tracking-wider mb-[0.6rem] md:mb-[1rem] lg:mb-[1.4rem]">
        Community-based Project Management.
      </h1>

      <p className="text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] tracking-wide leading-[2rem] text-lightGray mb-[0.9rem] md:mb-[1.3rem] lg:mb-[2rem] font-semibold">
        Polen is a community-first project management tool for your open source
        ventures. Join the waitlist!
      </p>

      <WaitlistForm />
    </div>
  );
};

export default Home;
