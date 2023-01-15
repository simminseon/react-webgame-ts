import React from "react";
import styled from "styled-components";
import { PropsWithChildren } from "react";
import { buttonTheme, buttonSize } from "../../components/button/style";

interface ButtonProps {
  onClick: () => void;
  theme?: string;
  size?: string;
  type?: "submit" | "reset" | "button";
}

interface ButtonStyleProps {
  theme: string;
  size: string;
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  width: 50px;
  height: 50px;
  border: 1px solid #222;
  font-weight: bold;
  background-color: #e0e0e0;
  ${(props: { theme: string }) => props.theme}
  ${(props: { size: string }) => props.size}
`;

function Button({
  onClick,
  theme,
  size,
  children,
  type,
}: PropsWithChildren<ButtonProps>) {
  return (
    <ButtonStyle type={type} onClick={onClick} theme={theme} size={size}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
