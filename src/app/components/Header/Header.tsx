import Menu from "../Menu/Menu";
import Title from "../Title/Title";

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand">
          <Title />
        </div>

        <div className="site-header__nav">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
