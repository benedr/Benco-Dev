'use client'

import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      name: 'Email',
      value: 'onyedikagodwin01@gmail.com',
      icon: Mail,
      link: 'mailto:onyedikagodwin01@gmail.com'
    },
    {
      name: 'Phone',
      value: '+234 7038341771',
      icon: Phone,
      link: 'tel:+2347038341771'
    },
  ]

  const socials = [
    { name: 'GitHub', icon: Github, link: '#' },
    { name: 'LinkedIn', icon: Linkedin, link: '#' },
    { name: 'Twitter', icon: Twitter, link: '#' },
  ]

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-secondary mb-4 inline-block">
            {'> '} Let's Connect {' <'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together. Feel free to reach out through any of these channels.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.link}
              className="group p-8 bg-card/50 border border-primary/20 rounded-lg hover:border-secondary/50 hover:bg-card/80 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <method.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-primary group-hover:text-secondary transition-colors">
                    {method.name}
                  </h3>
                  <p className="text-muted-foreground text-sm break-all">
                    {method.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              className="p-4 bg-card/50 border border-primary/20 rounded-lg hover:border-secondary/50 hover:bg-card/80 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/30"
              title={social.name}
            >
              <social.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center border-t border-primary/20 pt-8">
          <p className="text-sm text-muted-foreground mb-4">
            <span className="text-secondary font-mono">{'// '}</span>
            Crafted with precision and passion
          </p>
          <p className="text-xs text-muted-foreground/60">
            © 2025 Godwin Benedict. All rights reserved. Built with React & Next.js
          </p>
        </div>
      </div>
    </section>
  )
}
