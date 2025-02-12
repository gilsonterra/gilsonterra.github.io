import Menu from "../Menu/Menu";
import Title from "../Title/Title";
import ThemeToggle from "../ToggleTheme/ToggleTheme";

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        padding: "60px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "5px",
        }}
      >
        <Title />
        <ThemeToggle />
      </div>

      <Menu />
    </header>
  );
};

export default Header;
