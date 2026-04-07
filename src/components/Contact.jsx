export const Contact = () => (
  <section id="contact" className="py-16 md:py-20 bg-white dark:bg-black theme-transition">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center">
      <h2 className="section-title text-center border-l-0 pb-2 dark:border-blue-500 uppercase tracking-tighter">📢 Connect With Me</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8 text-base md:text-lg">
        Available for full stack development projects and innovative collaborations.
      </p>
      
      <div className="flex flex-wrap justify-center gap-5 sm:gap-8 mb-12">
        <a href="https://github.com/Ramesh-Kumar-Tec" target="_blank" rel="noopener noreferrer" className="nav-social-btn group">
          <div className="w-14 h-14 bg-zinc-50 dark:bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:scale-110 group-hover:border-black dark:group-hover:border-white transition-all shadow-sm">
            <i className="fab fa-github text-2xl text-black dark:text-white"></i>
          </div>
          <span className="text-[10px] uppercase font-black tracking-widest mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
        </a>
        
        <a href="https://www.linkedin.com/in/ramesh-kumar-6a4a932a3" target="_blank" rel="noopener noreferrer" className="nav-social-btn group">
          <div className="w-14 h-14 bg-zinc-50 dark:bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:scale-110 group-hover:border-blue-600 transition-all shadow-sm">
            <i className="fab fa-linkedin-in text-2xl text-blue-600"></i>
          </div>
          <span className="text-[10px] uppercase font-black tracking-widest mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
        </a>
        
        <a href="mailto:rameshkumar25.work@gmail.com" className="nav-social-btn group">
          <div className="w-14 h-14 bg-zinc-50 dark:bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:scale-110 group-hover:border-red-500 transition-all shadow-sm">
            <i className="fas fa-envelope text-2xl text-red-500"></i>
          </div>
          <span className="text-[10px] uppercase font-black tracking-widest mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
        </a>
      </div>

      {/* Google Contact Form */}
      <div className="mb-16 bg-white dark:bg-black rounded-3xl overflow-hidden shadow-2xl border border-zinc-100 dark:border-zinc-900 mx-auto max-w-4x">
        <div className="bg-zinc-50 dark:bg-zinc-900/50 py-4 px-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-xs font-black tracking-widest uppercase text-zinc-400 ml-4">Inquiry Messenger</span>
          </div>
        </div>
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] bg-white dark:bg-zinc-950">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSd1Qf7UA1P-0WyfYWz2FN7FO6_2Es-on6MvKjPUydWDioXYNg/viewform?embedded=true" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            className="absolute inset-0 grayscale-[0.1] contrast-[1.02] dark:invert dark:hue-rotate-180 dark:brightness-[0.85] transition-all duration-500"
          >
            Loading form…
          </iframe>
        </div>
      </div>
      
      <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl p-8 max-w-2xl mx-auto border border-zinc-100 dark:border-zinc-800 shadow-2xl">
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <div className="text-left space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                <i className="fas fa-paper-plane text-blue-600 dark:text-blue-400"></i>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-zinc-400">Professional Email</p>
                <p className="text-sm font-bold dark:text-white">rameshkumar25.work@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
                <i className="fas fa-phone text-green-600 dark:text-green-400"></i>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-zinc-400">Contact Number</p>
                <p className="text-sm font-bold dark:text-white">+91 90036 73584</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-black rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
            <p className="text-sm dark:text-gray-400 leading-relaxed italic">
              "Building high-performance digital solutions with meticulous attention to detail."
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <footer className="mt-20 py-10 border-t border-zinc-100 dark:border-zinc-900 text-center">
      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-600">
        © 2026 RAMESH KUMAR R — Full Stack Development Portfolio
      </p>
    </footer>
  </section>
);
