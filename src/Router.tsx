import React, { useState } from "react";
import { MenuItemType } from "@types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Commnunity from "@pages/Community";
import House from "@pages/House";
import Location from "@pages/Location";
import MainPage from "@pages/Main";
import Login from "@pages/Login";
import Navbar from "@components/Navbar";
import styled from "styled-components";
import Redirect from "@pages/Redirect";
import HouseDetail from "@pages/HouseDetail";

function Router() {
  const [menuState, setMenuState] = useState<MenuItemType>("duaily intro");
  return (
    <BrowserRouter>
      <ContentContainer>
        <Navbar clickedMenu={menuState} setClickedMenu={setMenuState} />
        <div style={{ marginTop: "160px" }}></div>
        <Routes>
          <Route
            path="/"
            element={<MainPage setClickedMenu={setMenuState} />}
          />
          <Route
            path="/house"
            element={<House setClickedMenu={setMenuState} />}
          />
          <Route path="/house/:id" element={<HouseDetail />} />
          <Route
            path="/location"
            element={<Location setClickedMenu={setMenuState} />}
          />
          <Route
            path="/community"
            element={<Commnunity setClickedMenu={setMenuState} />}
          />
          <Route path="/auth/kakao" element={<Redirect />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  );
}

export default Router;

const ContentContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
