import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { GALLERY_IMAGES } from '../data/academyData';
import { Camera, X, Maximize2, Sparkles } from 'lucide-react';

interface GalleryProps {
  lang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const categories = ['All', 'Training', 'Matches', 'Facilities', 'Pitch'];

  const filteredImages = activeFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'Photo Gallery & Highlights' : 'Galerie Photos & Temps Forts'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            {lang === 'en'
              ? 'Capturing the intensity, joy, discipline, and unity of our players in Bamako.'
              : 'Découvrez l’intensité, la joie, la discipline et l’union de nos joueurs.'}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#1E4E92] text-white shadow-md'
                  : 'bg-[#F5F7FA] text-gray-600 hover:text-[#153E75]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveImage(img)}
              className="group relative rounded-3xl overflow-hidden h-72 shadow-md hover:shadow-2xl cursor-pointer border border-gray-100"
            >
              <img
                src={img.url}
                alt={img.title[lang]}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#153E75]/90 via-[#153E75]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DCEBFF]">
                  {img.category}
                </span>
                <h4 className="text-base font-bold font-heading line-clamp-1">
                  {img.title[lang]}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl bg-[#153E75] text-white"
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={activeImage.url}
                  alt={activeImage.title[lang]}
                  className="max-h-[75vh] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-[#60A5FA]">
                    {activeImage.category}
                  </span>
                  <h3 className="text-xl font-bold font-heading mt-0.5">
                    {activeImage.title[lang]}
                  </h3>
                </div>

                <div className="text-xs text-[#DCEBFF]/70">
                  TANDEM FOOT CLUB • Bamako, Mali
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
