export const ImageModal = ({ isOpen, imageSrc, altText, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-5xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <img 
          src={imageSrc} 
          alt={altText}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
          title="Close (ESC)"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>
    </div>
  );
};
