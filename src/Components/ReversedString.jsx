import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./ReversedString.css";
import react, { useState } from "react";

const ReversedString = (props) => {
  const [stringValue, setreverseValue] = useState("");

  let resultString;

  const isLetter = (char) => {
    return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
  };

  const callReverseString = (e) => {
    e.preventDefault();
    let str = stringValue.split("");
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
      if (!isLetter(str[i])) {
        ++i;
      }
      if (!isLetter(str[j])) {
        --j;
      }
      if (isLetter(str[i]) && isLetter(str[j])) {
        var tempChar = str[i];
        str[i] = str[j];
        str[j] = tempChar;
        ++i;
        --j;
      }
    }

    resultString = str.join("");
    props.sendReverseData(resultString);
  };

  const handleInputChange = (event) => {
    setreverseValue(event.target.value);
  };

  return (
    <>
      <TextField
        id="standard-basic"
        label="Reverse String"
        onChange={handleInputChange}
        value={stringValue}
      />
      <br />
      <Button
        variant="outlined"
        color="primary"
        className="button-position"
        onClick={callReverseString}
      >
        Reverse String
      </Button>
    </>
  );
};

export default ReversedString;
