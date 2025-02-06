import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import "./style.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="https://www.linkedin.com/in/gilsonterra" target="_blank">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Linkedin
          <ArrowUpRightIcon width={16} height={16} />
        </a>
        <a target="_blank" href="https://codepen.io/gilsonterra">
          CodePen
          <ArrowUpRightIcon width={16} height={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
