import React from 'react';
import Image from 'next/image';

import HeadMeta from '~/components/partials/HeadMeta';
import Header from '~/components/layout/Header';
import Footer from '~/components/layout/Footer';

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
      <div className="mx-auto flex flex-col justify-center items-center h-screen w-screen">
        <div className="flex h-5/6 justify-between flex-col w-4/5">
          <Image
            src="/images/polen_white_text.png"
            quality={90}
            width={83}
            height={33.31}
            layout="fixed"
            alt="Logo"
          />
          <Header />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
