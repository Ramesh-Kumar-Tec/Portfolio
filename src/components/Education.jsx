import React from 'react';

export const Education = () => {
  const education = [
    {
      degree: "MCA(COMPUTER APPLICATION)",
      institution: "A.V.V.M Sri Pushpam College, Thanjavur",
      duration: "2023 - 2025",
      score: "CGPA - 8.4"
    },
    {
      degree: "B.Sc in computer science",
      institution: "Annai Velankanni arts and science college, Thanjavur",
      duration: "2020 - 2023",
      score: "CGPA - 8.4"
    }
  ];

  const certifications = [
    "Java Full Stack Training - Besant Technologies (Chennai)",
    "Application Development Web and Mobile - Jayaram Educational Trust (Thanjavur)"
  ];

  return (
    <section id="education" className="py-16 md:py-20 bg-white dark:bg-black theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <h2 className="section-title dark:border-white">🎓 Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <i className="fas fa-user-graduate text-blue-600 dark:text-white"></i> Academic Details
            </h3>
            {education.map((item, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-gray-100 dark:border-zinc-800 pb-1">
                <div className="absolute w-3 h-3 bg-blue-600 dark:bg-white rounded-full -left-[7px] top-1.5"></div>
                <h4 className="font-bold text-lg dark:text-white">{item.degree}</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium">{item.institution}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full font-semibold">{item.duration}</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-white">{item.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 dark:bg-zinc-950 rounded-2xl p-6 border border-gray-100 dark:border-zinc-900 self-start">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-certificate text-blue-600 dark:text-white"></i> Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex gap-3">
                  <i className="fas fa-check-circle text-green-500 mt-1"></i>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
