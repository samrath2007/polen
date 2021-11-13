import React from 'react';
import Button from '../components/ui/Button';
import HeadMeta from '../partials/HeadMeta';

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
        <Button>This is just a random button lol</Button>
      </div>
    </React.Fragment>
  );
};

export default Home;
