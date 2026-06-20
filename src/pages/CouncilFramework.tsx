import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Calendar, FlaskConical, Palette, Users, Wallet, Settings, FileText, X, ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import LogoWatermark from '../components/LogoWatermark';
import { councilsData } from '../data/councils';
import type { Council } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Calendar,
  FlaskConical,
  Palette,
  Users,
  Wallet,
  Settings,
  FileText,
};

export default function CouncilFramework() {
  const [selectedCouncil, setSelectedCouncil] = useState<Council | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <LogoWatermark />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-light-text dark:text-dark-text mb-6">
              Council <span className="text-gradient">Framework</span>
            </h1>
            <p className="text-lg text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
              Explore the organizational structure of VVISC and discover how each council contributes to our mission of innovation and excellence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Network Visualization */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative">
              {/* Central Node */}
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-accent to-dark-accent-secondary rounded-2xl blur-xl opacity-50" />
                  <div className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-dark-accent to-dark-accent-secondary text-white font-poppins font-bold text-xl">
                    VVISC Council
                  </div>
                </motion.div>
              </div>

              {/* Connection Lines */}
              <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-dark-accent to-transparent" />

              {/* Council Nodes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-6">
                {councilsData.map((council, index) => {
                  const Icon = iconMap[council.icon] || Settings;
                  return (
                    <motion.button
                      key={council.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedCouncil(council)}
                      className="group relative p-4 lg:p-6 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-dark-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-dark-accent/10"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-dark-accent/20 to-dark-accent-secondary/20 flex items-center justify-center group-hover:from-dark-accent group-hover:to-dark-accent-secondary transition-all">
                          <Icon className="w-6 h-6 text-dark-accent group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-xs lg:text-sm font-medium text-light-text dark:text-dark-text text-center">
                          {council.shortName}
                        </span>
                      </div>
                      <div className="hidden lg:block absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-t from-dark-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Council Details Cards */}
      <section className="py-12 lg:py-20 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-poppins font-bold text-3xl text-center text-light-text dark:text-dark-text mb-12">
              Council <span className="text-gradient">Details</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {councilsData.map((council, index) => {
              const Icon = iconMap[council.icon] || Settings;
              return (
                <ScrollReveal key={council.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group p-6 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-dark-accent/50 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedCouncil(council)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dark-accent to-dark-accent-secondary flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-light-text dark:text-dark-text">
                          {council.name}
                        </h3>
                        <span className="text-xs text-dark-accent">{council.shortName}</span>
                      </div>
                    </div>
                    <p className="text-sm text-light-muted dark:text-dark-muted mb-4">
                      Click to explore responsibilities and contributions.
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium text-dark-accent">
                      Learn More
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCouncil && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCouncil(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedCouncil(null)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const Icon = iconMap[selectedCouncil.icon] || Settings;
                  return (
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-dark-accent to-dark-accent-secondary flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  );
                })()}
                <div>
                  <h2 className="font-poppins font-bold text-2xl text-light-text dark:text-dark-text">
                    {selectedCouncil.name}
                  </h2>
                  <span className="text-sm text-dark-accent">{selectedCouncil.shortName}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-light-text dark:text-dark-text mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-dark-accent" />
                    Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {selectedCouncil.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-light-muted dark:text-dark-muted">
                        <ChevronRight className="w-4 h-4 text-dark-accent mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-light-text dark:text-dark-text mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-dark-accent" />
                    Contributions
                  </h3>
                  <ul className="space-y-2">
                    {selectedCouncil.contributions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-light-muted dark:text-dark-muted">
                        <ChevronRight className="w-4 h-4 text-dark-accent mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
