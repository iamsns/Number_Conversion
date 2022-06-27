import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const arr1 = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine"
  ];
  const arr2 = [
    "Zero",
    "Ten",
    "Twenty",
    "Thirty",
    "Fourty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety"
  ];
  const arr3 = [
    "Zero",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ];
  const [translated, setTranslated] = useState("");
  const input = 985;
  useEffect(() => {
    let temp = "";
    if (input > 99 && input < 1000) {
      if (input.toString()[1] > 0 || input.toString()[2] > 0) {
        temp += arr1[input.toString()[0]] + " Hundred And ";
        if (input.toString()[1] > 1) {
          temp += arr2[input.toString()[1]];
          if (input.toString()[2] > 0) {
            temp += " " + arr1[input.toString()[2]];
          }
        } else if (input.toString()[1] == 1) {
          if (input.toString()[2] == 0) {
            temp += arr2[input.toString()[1]];
          } else {
            temp += arr3[input.toString()[2]];
          }
        } else {
          temp += " " + arr1[input.toString()[2]];
        }
      } else {
        temp += arr1[input.toString()[0]] + " Hundred";
      }

      setTranslated(temp);
    }
  }, []);

  return (
    <div className="App">
      <h1>Number :- {input}</h1>
      <h1>Translated :- {translated}</h1>
    </div>
  );
}
