export const Hero = () => (
  <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20 lg:py-24">
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-12">
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-zinc-900 text-blue-700 dark:text-white px-4 py-1.5 rounded-full text-xs font-bold border border-blue-100 dark:border-zinc-800 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Opportunities
          </div>
          <div className="inline-flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-zinc-200 dark:border-zinc-800">
            <i className="fas fa-briefcase text-blue-500"></i> Internship: EL-ROI IT SOLUTIONS
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          Crafting <span className="text-blue-600 dark:text-white">Digital</span> <br/> 
          <span className="gradient-text">Experiences</span>
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
          MERN Stack Specialist turning complex problems into <span className="text-black dark:text-white border-b-2 border-blue-500/30">elegant, scalable web solutions</span>. 
          Currently pursuing internship at <strong className="text-blue-600 dark:text-white">EL-ROI IT SOLUTIONS</strong>, Valasaravakam.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
          <a href="#projects" className="bg-black dark:bg-white text-white dark:text-black hover:scale-105 active:scale-95 px-8 py-4 rounded-full font-bold shadow-2xl transition-all flex items-center gap-2 group">
            Explore My Work <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
          <a href="#contact" className="border-2 border-zinc-200 dark:border-zinc-800 bg-transparent text-black dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
            Get In Touch
          </a>
        </div>
        
        <div className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mr-2">Top Skills:</span>
          <span className="fullstack-badge"><i className="fab fa-react text-cyan-400"></i> React</span>
          <span className="fullstack-badge"><i className="fab fa-node-js text-green-500"></i> Node.js</span>
          <span className="fullstack-badge"><i className="fas fa-database text-green-600"></i> MongoDB</span>
          <span className="fullstack-badge"><i className="fas fa-lock text-amber-500"></i> JWT</span>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 dark:from-white/20 dark:to-zinc-800/20 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
          <div className="relative bg-white dark:bg-black rounded-2xl shadow-xl p-4 border border-gray-200 dark:border-zinc-800">
            <div className="flex flex-col items-center">
              <i className="fas fa-layer-group text-5xl sm:text-6xl text-blue-600 dark:text-white mb-2"></i>
              <div className="flex gap-3 mt-2">
                <i className="fab fa-react text-2xl text-cyan-500"></i>
                <i className="fab fa-node-js text-2xl text-green-600"></i>
                <i className="fas fa-database text-2xl text-green-500"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
