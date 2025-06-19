
import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Python", level: 85 },
      ]
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 92 },
        { name: "Adobe XD", level: 85 },
        { name: "Photoshop", level: 80 },
        { name: "Illustrator", level: 75 },
      ]
    },
    {
      title: "Other Tools",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "MongoDB", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
