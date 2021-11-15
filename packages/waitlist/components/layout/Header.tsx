import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header>
      <Image
        src="/images/polen_white_text.png"
        quality={90}
        width={83}
        height={33.31}
        layout="fixed"
        alt="Logo"
      />
    </header>
  );
};

export default Header;
