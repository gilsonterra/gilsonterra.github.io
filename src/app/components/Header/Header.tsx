import Menu from "../Menu/Menu";
import Title from "../Title/Title";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center">
      <Title />
      <Menu />
    </header>
  );
};

export default Header;
