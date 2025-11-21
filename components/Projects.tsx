'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Loader2 } from 'lucide-react'

interface Project {
  name: string
  url: string
  image?: string
  description?: string
}

export default function Projects() {
  // Hardcoded projects - add your links here
  const [projects] = useState<Project[]>([
    {
      name: 'Game-Purchase Site',
      url: 'https://gamecommerce-site.pages.dev',
      description: 'A modern games purchase website with a sleek design.'
    },
    {
      name: 'Social-Media WebApp',
      url: 'https://ping-up-bybenco.vercel.app/',
      description: 'Real-time social media WebApp with interactive features.'
    },
    {
      name: 'Flower Shop',
      url: 'https://flowershop-dwz.pages.dev/',
      description: 'Full-featured online shopping platform.'
    },
    {
      name: 'Crypto Trading Plartform Template',
      url: 'https://cryptex-3qy.pages.dev/',
      description: 'Feature-rich crypto trading application.'
    },
    {
      name: 'Crowdfunding Platform',
      url: 'https://hopebridge.site/',
      description: 'Real-time donation platform for crowdfunding'
    },
  ])

  const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    // Initialize loading state
    const initialLoading: { [key: string]: boolean } = {}
    projects.forEach((p) => {
      initialLoading[p.url] = true
    })
    setLoadingImages(initialLoading)
  }, [projects])

  // We no longer use an external screenshot service (it required an API key).
  // Projects are hardcoded above; previews open in an in-page iframe modal.

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-secondary mb-4 inline-block">
            {'> '} My Work {' <'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects and live demonstrations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} isLoading={loadingImages[project.url]} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p>No projects to display yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, isLoading }: { project: Project; isLoading: boolean }) {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  const host = project.url.replace(/(^\w+:|^)\/\//, '')

  return (
    <div className="group relative overflow-hidden rounded-lg bg-card/80 border border-primary/40 hover:border-secondary/70 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 flex flex-col h-full backdrop-blur-sm">
      {/* Visual placeholder (favicon + domain) */}
      <div className="relative w-full aspect-video bg-gradient-to-br from-primary/8 to-secondary/8 flex items-center justify-center">
        <div className="text-center">
          <img
            src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(project.url)}`}
            alt="favicon"
            className="inline-block w-8 h-8 mb-2"
          />
          <div className="text-sm font-mono text-muted-foreground truncate px-4">{host}</div>
        </div>

        {/* Hover Overlay: open preview modal */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setPreviewOpen(true)
            }}
            className="inline-flex items-center gap-2 text-sm font-mono text-primary bg-background/40 px-3 py-2 rounded-md hover:brightness-105"
          >
            <ExternalLink className="w-4 h-4" />
            Preview
          </button>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary transition-all duration-300">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        </div>

        {/* URL Badge */}
        <div className="text-xs text-secondary font-mono truncate opacity-70 group-hover:opacity-100 transition-opacity">{host}</div>
      </div>

      {/* Border Animation */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary group-hover:to-secondary transition-all" />
        <div className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary/0 to-secondary/0 group-hover:from-primary group-hover:to-secondary transition-all" />
      </div>

      {/* Preview modal */}
      {previewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-5xl h-[80vh] bg-card/90 rounded-lg overflow-hidden border border-primary/30 flex flex-col">
            <div className="flex items-center justify-between p-3 border-b border-primary/10 bg-background/80">
              <div className="flex items-center gap-3">
                <img src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(project.url)}`} className="w-5 h-5" />
                <div className="font-bold">{project.name}</div>
                <div className="text-xs text-muted-foreground">{host}</div>
              </div>
              <div className="flex items-center gap-2">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-primary/10 rounded-md">Open in new tab</a>
                <button onClick={() => setPreviewOpen(false)} className="text-sm px-3 py-1 bg-destructive/10 rounded-md">Close</button>
              </div>
            </div>
            <div className="flex-1 relative">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </div>
              )}
              <iframe
                src={project.url}
                className={`w-full h-full border-0 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIframeLoaded(true)}
                title={project.name}
              />
            </div>
            <div className="p-3 text-xs text-muted-foreground bg-background/80">
              If the site doesn't load inside the preview (some sites disallow embedding), use "Open in new tab".
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
