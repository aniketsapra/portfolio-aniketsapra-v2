import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block" // Ensures it behaves like a block element
    >
      <div className="flex flex-col md:flex-row items-center gap-6 lg:p-6 lg:hover:bg-gray-700/5 dark:lg:hover:bg-white/4 lg:rounded-sm lg:backdrop-blur-md cursor-pointer transition-all duration-300">
        {/* Left: Thumbnail */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <Image 
            src={project.thumbnail} 
            alt={project.name} 
            width={300} 
            height={200} 
            className="rounded-sm object-cover"
          />
        </div>

        {/* Right: Project Details */}
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project.name}</h3>
          <p className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-300 mt-2 text-sm">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((tech, index) => (
              <span key={index} className="px-3 py-1 text-xs text-gray-600 border-gray-600 dark:text-teal-400 border dark:border-teal-400 rounded-xl">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
