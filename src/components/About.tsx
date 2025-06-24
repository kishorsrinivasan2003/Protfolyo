
import { motion } from "framer-motion";

export const About = () => {
  const timeline = [
    {
      year: "2023-2024",
      title: "Line-in-Charge",
      company: "NCR Corporation India Pvt Ltd",
      description: "Leading operations and ensuring quality delivery in technology solutions"
    },
    {
      year: "2020-2024",
      title: "Bachelor of Engineering (ECE)",
      company: "Dr.A.P.J. Institute of Technology",
      description: "Specialized in Electronics and Communication Engineering"
    },
    {
      year: "2025",
      title: "UI/UX Personal Project",
      company: "Live Website Redesign",
      description: "Redesigned and developed responsive web interfaces"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            I'm an Electronics and Communication Engineering graduate with a passion for technology 
            and innovation. Currently working as a Line-in-Charge at NCR Corporation, I combine my 
            technical expertise with leadership skills to deliver exceptional results. I'm also 
            passionate about UI/UX design and web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  {index !== timeline.length - 1 && (
                    <div className="w-px h-16 bg-slate-600 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-sm text-purple-400 font-semibold">{item.year}</div>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <div className="text-slate-400 text-sm">{item.company}</div>
                  <p className="text-slate-300 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-slate-300">Electronics & Communication Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-slate-300">UI/UX Design & Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300">Team Leadership & Operations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-slate-300">Problem Solving & Innovation</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-3">Languages</h4>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">Tamil</span>
                <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full">English</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
