import { Link } from "react-router-dom";

import SmFacebook from "../../assets/logo_fb.png";
import SmTiktok from "../../assets/logo_tiktok.png";
import SmPinterest from "../../assets/logo_pinterest.png";
import SmLinkedin from "../../assets/logo_linkedin.png";
import SmTwitter from "../../assets/logo_twitter.png";
import SmInstagram from "../../assets/logo_instagram.png";

const socialLinks = [
  {
    id: 1,
    link: "",
    title: SmInstagram,
    alt: "Instagram",
  },
  {
    id: 2,
    link: "",
    title: SmFacebook,
    alt: "Facebook",
  },
  {
    id: 3,
    link: "",
    title: SmPinterest,
    alt: "Pinterest",
  },
  {
    id: 4,
    link: "",
    title: SmTwitter,
    alt: "Twitter",
  },
  {
    id: 5,
    link: "",
    title: SmTiktok,
    alt: "Tiktok",
  },
  {
    id: 6,
    link: "",
    title: SmLinkedin,
    alt: "LinkedIn",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center justify-start gap-x-2 mt-3">
      {socialLinks.map((link) => (
        <Link key={link.id} to={`${link.link}`} className="-m-1.5 p-1.5">
          <span className="sr-only">work {link.alt}</span>
          <img className="h-6 w-auto" src={link.title} alt={link.alt} />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
