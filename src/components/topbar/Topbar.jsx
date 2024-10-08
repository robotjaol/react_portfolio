import "./topbar.scss";
import { Person, Mail, LinkedIn, Email } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            robotjaol.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <a href="https://wa.me/081357473781">
              <span>+62 813 5747 3781</span>
            </a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:jonathanoktavianofrizzy@gmail.com">
              <span>jonathanoktavianofrizzy@gmail.com</span>
            </a>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a href="https://linkedin.com/in/jonathan-oktaviano/">
              <span>Jonathan Oktaviano Frizzy</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
