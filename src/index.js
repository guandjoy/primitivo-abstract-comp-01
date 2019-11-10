import React from "react";
import ReactDOM from "react-dom";
import Spinner from "./Spinner";
import FooterCaption from "./FooterCaption";

import "./styles.css";

function App() {
  return (
    <>
      <Spinner
        duration={50000}
        shiftStep={300}
        numOfKeyPaths={6}
        numOfShapes={12}
        // colors={["#000"]}
        colors={["#3688FF", "#FF546C", "#22D163", "#3688FF"]}
        contrast={5}
        round={0}
        numOfPathSegments={10}
        type={"stroke"}
        lable={false}
      />
      <FooterCaption />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
