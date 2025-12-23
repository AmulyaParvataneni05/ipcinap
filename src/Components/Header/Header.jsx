import IPCLogo from '../../../Photos/IPCLOGO.png';
import "./Header.css";

const Header = () => {
  const toggleMenu = () => {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("show");
  };
  return (
    <div className="header1">
      <div className="subheader1">
        <a href="/">
          <img src={IPCLogo} alt="IPC Logo" className="logo" />
        </a>
        <h1 className="header">IPC Andhra Pradesh</h1>
      </div>
      <div className="nav-container">
        <span className="menu-icon" onClick={toggleMenu}>☰</span>
        <nav className="nav-links">
          <a className="direct-links" href="/ourministry">Our Ministry</a>
          <a className="direct-links" href="/locations">Locations</a>
          <a className="direct-links" href="/gallery">Gallery</a>
          <a className="direct-links" href="/contact">Contact Us</a>
          <a className="direct-links"href="https://www.youtube.com/@ipcapstate">Watch Live</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
