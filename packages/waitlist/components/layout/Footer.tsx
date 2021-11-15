import React from "react";
import { UilGithub } from "../icons/UilGithub";
import { UilInstagram } from "../icons/UilInstagram";
import { UilTwitter } from "../icons/UilTwitter";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center gap-[1rem]">
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
    <a href={href} title={title} target="_blank">
      <Icon className="fill-[#fff] hover:opacity-[0.6] h-[1.5rem] w-[1.5rem]" />
    </a>
  );
};

export default Footer;
