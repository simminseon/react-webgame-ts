import React from "react";
import InputBox from "../../components/inputBox/InputBox";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { buttonTheme, buttonSize } from "../../components/button/style";

interface WordInputProps {
  onChange: () => void;
  value: string;
  onClick: () => void;
  readOnly?: boolean;
  align?: string;
}

function WordInput(
  { onChange, value, onClick, readOnly, align }: WordInputProps,
  ref?: React.Ref<HTMLInputElement>
) {
  return (
    <InputBox>
      <Input
        onChange={onChange}
        value={value}
        ref={ref}
        readOnly={readOnly}
        align={align}
      />
      <Button type="button" onClick={onClick} size={buttonSize.small}>
        입력
      </Button>
    </InputBox>
  );
}

export default React.forwardRef<HTMLInputElement, WordInputProps>(WordInput);
