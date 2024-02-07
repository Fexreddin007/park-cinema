import React from "react";
import "./Header.css";
import Logo from "../../img/logo.png";
import Slash from "../../img/slash.png";
import { Link } from "react-router-dom";
import { Col, Container } from "reactstrap";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa6";
import { Dropdown, Space } from "antd";
function Header() {
  const items = [
    {
      key: "1",
      label: <Link>Park Cinema haqqinda</Link>,
    },
    {
      key: "2",
      label: <Link>Qaydalar və sərtlər</Link>,
    },
    {
      key: "3",
      label: <Link>Reklam təklifləri</Link>,
    },
    {
      key: "4",
      label: <Link>Əlaqə</Link>,
    },
  ];
  return (
    <div className="header position-relative">
      <Container>
        <div className="navbar">
          <nav>
            <div className="img_logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <ul className="d-md-none d-lg-flex">
              <li>
                <Link to="/kinoteatrlar">Kinoteatrlar</Link>
                <img src={Slash} alt="img" />
              </li>
              <li>
                <Link to="/imax">IMAX</Link>
                <img src={Slash} alt="img" />
              </li>
              <li>
                <Link to="/laser">LaseR</Link>
                <img src={Slash} alt="img" />
              </li>
              <li>
                <Link to="/vip">VIP</Link>
                <img src={Slash} alt="img" />
              </li>
              <li>
                <Link to="/aksiyalar">Aksiyalar</Link>
                <img src={Slash} alt="img" />
              </li>
              <li>
                <Link>
                  <Dropdown menu={{ items }}>
                    <Space>Haqqimizda</Space>
                  </Dropdown>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="link d-xs-none d-lg-flex">
            <ul>
              <li>
                <Link>AZ</Link>
                <span className="mx-3 text-white fs-5">/</span>
              </li>
              <li>
                <Link>RU</Link>
                <span className="mx-3 text-white fs-5">/</span>
              </li>
              <li>
                <Link>EN</Link>
                <span className="mx-3 text-white fs-5"></span>
              </li>
              <li>
                <Link>
                  <FaApple className="fs-2 mx-3" />
                </Link>
                <Link>
                  <DiAndroid className="fs-2" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
