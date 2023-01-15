import React from "react";

interface WordArrayProps {
  wordArray: string[];
}

function WordArray({ wordArray }: WordArrayProps) {
  return (
    <ul>
      {wordArray.map((data, index) => {
        return <li key={`${data}+${index}`}>{wordArray[index + 1]}</li>;
      })}
    </ul>
  );
}

export default WordArray;
