import { useState } from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button onClick={toggleTheme} className="relative w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none shadow-sm">
    {theme === 'dark' ? <i className="fas fa-sun text-yellow-400 text-lg"></i> : <i className="fas fa-moon text-gray-700 text-lg"></i>}
  </button>
);

export const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Expertise", href: "#skills" },
    { label: "Connect", href: "#contact" },
  ];

  return (
    <header className="bg-white/90 dark:bg-black/90 backdrop-blur-xl sticky top-0 z-50 border-b border-zinc-100 dark:border-zinc-900 theme-transition shadow-[0_1px_10px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex flex-wrap justify-between items-center gap-4">
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-black group-hover:scale-110 transition-transform">
            <i className="fas fa-code text-xl"></i>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-black text-xl tracking-tighter uppercase dark:text-white">RAMESH <span className="text-blue-600 dark:text-zinc-500">KUMAR R</span></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">Full Stack Devloper</span>
          </div>
        </a>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden md:flex gap-8 text-zinc-500 dark:text-zinc-400 font-bold text-xs uppercase tracking-widest">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-black dark:hover:text-white transition-colors relative group py-2">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <a href="#contact" className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all hidden sm:block">Hire Me</a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden w-10 h-10 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-600 dark:text-zinc-400"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900 px-4 py-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-black uppercase tracking-tighter hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 bg-black dark:bg-white text-white dark:text-black h-12 flex items-center justify-center rounded-xl font-black uppercase tracking-widest text-xs"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
