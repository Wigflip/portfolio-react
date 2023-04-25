//must import css if using external stylesheet - import "./style.css" for example
import githubLogo from "../images/github-logo-resize.png";
import linkedInLogo from "../images/linkedin-logo-resize.png";
//import dribbbleLogo from "../images/dribbble-ball-icon.png";

function Header() {
  return (
    //use "className" in react to add styling. "class" is a keyword in JS and JSX(below code) is an extension of JS.
    <header className="my-20 flex justify-center flex-wrap">
      <h1 className="font-bold text-5xl text-center self-center mb-6 md:mb-0 md:mr-8 basis-ful md:basis-auto">
        JRDN STCK
      </h1>
      <div className="flex justify-center">
        <a href="##" className="mr-4">
          <img src={githubLogo} alt="GitHub logo" />
        </a>
        <a href="##">
          <img src={linkedInLogo} alt="LinkedIn logo" />
        </a>
        {/* <a href="##">
          <img src={dribbbleLogo} alt="dribbble logo" />
        </a> */}
      </div>
    </header>
  );
}

export default Header;
