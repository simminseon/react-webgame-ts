import { Interface } from "readline";
import { css } from "styled-components";
import { string } from "prop-types";

export const buttonTheme = {
  orange: css`
    background-color: #f5923e;
    color: #fff;
  `,
  darkGray: css`
    background-color: darkgray;
    color: #fff;
  `,
};

export const buttonSize = {
  full: css`
    width: 100%;
  `,
  small: css`
    width: auto;
  `,
};
