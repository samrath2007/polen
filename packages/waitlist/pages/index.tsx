import React from "react";

import HeadMeta from "~/components/partials/HeadMeta";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import WaitlistForm from "~/components/parts/WaitlistForm";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <HeadMeta
        title="Polen ━ Meet an all-new take on open-source task management, powered by your community."
        description=""
        keywords=""
        image=""
        url=""
      />

      <div className="md:p-[4rem] container mx-auto h-screen w-screen flex flex-col justify-between">
        <Header />
        <Content />
        <Footer />

        {/* Right */}
        {/* <div className=""></div> */}
      </div>
    </React.Fragment>
  );
};

const Content = () => {
  return (
    <div className="flex flex-col w-[34rem]">
      <p className="text-accent2 tracking-[0.4em] mb-[1rem]">
        STREAMLINED, SOCIAL, SLEEK
      </p>

      <h1 className="font-bold text-5xl leading-[3.6rem] tracking-wider mb-[1.4rem]">
        Community-based Project Management.
      </h1>

      <p className="text-[1.2rem] tracking-wide leading-[2rem] text-lightGray mb-[2rem] font-semibold">
        Polen is a community-first project management tool for your open source
        ventures. Join the waitlist!
      </p>

      <WaitlistForm />
    </div>
  );
};

export default Home;
