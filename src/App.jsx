import React from "react";
import Top from "./Elements/Top";
import BottomLeft from "./Elements/BottomLeft";
import BottomRight from "./Elements/BottomRight";

const App = () => {
  return (
    <main className="grid grid-rows-2 grid-cols-2 text-grayish-blue shadow-xl mobile:flex flex-col rounded-xl overflow-hidden">
      <Top />
      <BottomLeft />
      <BottomRight />
    </main>
  );
};

export default App;
