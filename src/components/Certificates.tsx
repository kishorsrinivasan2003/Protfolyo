import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export const Certificates = () => {
  const certificates = [
    {
      title: "Digital Skills: User Experience",
      issuer: "Accenture",
      year: "2025",
      description: "Comprehensive certification covering user experience principles, design thinking, and digital transformation strategies.",
      skills: ["User Experience", "Design Thinking", "Digital Strategy"]
    },
    {
      title: "Figma UI/UX Design Essentials",
      issuer: "Udemy",
      year: "2025",
      description: "Complete course covering Figma fundamentals, UI/UX design principles, prototyping, and collaborative design workflows.",
      skills: ["Figma", "UI Design", "UX Design", "Prototyping"]
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Professional certifications and completed courses that enhance my expertise in design and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="text-purple-400 font-semibold mb-1">{cert.issuer}</div>
                  <div className="text-slate-400 text-sm">{cert.year}</div>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4 leading-relaxed">{cert.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
