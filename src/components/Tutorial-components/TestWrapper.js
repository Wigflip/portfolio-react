import TestUserInput from "./TestUserInput";
import { useState } from "react";

function TestWrapper() {
  const [test, setTest] = useState("");
  //Creating a function that a child component will use to pass data to this component
  function bottomUpCommunication(testdata) {
    setTest(testdata);
    console.log(`Testwrapper: ${testdata}`);
  }
  return (
    <div>
      <p className="text-3xl">The entered value is: {test}</p>
      {/* //Pointing to the above function in the component prop */}
      <TestUserInput onCommunication={bottomUpCommunication} />
    </div>
  );
}

export default TestWrapper;
