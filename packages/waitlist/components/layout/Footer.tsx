import React from "react";

import UilTwitter from "@iconscout/react-unicons/icons/uil-twitter-alt";
import UilGithub from "@iconscout/react-unicons/icons/uil-github-alt";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center gap-2">
      <Social
        Icon={UilGithub}
        href="https://github.com/polenhq"
        title="Github"
      />

      <Social
        Icon={UilTwitter}
        href="https://twitter.com/polenhq"
        title="Twitter"
      />

      <Social
        Icon={UilInstagram}
        href="https://instagram.com/polenhq"
        title="Instagram"
      />
    </footer>
  );
};

const Social = ({ Icon, href, title }) => {
  return (
    <a href={href} title={title}>
      <Icon className="text-white hover:opacity-[0.6]" size="25" />
    </a>
  );
};

export default Footer;
