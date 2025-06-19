
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  const codingProfiles = [
    { name: "LeetCode", href: "https://leetcode.com" },
    { name: "GeeksforGeeks", href: "https://geeksforgeeks.org" },
    { name: "HackerRank", href: "https://hackerrank.com" },
    { name: "CodePen", href: "https://codepen.io" },
  ];

  return (
    <footer className="py-12 border-t border-slate-700/50 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Kishor
            </h3>
            <p className="text-slate-400">
              Creating beautiful digital experiences with passion and precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Coding Profiles</h4>
            <div className="space-y-2">
              {codingProfiles.map((profile, index) => (
                <motion.a
                  key={index}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-400 hover:text-purple-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {profile.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-700/50 mt-8 pt-8 text-center"
        >
          <p className="text-slate-400">
            © 2024 Kishor. All rights reserved. Built with React & Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
