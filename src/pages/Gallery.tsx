import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Filter } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import LogoWatermark from '../components/LogoWatermark';
import { galleryData } from '../data/gallery';
import type { GalleryItem } from '../types';

const categories = ['All', 'Workshops', 'Hackathons', 'Research Activities', 'Technical Events', 'Council Activities'];
const years = ['All', '2026', '2025'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = galleryData.filter(item => {
    const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    const yearMatch = selectedYear === 'All' || item.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  const openLightbox = (item: GalleryItem) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setLightboxIndex(index >= 0 ? index : 0);
    setSelectedImage(item);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? (lightboxIndex + 1) % filteredItems.length
      : (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, lightboxIndex, filteredItems]);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <LogoWatermark />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-light-text dark:text-dark-text mb-6">
              Event <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
              Relive the moments from our workshops, hackathons, research activities, and council events.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Filter className="w-4 h-4 text-gray-500" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-dark-accent to-dark-accent-secondary text-white'
                        : 'bg-light-surface dark:bg-dark-surface text-light-muted dark:text-dark-muted border border-light-border dark:border-dark-border hover:border-dark-accent/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedYear === year
                        ? 'bg-gradient-to-r from-dark-accent to-dark-accent-secondary text-white'
                        : 'bg-light-surface dark:bg-dark-surface text-light-muted dark:text-dark-muted border border-light-border dark:border-dark-border hover:border-dark-accent/50'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(item)}
                  className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-dark-accent/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.eventName}
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-poppins font-semibold text-white text-sm mb-1">
                      {item.eventName}
                    </h3>
                    <p className="text-xs text-gray-300 mb-1">{item.description}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <MapPin className="w-3 h-3" />
                      {item.venue}
                    </div>
                  </div>

                  <div className="p-4 group-hover:opacity-0 transition-opacity">
                    <h3 className="font-poppins font-semibold text-sm text-light-text dark:text-dark-text mb-1">
                      {item.eventName}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {item.year}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] mx-4"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.eventName}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="font-poppins font-semibold text-xl text-white">
                  {selectedImage.eventName}
                </h3>
                <p className="text-gray-300 mt-1">{selectedImage.description}</p>
                <div className="flex items-center justify-center gap-4 mt-2 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedImage.venue}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedImage.year}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
