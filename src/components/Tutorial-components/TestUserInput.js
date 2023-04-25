import { useState } from "react";

function TestUserInput(props) {
  //Pass empty string to setState as the form field is empty when first evaluated
  //Can have multiple "useStates". are seperate from each other

  const [userTitle, setUserTitle] = useState("");
  const [userPrice, setUserPrice] = useState("");

  //Can set multiple states in an object
  // const [userInput, setUserInput] = useState({
  //   userTitle: "",
  //   userPrice: "",
  // });

  //Have access to event arguement like vanilla JS
  const inputTextHandler = function (e) {
    setUserTitle(e.target.value);
    //single useState example - works but not necessarily the best practice
    // setUserInput({
    //   ...userInput, //Destruct object to prevent other keys being overwritten by the following line
    //   userTitle: e.target.value, //Set value of "userTitle" key
    // });

    //If state update depends on previous state use the below code,
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState, //Destruct object to prevent other keys being overwritten by the following line
    //     userTitle: e.target.value, //Set value of "userTitle" key
    //   };
    // });
  };

  function inputNumberHandler(e) {
    if (isNaN(e.target.value)) {
      alert("Please enter a number");
    } else {
      setUserPrice(e.target.value);
    }
  }

  //CHILD-TO-PARENT COMPONENT COMMUNICATION (BOTTOM UP)
  function confirmTitle(e) {
    e.preventDefault();
    //Using the passed function from parent prop (must be name of prop, not function)
    props.onCommunication(userTitle);
    //console.log(confirmedTitle);
  }

  return (
    <div>
      <p>Current title: {userTitle}</p>
      <form>
        <label>Enter title</label>
        <input
          className="border-black border-2"
          type="text"
          onChange={inputTextHandler}
        />
        <button
          className="inline-block ml-2 bg-green-800 text-white p-2"
          onClick={confirmTitle}
        >
          Confirm title
        </button>
      </form>
      {/* <p>Current number: {userPrice}</p> */}
      {/* <form>
        <label>Enter number</label>
        <input
          type="text"
          value="Enter a number"
          onChange={inputNumberHandler}
        />
        <submit>Confirm title</submit>
      </form> */}
    </div>
  );
}

export default TestUserInput;
