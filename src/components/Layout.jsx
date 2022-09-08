import { Link } from "react-router-dom";
import { WrapperHeader, WrapperBody } from "./Layout.styled";

import ProfileIMG from "../images/default_perfil.png";
import BtnBack from "../images/button_back.png";

const Layout = ({ children, title, back }) => {
  return (
    <>
      <WrapperHeader>
        <div className="box-title">
          {back && (
            <Link className="back" to={back}>
              <img src={BtnBack} alt="back" />
            </Link>
          )}
          <div className="title">{title}</div>
        </div>
        <div className="box-profile">
          <img src={ProfileIMG} alt="profile" />
        </div>
      </WrapperHeader>
      <WrapperBody className="body">{children}</WrapperBody>
    </>
  );
};

export default Layout;
