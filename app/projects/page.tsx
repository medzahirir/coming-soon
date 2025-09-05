// Place this file in: app/projects/page.tsx // Page "Projects" simple pour Next.js (App Router) — Tailwind CSS
"use client"


import Link from "next/link";
import Navbar from "../components/Navbar";


type Project = { id: string; title: string; description: string; stack: string[]; liveUrl?: string; };

const projects: Project[] = [ { id: "site-vitrine", title: "Site Vitrine (placeholder)", description: "Page d'accueil simple avec sections À propos, Services et Contact (en développement).", stack: ["HTML", "CSS", "Tailwind", "Next.js"], liveUrl: "#", }, { id: "portfolio-coming-soon", title: "Portfolio Coming-Soon", description: "Template simple pour annoncer mon site et présenter mes compétences.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "#", }, ];

export default function ProjectsPage() { 
return (


 <main className="min-h-screen bg-slate-50 text-slate-900">
 <div className="max-w-5xl mx-auto px-4 py-12">

 <header className="flex items-center justify-between mb-8">

 <div>
 <h1 className="text-3xl font-bold">
Projets</h1>
 <p className="text-sm text-slate-600 mt-1">
Remplace ces placeholders quand tu auras tes vraies réalisations
.</p>

 </div>
    
    </header>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <article key={p.id} className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <div className="h-36 w-full rounded-md bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
          </div>

          <h2 className="text-lg font-semibold">{p.title}</h2>
          <p className="text-sm text-slate-600 mt-2 flex-grow">{p.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="text-xs px-2 py-1 bg-slate-100 rounded-full border">{s}</span>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <Link href={p.liveUrl ?? "#"} className="ml-auto inline-flex items-center px-3 py-2 rounded-lg border text-sm">
              Voir
            </Link>
            <Link href={`/projects/${p.id}`} className="inline-flex items-center px-3 py-2 rounded-lg text-sm bg-slate-100">
              Détails
            </Link>
          </div>
        </article>
      ))}
    </section>

    <div className="mt-10 text-center text-sm text-slate-600">
      Tu n'as pas encore de projets ? Commence par créer une simple page vitrine et remplace l'un des placeholders.
      <br />
      Besoin d'aide ? Je peux générer la page de détail d'un projet, le composant Navbar, ou un template de formulaire de contact.
    </div>
  </div>
</main>

); }

