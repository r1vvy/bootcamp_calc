import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValues = [
  ["C", "+/-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ",", "="],
];

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                // have to fix this later
                className={btn === "=" ? "equals" : "" || btn === "+" ? "plus" : "" || btn === "-" ? "minus" : "" 
                || btn === "X" ? "multiply" : "" || btn === "/" ? "divide" : "" || btn === 0 ? "zero" : ""
                || btn === 0 ? "zero" : "" || btn === "C" ? "clear" : "" || btn === "+/-" ? "chSign" : ""
                || btn === "%" ? "prcnt" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} was clicked on`);
                }}
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  );
};

export default App;