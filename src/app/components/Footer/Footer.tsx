import Image from "next/image";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  return (
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center py-6">
      <CustomLink href="https://www.linkedin.com/in/gilsonterra/">
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Linkedin
      </CustomLink>
      <CustomLink href="https://codepen.io/gilsonterra/">CodePen</CustomLink>
    </footer>
  );
};

export default Footer;
