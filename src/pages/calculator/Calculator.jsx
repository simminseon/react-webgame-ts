import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { buttonTheme } from "../../components/button/style";
import Title from "../../components/title/Title";

function Calculator() {
  const [firstNum, setFirstNum] = React.useState("");
  const [secondNum, setSecondNum] = React.useState("");
  const [operate, setOperate] = React.useState("");
  const [result, setResult] = React.useState("");

  const onClickNumber = (e) => {
    if (!operate) {
      // 비었을때
      setFirstNum((prev) => prev + e.target.textContent);
      setResult((prev) => prev + e.target.textContent);
      console.log("첫번째 값: ", firstNum);
      return;
    }

    if (!secondNum) {
      // 두번째 비었을때
      setResult("");
    }

    setSecondNum((prev) => prev + e.target.textContent);
    setResult((prev) => prev + e.target.textContent);
  };
  const onClickOperator = (e) => {
    if (!firstNum && e.target.textContent === "-") {
      setFirstNum(e.target.textContent + firstNum);
      setResult(e.target.textContent + firstNum);
      return;
    }

    if (firstNum === "") {
      alert("숫자를 먼저 입력하세요1111!");
    } else {
      setOperate(e.target.textContent);
    }

    if (secondNum) {
      switch (operate) {
        case "+":
          setResult(parseInt(firstNum) + parseInt(secondNum));
          setFirstNum(parseInt(firstNum) + parseInt(secondNum));
          break;
        case "-":
          setResult(parseInt(firstNum) - parseInt(secondNum));
          setFirstNum(parseInt(firstNum) - parseInt(secondNum));
          break;
        case "x":
          setResult(parseInt(firstNum) * parseInt(secondNum));
          setFirstNum(parseInt(firstNum) * parseInt(secondNum));
          break;
        case "/":
          setResult(parseInt(firstNum) / parseInt(secondNum));
          setFirstNum(parseInt(firstNum) / parseInt(secondNum));
          break;
        default:
          break;
      }

      setSecondNum("");
    }
  };

  const onClickReset = () => {
    setFirstNum("");
    setSecondNum("");
    setOperate("");
    setResult("");
  };

  const onClickCalculator = () => {
    if (secondNum) {
      switch (operate) {
        case "+":
          setResult(parseInt(firstNum) + parseInt(secondNum));
          setFirstNum(parseInt(firstNum) + parseInt(secondNum));
          break;
        case "-":
          setResult(parseInt(firstNum) - parseInt(secondNum));
          setFirstNum(parseInt(firstNum) - parseInt(secondNum));
          break;
        case "x":
          setResult(parseInt(firstNum) * parseInt(secondNum));
          setFirstNum(parseInt(firstNum) * parseInt(secondNum));
          break;
        case "/":
          setResult(parseInt(firstNum) / parseInt(secondNum));
          setFirstNum(parseInt(firstNum) / parseInt(secondNum));
          break;
        default:
          break;
      }

      setOperate("");
      setSecondNum("");
    } else {
      alert("숫자를 먼저 입력하세요.");
    }
  };
  return (
    <>
      <Title>계산기</Title>
      <HeadWrapStyle>
        <OperateBoxStyle>{operate}</OperateBoxStyle>
        <Input value={result} readOnly={true} align={"right"} />
      </HeadWrapStyle>
      <ButtonWrapper>
        <Button onClick={onClickNumber}>7</Button>
        <Button onClick={onClickNumber}>8</Button>
        <Button onClick={onClickNumber}>9</Button>
        <Button onClick={onClickOperator} theme={buttonTheme.orange}>
          +
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClick={onClickNumber}>4</Button>
        <Button onClick={onClickNumber}>5</Button>
        <Button onClick={onClickNumber}>6</Button>
        <Button onClick={onClickOperator} theme={buttonTheme.orange}>
          -
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClick={onClickNumber}>1</Button>
        <Button onClick={onClickNumber}>2</Button>
        <Button onClick={onClickNumber}>3</Button>
        <Button onClick={onClickOperator} theme={buttonTheme.orange}>
          /
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClick={onClickReset} theme={buttonTheme.darkGray}>
          C
        </Button>
        <Button onClick={onClickNumber}>0</Button>
        <Button onClick={onClickCalculator} theme={buttonTheme.darkGray}>
          =
        </Button>
        <Button onClick={onClickOperator} theme={buttonTheme.orange}>
          x
        </Button>
      </ButtonWrapper>
    </>
  );
}

const HeadWrapStyle = styled.div`
  display: flex;
  width: 215px;
  margin-bottom: 5px;
`;
const OperateBoxStyle = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 5px;
  border: 1px solid #222;
  line-height: 50px;
  background: #fff;
  text-align: center;
  box-sizing: border-box;
`;
const ButtonWrapper = styled.div`
  button {
    margin: 0 5px 5px 0;
  }
`;
export default Calculator;
