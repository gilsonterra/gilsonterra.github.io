import Menu from "../Menu/Menu";
import Title from "../Title/Title";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-8 sm:flex-row md:gap-4 justify-between items-center flex-wrap">
      <Title />
      <Menu />
    </header>
  );
};

export default Header;
