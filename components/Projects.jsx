import ProjectCard from "./ProjectCard";
import { projects } from "../public/data/Data"; 

const ProjectsList = () => {
  return (
    <div className="space-y-15 lg:space-y-6">
        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gray-200/30 dark:bg-emerald-950/10
        px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h1 className='text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-slate-200 lg:sr-only'>Projects</h1>
        </div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
