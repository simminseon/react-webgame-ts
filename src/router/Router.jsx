import React from "react";
import { useRoutes, Link } from "react-router-dom";
import styled from "styled-components";
import GuGuDan from "../pages/gugudan/GuGuDan";
import Calculator from "../pages/calculator/Calculator";
import Home from "../pages/home/Home";
import WordRelay from "../pages/wordRelay/WordRelay";
import NumberBaseball from "../pages/numberBaseball/NumberBaseball";
import ResponseCheck from "../pages/responseCheck/ResponseCheck";
import Lotto from "../pages/lotto/Lotto";
import RSP from "../pages/rsp/RSP";
import Game from "../pages/tictactoe/Tictactoe";
import MineSearch from "../pages/mineSearch/MineSearch";
import RPG from "../pages/rpg/RPG";

function Router() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "gugudan", element: <GuGuDan /> },
    { path: "wordRelay", element: <WordRelay /> },
    { path: "calculator", element: <Calculator /> },
    { path: "numberBaseball", element: <NumberBaseball /> },
    { path: "responseCheck", element: <ResponseCheck /> },
    { path: "lotto", element: <Lotto /> },
    { path: "rsp", element: <RSP /> },
    { path: "tictactoe", element: <Game /> },
    { path: "rpg", element: <RPG /> },
    { path: "mineSearch", element: <MineSearch /> },
  ]);

  return (
    <>
      <NavListStyle>
        <NavItemStyle>
          <Link to="/">홈</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/gugudan">구구단</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/wordRelay">끝말잇기</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/calculator">계산기</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/numberBaseball">숫자야구</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/responseCheck">반응속도</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/lotto">로또 추첨기</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/rsp">가위바위보</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/tictactoe">틱택토</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/rpg">RPG</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/mineSearch">지뢰찾기</Link>
        </NavItemStyle>
      </NavListStyle>
      {element}
    </>
  );
}

const NavListStyle = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 20px;
`;

const NavItemStyle = styled.li`
  margin-right: 10px;

  a {
    font-weight: bold;
    font-size: 16px;
    color: #222;
    text-decoration: none;
  }
`;

export default Router;
