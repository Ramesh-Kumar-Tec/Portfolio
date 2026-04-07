import { coreSkills } from '../data/services';

export const Skills = () => (
  <section id="skills" className="py-16 md:py-20 bg-gray-50 dark:bg-black theme-transition">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      <h2 className="section-title dark:border-white text-gray-900 dark:text-white uppercase tracking-tighter">⚙️ Expertise</h2>
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">Technology Spectrum</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
            Broad range of experience in modern full-stack ecosystem. From building highly interactive React frontends to robust MongoDB data architectures.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {coreSkills.map((skill, i) => (
              <span key={i} className="skill-badge bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-sm hover:border-blue-300 dark:hover:border-zinc-600 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-black rounded-3xl p-8 shadow-2xl border border-zinc-100 dark:border-zinc-900 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-1000"></div>
          <h3 className="font-bold text-xl flex items-center gap-2 mb-8 dark:text-white border-b border-zinc-100 dark:border-zinc-900 pb-4">
            <i className="fas fa-server text-blue-500"></i> Backend & Performance
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1.5"><span className="text-sm font-semibold dark:text-gray-300">Scalable REST APIs (Node/Express)</span> <span className="text-xs font-mono opacity-50">95%</span></div>
              <div className="w-full bg-zinc-100 dark:bg-zinc-900 rounded-full h-1.5 overflow-hidden"><div className="bg-black dark:bg-white h-full rounded-full w-[95%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-1.5"><span className="text-sm font-semibold dark:text-gray-300">Architecture & Database Modeling</span> <span className="text-xs font-mono opacity-50">90%</span></div>
              <div className="w-full bg-zinc-100 dark:bg-zinc-900 rounded-full h-1.5 overflow-hidden"><div className="bg-black dark:bg-white h-full rounded-full w-[90%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-1.5"><span className="text-sm font-semibold dark:text-gray-300">Auth & Security Systems (JWT)</span> <span className="text-xs font-mono opacity-50">88%</span></div>
              <div className="w-full bg-zinc-100 dark:bg-zinc-900 rounded-full h-1.5 overflow-hidden"><div className="bg-black dark:bg-white h-full rounded-full w-[88%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-1.5"><span className="text-sm font-semibold dark:text-gray-300">Frontend State Management (Context/Redux)</span> <span className="text-xs font-mono opacity-50">92%</span></div>
              <div className="w-full bg-zinc-100 dark:bg-zinc-900 rounded-full h-1.5 overflow-hidden"><div className="bg-blue-600 h-full rounded-full w-[92%]"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
