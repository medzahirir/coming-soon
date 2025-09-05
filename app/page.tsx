"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaPhp, FaJava, FaPython, FaDatabase, FaAws, FaMicrosoft, FaWhatsapp 
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiBootstrap, SiMongodb, SiPostgresql, SiJira, SiScrumalliance } from "react-icons/si";

export default function Home() {
  const targetDate = new Date("2025-12-31T23:59:59");
  const [timeLeft, setTimeLeft] = useState("");
  
  const [menuOpen, setMenuOpen] = useState(false);
    
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // active après 50px
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


     useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft("🚀 Launch Time!");
        clearInterval(timer);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${days}j ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const groups = [
    {
      title: "💻 Langages de programmation",
      skills: [
        { name: "C#", level: 70, icon: <FaMicrosoft className="text-blue-500" /> },
        { name: "ASP.NET", level: 50, icon: <FaMicrosoft className="text-blue-600" /> },
        { name: ".NET Core", level: 50, icon: <FaMicrosoft className="text-blue-600" /> },
        { name: "PHP", level: 40, icon: <FaPhp className="text-purple-500" /> },
        { name: "Python", level: 35, icon: <FaPython className="text-yellow-400" /> },
        { name: "Java", level: 50, icon: <FaJava className="text-red-600" /> },
      ],
    },
    {
      title: "🗄️ Bases de données",
      skills: [
        { name: "SQL Server", level: 60, icon: <FaDatabase className="text-blue-500" /> },
        { name: "MySQL", level: 60, icon: <FaDatabase className="text-green-500" /> },
        { name: "MongoDB", level: 20, icon: <SiMongodb className="text-green-400" /> },
        { name: "PostgreSQL", level: 20, icon: <SiPostgresql className="text-blue-700" /> },
      ],
    },
    {
      title: "🌐 Web",
      skills: [
        { name: "HTML5", level: 70, icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", level: 60, icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", level: 60, icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    {
      title: "🎨 Framework CSS",
      skills: [
        { name: "Bootstrap", level: 60, icon: <SiBootstrap className="text-purple-600" /> },
        { name: "TailwindCSS", level: 70, icon: <SiTailwindcss className="text-blue-400" /> },
      ],
    },
    {
      title: "⚛️ Framework JS",
      skills: [
        { name: "Angular", level: 40, icon: <FaAngular className="text-red-600" /> },
        { name: "ReactJS", level: 40, icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", level: 40, icon: <SiNextdotjs className="text-white" /> },
      ],
    },
    {
      title: "📊 Gestion de projet & Déploiement",
      skills: [
        { name: "Scrum / Agile", level: 60, icon: <SiScrumalliance className="text-purple-400" /> },
        { name: "Jira / Trello", level: 55, icon: <SiJira className="text-blue-500" /> },
        { name: "Azure", level: 50, icon: <FaMicrosoft className="text-blue-600" /> },
        { name: "AWS", level: 40, icon: <FaAws className="text-orange-500" /> },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-6">
      
      
{/* Navbar */}
<motion.nav
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
  scrolled 
    ? "bg-gray-900/95 shadow-lg backdrop-blur-md" 
    : "bg-transparent"
}`}
>
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo */}
    <Link href="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition">
      MZ Portfolio
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-8 text-gray-300">
      <Link href="/" className="hover:text-green-400 transition">Accueil</Link>
      <Link href="/projects" className="hover:text-green-400 transition">Projets</Link>
      <Link href="/contact" className="hover:text-green-400 transition">Contact</Link>
      <Link href="/about" className="hover:text-green-400 transition">À propos</Link>
    </div>

    {/* Mobile Burger */}
    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-300 focus:outline-none"
      >
        {menuOpen ? "✖" : "☰"}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="md:hidden bg-gray-800/95 flex flex-col items-center py-4 space-y-4"
    >
      <Link href="/" className="hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>Accueil</Link>
      <Link href="/projects" className="hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>Projets</Link>
      <Link href="/contact" className="hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
      <Link href="/about" className="hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>À propos</Link>
    </motion.div>
  )}
</motion.nav>

    

      {/* Avatar + Infos */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-8"
      >
        <Image
          src="/avatar.jpg" // mettre votre photo ici dans /public
          alt="Avatar"
          width={140}
          height={140}
          className="rounded-full border-4 border-green-400 shadow-lg"
        />
        <h1 className="text-3xl font-bold mt-4">MOHAMED ZOUHAIRI</h1>
        <p className="text-gray-400">IT TSDI Developer Web</p>
      </motion.div>

      {/* Compteur */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-xl mb-8 text-center"
      >
        🚀 Lancement prévu dans :{" "}
        <span className="font-mono text-green-400">{timeLeft}</span>
      </motion.p>





      {/* Compétences */}
      <div className="w-full max-w-4xl space-y-8">
        {groups.map((group, gIdx) => (
          <motion.div
            key={gIdx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: gIdx * 0.2 }}
            className="bg-gray-800/50 rounded-2xl p-6 shadow-lg hover:scale-105 transform transition"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">{group.title}</h2>
            <div className="space-y-4">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <span className="flex items-center gap-2">{skill.icon} {skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Formations / Activités */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-12 w-full max-w-3xl bg-gray-800/40 p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">📌 Mes Activités & Formations</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
          <li>💻 Formation en développement web</li>
          <li>📊 Formation bureautique (Excel, Word, PPT)</li>
          <li>🎨 Infographie & design publicitaire</li>
          <li>🤖 Formation en IA Générative</li>
        </ul>
      </motion.div>

      {/* WhatsApp */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2 }}
        className="mt-8 flex flex-col items-center mb-12"
      >
        <a
          href="https://wa.me/212659507250"
          target="_blank"
          className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
        >
          <FaWhatsapp size={28} />
          Contactez-moi sur WhatsApp
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm text-center">
        © 2025 MOHAMED ZOUHAIRI | Tous droits réservés
      </footer>
    </main>
  );
}
