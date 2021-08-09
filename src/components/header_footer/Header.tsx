import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Header: FC = () => {
  let history = useHistory();

  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#2f2f2f",
          boxShadow: "none",
          padding: "10px 0px",
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div
              onClick={() => {
                history.push("/");
              }}
              style={{ width: "150px" }}
            >
              <div className="header_logo_venue">Dave's</div>
              <div className="header_logo_title">Flower shop</div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
