import { Card, CardContent } from "@/components/ui/card";

const ExperienceCard = ({ experience }) => {
  return (
    <Card className="lg:p-5 bg-transparent shadow-none backdrop-blur-sm flex lg:flex-row gap-6">
      {/* Time on the left */}
      <div className="lg:w-1/4 text-gray-700 dark:text-gray-400 text-left">
        <h3>{experience.time}</h3>
      </div>

      {/* Content on the right */}
      <div className="lg:w-3/4 flex flex-col space-y-1">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-200">{experience.role}</h3>
        <p className="text-gray-900 dark:text-gray-200">{experience.company}</p>
        <CardContent className="mt-2 text-gray-700 dark:text-gray-400 text-sm p-0 transition-all duration-300">
                  {experience.description}
                </CardContent>
        {/* Tech Stack */}
        <div className="mt-2 flex flex-wrap gap-2">
          {experience.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-gray-600 border-gray-600 dark:text-teal-400 border dark:border-teal-400 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;
