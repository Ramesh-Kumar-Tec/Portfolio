import { useState } from 'react';
import { projectsList } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projectsList : projectsList.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <section id="projects" className="bg-gray-50 dark:bg-black py-16 md:py-20 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <span className="text-zinc-400 dark:text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">Selection</span>
            <h2 className="text-4xl sm:text-5xl font-black dark:text-white mt-1">Featured Works</h2>
          </div>
          <div className="flex flex-wrap gap-2 bg-zinc-100 dark:bg-zinc-900/50 p-1.5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50">
            <button onClick={() => setFilter("all")} className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filter === "all" ? "bg-black dark:bg-white text-white dark:text-black shadow-lg" : "text-zinc-500 hover:text-black dark:hover:text-white"}`}>All</button>
            <button onClick={() => setFilter("3d")} className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filter === "3d" ? "bg-black dark:bg-white text-white dark:text-black shadow-lg" : "text-zinc-500 hover:text-black dark:hover:text-white"}`}>3D</button>
            <button onClick={() => setFilter("crm")} className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filter === "crm" ? "bg-black dark:bg-white text-white dark:text-black shadow-lg" : "text-zinc-500 hover:text-black dark:hover:text-white"}`}>CRM</button>
            <button onClick={() => setFilter("inventory")} className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filter === "inventory" ? "bg-black dark:bg-white text-white dark:text-black shadow-lg" : "text-zinc-500 hover:text-black dark:hover:text-white"}`}>Inventory</button>
            <button onClick={() => setFilter("mobile")} className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filter === "mobile" ? "bg-black dark:bg-white text-white dark:text-black shadow-lg" : "text-zinc-500 hover:text-black dark:hover:text-white"}`}>Mobile</button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Tech Stack Note */}
        <div className="mt-10 p-4 bg-white dark:bg-zinc-950 rounded-xl border border-gray-200 dark:border-zinc-900 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <i className="fas fa-layer-group text-blue-500 dark:text-white mr-2"></i>
            <strong className="dark:text-white">Full Stack Engineering:</strong> Designing scalable backends, secure APIs, and dynamic user interfaces.
          </p>
        </div>
      </div>
    </section>
  );
};
