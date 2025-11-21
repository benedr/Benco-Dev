'use client'

import { Code2, Cpu, Zap } from 'lucide-react'

export default function About() {
  const skills = [
    { name: 'React', icon: Code2, delay: '0s' },
    { name: 'Next.js', icon: Zap, delay: '0.2s' },
    { name: 'TypeScript', icon: Code2, delay: '0.4s' },
    { name: 'Tailwind', icon: Cpu, delay: '0.6s' },
    { name: 'Node.js', icon: Zap, delay: '0.8s' },
    { name: 'PostgreSQL', icon: Code2, delay: '1s' },
  ]

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-secondary mb-4 inline-block">
            {'> '} About Me {' <'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Who I Am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Hi! I'm Godwin Benedict, a passionate full-stack developer with a love for clean code and creative design. With expertise in modern web technologies, I build scalable applications that combine beautiful UI with powerful backend solutions.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with curiosity about how things work, and it evolved into a professional pursuit of creating impactful digital products. I specialize in turning complex problems into elegant, user-friendly solutions.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-primary font-bold">Email:</span>
                <a href="mailto:onyedikagodwin01@gmail.com" className="text-secondary hover:underline">
                  onyedikagodwin01@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary font-bold">Phone:</span>
                <a href="tel:+2347038341771" className="text-secondary hover:underline">
                  +234 7038341771
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Projects', value: '20+', icon: Zap },
              { label: 'Years Experience', value: '3+', icon: Code2 },
              { label: 'Clients', value: '15+', icon: Cpu },
              { label: 'Technologies', value: '15+', icon: Zap },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 bg-card/50 border border-primary/20 rounded-lg hover:border-primary/50 transition-all duration-300 hover:bg-card/80 group"
              >
                <div className="text-secondary group-hover:text-primary transition-colors mb-2">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="border-t border-primary/20 pt-16">
          <h3 className="text-2xl font-bold font-mono text-primary mb-8">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="group p-6 bg-card/50 border border-primary/20 rounded-lg hover:border-secondary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: skill.delay }}
              >
                <div className="text-secondary group-hover:text-primary transition-colors mb-3">
                  <skill.icon className="w-8 h-8" />
                </div>
                <h4 className="font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
