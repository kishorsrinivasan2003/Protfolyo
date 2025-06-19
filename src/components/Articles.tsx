
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export const Articles = () => {
  const articles = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn best practices for structuring large-scale React applications with TypeScript, including design patterns and performance optimization techniques.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      link: "#"
    },
    {
      title: "Modern CSS Techniques for Better User Interfaces",
      excerpt: "Explore advanced CSS features like container queries, subgrid, and cascade layers to create more responsive and maintainable user interfaces.",
      date: "2024-01-08",
      readTime: "6 min read",
      tags: ["CSS", "UI/UX", "Web Design"],
      link: "#"
    },
    {
      title: "Optimizing Web Performance with Core Web Vitals",
      excerpt: "A comprehensive guide to improving your website's Core Web Vitals scores and overall performance metrics for better user experience.",
      date: "2023-12-20",
      readTime: "10 min read",
      tags: ["Performance", "SEO", "Web Development"],
      link: "#"
    }
  ];

  return (
    <section id="articles" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Insights and tutorials on modern web development, design patterns, and best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                <Calendar size={16} />
                <span>{new Date(article.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-slate-300 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <motion.a
                href={article.link}
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>Read More</span>
                <ArrowRight size={16} />
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
