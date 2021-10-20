import "./header.css";

const Header = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-items">
        <li className="navigation-item">
          <a href="#projects" className="navigation-link">
            Projeler
          </a>
        </li>
        {/* <li className="navigation-item">
          <a href="#contact" className="navigation-link">
            İletişim
          </a>
        </li> */}
        <li className="navigation-item">
          <a
            href="https://github.com/aylancOnur"
            target="_blank"
            className="navigation-link"
          >
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
