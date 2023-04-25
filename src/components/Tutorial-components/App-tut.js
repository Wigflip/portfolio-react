import Header from "../Header";
import ProjectCard from "./components/ProjectCard";
import TestWrapper from "./TestWrapper";

function App() {
  const projects = [
    {
      id: "p1",
      title: "Currys ShopLive",
      tools: "HTML, CSS",
      desc: "To be added",
    },
    {
      id: "p2",
      title: "Restaurant app",
      tools: "HTML, CSS, JavaScript",
      desc: "To be added",
    },
    {
      id: "p3",
      title: "Currys Covid hub",
      tools: "HTML, CSS",
      desc: "To be added",
    },
  ];

  //JSX can be used in variables
  const projectLength = projects.length;
  // const emptyproject = <p>I have {projectLength} projects!</p>;

  //Can put the result of a condition into a variable and point to the varibale in the return JSX
  let emptyproject = <p>I don't have any projects</p>;

  //Code for conditional output. Variable is assigned using regular JS and is added to the JSX below
  if (projectLength < 5) {
    emptyproject = projects.map((project) => (
      <ProjectCard key={project.id} {...project} />
    ));
  }

  return (
    //root element must be one parent element (div for example)
    //props are set like HTML attributes, can be named whatever; must use curly braces to set. Used to pass data to components.
    //Components without any content within the opening/closing tags can be written as a self-closing element, like "header" below.
    <div>
      <Header />
      {/* //Need curly braces here as this is regukar JS */}
      {/* //OUTPUTTING CONDITIONAL STATEMENTS */}
      {/*if statements and forloops aren't allowed in curly braces but ternary operations are*/}
      {projectLength > 5 ? emptyproject : " "}
      {/* Short circuit */}
      {projectLength < 5 && emptyproject}
      {/* //Can check for conditons outside of JSX, output the result into a variable and add it to the JSX code like below */}
      {emptyproject}
      {projects.map((project) => (
        // Can pass an object as a prop by using the spread operator - BEST USED WITH HIGHER ORDER COMPONENTS (HOC)
        //Need a "key" to give each item in the array a unique value (id, title could be anything as long as it;s unique to each element in the array), helps with performance, preventing errors and identify and updating list elements.
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

export default App;
