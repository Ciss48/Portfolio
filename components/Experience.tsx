import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mt-1">
                    {exp.company}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 md:ml-4 whitespace-nowrap">
                  {exp.duration}
                </p>
              </div>
              
              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              {exp.result && (
                <p className="mt-4 text-gray-900 dark:text-white font-semibold">
                  {exp.result}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

