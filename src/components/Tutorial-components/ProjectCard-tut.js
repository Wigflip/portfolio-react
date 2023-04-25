//import {useState} from the react library to define values as state where changes to these values should be rreflected in the component - a type of react hook
import { useState } from "react";

//React allows one parameter; an object containing any attributes/props passed to the component.
function ProjectCard(props) {
  //Normal JS code can be added outside of return statement

  //A react hook - all start with "use" and should be called directly within the component function (not nested).
  //useState returns a array of 2 elements - the current state value and the function for updating it.
  const [description, setDescription] = useState(props.description);

  //can end handler function with "Handler", not neccessary.
  function gotoFullPage() {
    setDescription("blah blah blah");
    console.log("This links to project page");
  }

  return (
    //use "className" in react to add styling. "class" is a keyword in JS and JSX(below code) is an extension of JS.
    <div className="w-[90%] md:w-[700px] lg:w-[853px] flex flex-col md:flex-row mb-10 m-auto">
      <img
        className="mb-4 md:mr-6 w-full md:w-3/4 lg:w-2/4 rounded-3xl"
        src="images/ticket.png"
        alt="##"
      />
      <div className="w-full lg:w-3/4">
        <h3 className="text-4xl mb-2">Currys ShopLive</h3>
        <h4 className="mb-4 text-xl">HTML, CSS</h4>
        {/*Use single curly braces to "inject" javascript into JSX. Can use expressions with braces too.*/}
        <p>{description}</p>
        <span
          className="inline-block mt-2 p-4 bg-red-800 text-white"
          onClick={gotoFullPage}
          // use functions in eventlisteners without brackets, provents function from firing when code is initialised.
        >
          Click to learn more
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
