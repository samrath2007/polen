import React from "react";

import HeadMeta from "~/components/partials/HeadMeta";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import WaitlistForm from "~/components/parts/WaitlistForm";
import Button from "~/components/ui/Button";

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

      <div className="p-[2rem] md:p-[4rem] mx-auto h-screen w-screen flex flex-col justify-between z-999">
        <Header />
        <Content />
        <Footer />
      </div>

      {/* LG+ Vector */}
      <img
        src="/images/corner_vector.svg"
        alt=""
        draggable={false}
        className="select-none absolute top-0 right-0 hidden lg:block lg:h-[40rem] lg:w-[40rem] xl:h-[50rem] xl:w-[50rem] 2xl:h-[60rem] 2xl:w-[60rem]"
      />

      {/* Normal Vector */}
      <img
        src="/images/purple_aura.svg"
        alt=""
        draggable={false}
        className="select-none absolute top-0 block lg:hidden w-screen h-[calc(100vh-50%)] z-0"
      />
    </div>
  );
};

const Content = () => {
  return (
    <div className="flex flex-col sm:mx-auto lg:m-0 text-center lg:text-left sm:w-[23rem] md:w-[34rem]">
      <p className="text-accent2 text-[0.65rem] md:text-[0.8rem] lg:text-[1rem] tracking-[0.4em] mb-[1rem] font-semibold">
        STREAMLINED, SOCIAL, SLEEK
      </p>

      <h1 className="font-bold text-[1.6rem] sm:text-[1.9rem] lg:text-[2.3rem] xl:text-[2.8rem] 2xl:text-[3.2rem] 3xl:text-[3.5rem] sm:leading-[2.5rem] lg:leading-[3.6rem] tracking-wider mb-[1.1rem] md:mb-[1.3rem] lg:mb-[1.5rem]">
        Community-based Project Management.
      </h1>

      <p className="text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem] tracking-wide lg:leading-[2rem] text-lightGray mb-[1.3rem] sm:mb-[1.7rem] lg:mb-[2rem]">
        Polen is a community-first project management tool for your open source
        ventures. Join the waitlist!
      </p>

      <div className="hidden sm:block">
        <WaitlistForm />
      </div>
      <div className="block sm:hidden w-full">
        <Button
          type="button"
          style={{
            background:
              "linear-gradient(97.89deg, #4C53FF 2.31%, #7B4CFF 100.81%)",
            width: "10rem",
            margin: "0 auto",
          }}
        >
          Get Early Access
        </Button>
      </div>
    </div>
  );
};

export default Home;
