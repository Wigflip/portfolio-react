function ProjectCard(props) {
  //console.log(props);
  const { cardImage, imageAlt, title, tools, desc } = props;

  return (
    <div className="w-[85%] sm:w-[75%] md:w-[700px] lg:w-[853px] flex flex-col md:flex-row mb-12 m-auto">
      <img
        className="mb-4 md:mr-6 w-full md:w-[45%] lg:w-[43%] lg:mb-0 rounded-3xl border border-gray-150 h-full"
        src={props.image[cardImage]}
        alt={imageAlt}
      />
      <div className="w-full lg:w-3/4">
        <h3 className="text-4xl mb-2">{title}</h3>
        <h4 className="mb-4 text-xl text-neutral-500">{tools}</h4>
        <p>{desc}</p>
        <a
          href="##"
          className="project-button p-2 bg-red-500 inline-block rounded-md mt-2"
        >
          View project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
