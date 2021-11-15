import WaitlistForm from '~/components/parts/WaitlistForm';

const Header: React.FC = () => {
  return (
    <header>
      <p className="mb-5  text-accent2" style={{ letterSpacing: 4 }}>
        BETA - LAUNCHING MID 2022
      </p>
      <h1 className="font-bold text-5xl mb-5 tracking-wider">
        Streamlined Project
        <br /> Management.
      </h1>
      <p className="text-xl max-w-2xl tracking-wide text-lightGray mb-5">
        Polen is a revolutionary new community-based take on open source project
        management.
      </p>
      <WaitlistForm />
    </header>
  );
};

export default Header;
