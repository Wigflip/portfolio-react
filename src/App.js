import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data";

//import all images to be passed to cards
function importAllImages(context) {
  let allImages = {};
  context.keys().forEach((image) => {
    console.log(image);
    allImages[image.replace("./", "")] = context(image);
  });
  return allImages;
}

const images = importAllImages(
  //1st arguement: directory to search, 2nd arguement: boolean to search sub directories, 3rd arguement: regExp to use for searching (all files with extension jpeg, svg and png)
  require.context("./images", false, /\.(jpe?g|svg|png)$/)
);

function App() {
  return (
    <div>
      <Header />
      {projects.map((project) => (
        <ProjectCard key={project.title} image={images} {...project} />
      ))}
    </div>
  );
}

export default App;
