import React from "react";

type UserInputProps = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (text: string) => void
];

export const useInput = (initialValue: string): UserInputProps => {
  const [valuew, setValuew] = React.useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValuew(e.target.value);
  };
  const reset = () => {
    setValuew("");
  };

  return [valuew, onChange, reset];
};
