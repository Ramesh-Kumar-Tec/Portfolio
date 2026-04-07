import { useState, useEffect } from 'react';
import { projectImages } from '../utils/imageMap';
import { ImageModal } from './ImageModal';

export const ProjectCard = ({ project }) => {
  const images = projectImages[project.id] || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc, label) => {
    setSelectedImage({ src: imgSrc, alt: label });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen]);
  
  return (
  <div className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-zinc-800 card-hover transition-all flex flex-col h-full">
    <div className="p-5 sm:p-6 flex-1">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <i className={`fas ${project.icon} text-2xl sm:text-3xl text-blue-600 dark:text-white`}></i>
          <span className="project-tag bg-blue-50 dark:bg-zinc-900 text-blue-700 dark:text-white">{project.category}</span>
        </div>
        <span className="fullstack-badge bg-green-100 dark:bg-zinc-900 text-green-700 dark:text-green-300">
          <i className="fas fa-code-branch text-xs"></i> Full Stack
        </span>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
      {project.subtitle && <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{project.subtitle}</p>}
      
      {/* Role Section - Full Stack Contribution */}
      <div className="mt-3 mb-3 p-3 bg-gray-50 dark:bg-zinc-900 rounded-xl border-l-4 border-black dark:border-white">
        <p className="text-xs font-semibold text-black dark:text-white flex items-center gap-1 mb-1">
          <i className="fas fa-code"></i> <i className="fas fa-database"></i> My Full Stack Contribution
        </p>
        <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{project.myRole}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-[10px] bg-white dark:bg-black px-2 py-0.5 rounded-full dark:text-gray-300">Frontend: React</span>
          <span className="text-[10px] bg-white dark:bg-black px-2 py-0.5 rounded-full dark:text-gray-300">Backend: Node/Express</span>
          <span className="text-[10px] bg-white dark:bg-black px-2 py-0.5 rounded-full dark:text-gray-300">Database: MongoDB</span>
        </div>
      </div>
      
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3">{project.description}</p>
      
      {/* Screenshot Grid - Using Actual Images */}
      {images && images.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-1"><i className="fas fa-image"></i> Project Screenshots</p>
          <div className="screenshot-grid">
            {images.map((imgSrc, idx) => (
              <div 
                key={idx} 
                className="rounded-lg overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 cursor-pointer relative group h-32"
                onClick={() => openModal(imgSrc, project.screenshotLabels?.[idx] || `${project.title} - Screen ${idx+1}`)}
              >
                <img 
                  src={imgSrc} 
                  alt={project.screenshotLabels?.[idx] || `${project.title} - Screen ${idx+1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1 text-center group-hover:bg-white/90 group-hover:dark:bg-black/90 transition-colors">
                  <span className="text-[10px] text-white block truncate group-hover:text-black group-hover:dark:text-white">{project.screenshotLabels?.[idx] || `Screen ${idx+1}`}</span>
                  <span className="text-[9px] text-gray-300">Click to view</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Coming Soon Badge */}
      {project.comingSoon && (
        <div className="mb-4">
          <div className="bg-amber-50 dark:bg-zinc-950 border border-amber-200 dark:border-zinc-800 rounded-lg p-3 text-center">
            <i className="fas fa-code-branch text-amber-500 mr-2"></i>
            <span className="text-amber-700 dark:text-amber-400 text-sm font-medium">Development in Progress</span>
          </div>
        </div>
      )}
      
      <div className="mb-3 flex flex-wrap gap-2">
        {project.techStack.map((tech, idx) => (
          <span key={idx} className="text-xs bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">{tech}</span>
        ))}
      </div>
      <ul className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm space-y-1">
        {project.highlights.map((point, i) => (
          <li key={i} className="flex items-start gap-2"><i className="fas fa-check-circle text-green-500 text-xs mt-0.5"></i><span>{point}</span></li>
        ))}
      </ul>
    </div>
    <div className="border-t border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 px-5 sm:px-6 py-3 flex justify-between items-center">
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {project.inProgress ? <><i className="fas fa-spinner fa-pulse mr-1"></i> Development</> : <><i className="far fa-eye"></i> Live Demo</>}
      </span>
      {project.liveLink && !project.inProgress ? (
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-white text-sm font-semibold hover:underline flex items-center gap-1">Visit <i className="fas fa-external-link-alt text-xs"></i></a>
      ) : (
        <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold flex items-center gap-1"><i className="fas fa-code-branch"></i> Building...</span>
      )}
    </div>
    <ImageModal 
      isOpen={isModalOpen} 
      imageSrc={selectedImage?.src} 
      altText={selectedImage?.alt}
      onClose={closeModal}
    />
  </div>
  );
};
