
import { motion } from "framer-motion";
import { Github, ArrowRight, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "System Initialization Simulator",
      description: "Built a multithreaded system simulator for CPU, Wi-Fi, Display, and Bluetooth. Implemented parallel execution using Python threading and improved system startup efficiency through concurrent processing.",
      tech: ["Python", "Multithreading", "Concurrency"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      figma: null,
      live: null
    },
    {
      title: "OTT Streaming Web Application",
      description: "Developed a responsive web application for browsing movies and TV shows. Built reusable UI components, implemented routing with React Router, integrated REST APIs for dynamic content rendering, and improved UX with category-based navigation.",
      tech: ["ReactJS", "REST APIs", "React Router", "JavaScript"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=300&fit=crop",
      figma: null,
      live: null
    },
    {
      title: "Sunbond Website Redesign",
      description: "Recreated the design of an existing live website using Figma to improve layout and user experience. Focused on responsive design, visual hierarchy, and clean user interface.",
      tech: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      figma: "https://www.figma.com/design/5WOjV11Iy5rnYOqjVnpbsg/Sunbond-project?node-id=0-1&t=W3WhkQaSpToqmdQh-1",
      live: null
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in UI/UX design and development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.figma && (
                    <motion.a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={16} />
                      View in Figma
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
