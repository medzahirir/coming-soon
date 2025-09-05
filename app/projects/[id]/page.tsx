// Place this file in: app/projects/[id]/page.tsx // Page de détail pour un projet spécifique (placeholder) — Next.js (App Router)

import Link from "next/link"; import { notFound } from "next/navigation";

type Project = { id: string; title: string; description: string; content: string; stack: string[]; liveUrl?: string; };

// ⚠️ À terme, tu peux remplacer par une DB ou API const projects: Project[] = [ { id: "site-vitrine", title: "Site Vitrine (placeholder)", description: "Page d'accueil simple avec sections À propos, Services et Contact (en développement).", content: "Ceci est une démo de projet vitrine. Dans le futur, tu pourras ajouter des captures d'écran, les fonctionnalités principales et même un lien vers le code source GitHub.", stack: ["HTML", "CSS", "Tailwind", "Next.js"], liveUrl: "#", }, { id: "portfolio-coming-soon", title: "Portfolio Coming-Soon", description: "Template simple pour annoncer mon site et présenter mes compétences.", content: "Un petit projet qui sert d'introduction à mon futur portfolio complet. Il affiche ma photo, mes compétences, et un bouton WhatsApp pour me contacter.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "#", }, ];

export default function ProjectDetailPage({ params }: { params: { id: string } }) { const project = projects.find((p) => p.id === params.id);

if (!project) return notFound();

return ( <main className="min-h-screen bg-slate-50 text-slate-900"> <div className="max-w-3xl mx-auto px-4 py-12"> <Link href="/projects" className="inline-block mb-6 text-sm text-green-600">← Retour aux projets</Link>

<h1 className="text-3xl font-bold mb-2">{project.title}</h1>
    <p className="text-slate-600 mb-6">{project.description}</p>

    <div className="bg-white rounded-2xl shadow p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Détails</h2>
      <p className="text-slate-700 leading-relaxed">{project.content}</p>
    </div>

    <div className="flex flex-wrap gap-2 mb-6">
      {project.stack.map((s) => (
        <span key={s} className="text-xs px-3 py-1 bg-slate-100 rounded-full border">{s}</span>
      ))}
    </div>

    <div className="flex gap-4">
      {project.liveUrl && (
        <Link href={project.liveUrl} className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm">
          Voir le site
        </Link>
      )}
      <Link href="/contact" className="px-4 py-2 rounded-lg border text-sm">
        Me contacter
      </Link>
    </div>
  </div>
</main>

); }

