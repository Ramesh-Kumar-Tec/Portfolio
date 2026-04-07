import { marketingServices } from '../data/services';

export const StaticWebsiteServices = () => (
  <section id="marketing" className="py-16 md:py-20 bg-white dark:bg-black theme-transition">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
        <span className="text-blue-600 dark:text-white font-semibold text-xs sm:text-sm uppercase tracking-wide italic"><i className="fas fa-code"></i> Professional Services</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 dark:text-white">Static Website Development</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm sm:text-base">Complete static website development — from design to deployment</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
        {marketingServices.map((service, idx) => (
          <div key={idx} className="bg-gray-50 dark:bg-zinc-950 rounded-2xl p-5 sm:p-6 border border-gray-100 dark:border-zinc-900 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 dark:bg-zinc-900 flex items-center justify-center text-blue-600 dark:text-white mb-4">
              <i className={`fas ${service.icon} text-xl sm:text-2xl`}></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">{service.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-black dark:to-zinc-900 rounded-2xl p-6 sm:p-8 text-white text-center shadow-xl border border-transparent dark:border-zinc-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">📄 Looking for a website?</h3>
            <p className="opacity-90 mt-1 text-sm sm:text-base">Landing pages, portfolios, or corporate sites — built with modern tech.</p>
          </div>
          <a href="#contact" className="bg-white text-blue-700 dark:bg-white dark:text-black px-5 sm:px-6 py-2.5 rounded-full font-semibold shadow-md hover:bg-gray-100 transition text-sm sm:text-base">Request a quote</a>
        </div>
      </div>
    </div>
  </section>
);
