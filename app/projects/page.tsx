import Link from 'next/link';
import RetroBox from '@/components/RetroBox';

// Define the project data
const portfolioItems = [
  {
    id: 1,
    title: "FCFS Scheduler Simulator",
    description: "A simulator for the First-Come, First-Served (FCFS) CPU scheduling algorithm, visualizing process execution.",
    link: "/projects/fcfs", // Internal route
    isExternal: false,
  },
  {
    id: 2,
    title: "E-Commerce Shop",
    description: "A simple e-commerce site mock-up featuring product browsing, search, and cart functionality.",
    link: "https://mastering-react-and-api-integration.vercel.app/", // External URL
    isExternal: true,
  },
];

export default function ProjectsPage() {
  return (
    <section className="my-16">
      {/* Page Title */}
      <div className="mb-12">
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
          Projects
        </h3>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioItems.map((project) => (
          <div key={project.id}>
            <RetroBox className="bg-white h-full flex flex-col">
              {/* Project Image Placeholder */}
              <div className="w-full h-40 bg-gray-100 border-2 border-gray-900 mb-4 flex items-center justify-center">
                <span className="text-xs text-gray-600 font-bold uppercase">
                  Project Preview
                </span>
              </div>
              
              {/* Project Text Content */}
              <div className="flex-grow">
                <h4 className="text-2xl font-bold mb-2 leading-tight">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-700 mb-6">
                  {project.description}
                </p>
              </div>

              {/* Action Button */}
              <Link 
                href={project.link} 
                target={project.isExternal ? "_blank" : "_self"}
                rel={project.isExternal ? "noopener noreferrer" : ""}
                className="inline-block mt-auto"
              >
                <RetroBox className="bg-gray-900 text-white hover:bg-black/80 transition-all border-0 py-2 px-4">
                  <span className="font-bold text-xs tracking-widest uppercase">
                    Launch Project
                  </span>
                </RetroBox>
              </Link>
            </RetroBox>
          </div>
        ))}
      </div>
    </section>
  );
}