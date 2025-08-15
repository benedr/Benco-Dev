"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Globe } from "lucide-react"

const skills = [
  { name: "React", icon: Code, color: "bg-blue-500" },
  { name: "JavaScript", icon: Zap, color: "bg-yellow-500" },
  { name: "Tailwind CSS", icon: Palette, color: "bg-cyan-500" },
  { name: "Next.js", icon: Globe, color: "bg-gray-800" },
  { name: "Node.js", icon: Code, color: "bg-green-500" },
  { name: "TypeScript", icon: Code, color: "bg-blue-600" },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Passionate Developer & Creative Problem Solver
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated full-stack developer with a passion for creating beautiful, functional web applications.
              With expertise in modern JavaScript frameworks and a keen eye for design, I bring ideas to life through
              clean, efficient code.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${skill.color}`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
