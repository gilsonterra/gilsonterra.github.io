import Menu from "../Menu/Menu";
import Title from "../Title/Title";

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        padding: "60px 0",
      }}
    >
      <Title />
      <Menu />
    </header>
  );
};

export default Header;
