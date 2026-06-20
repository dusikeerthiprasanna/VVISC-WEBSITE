import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram, Github, ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import LogoWatermark from '../components/LogoWatermark';
import { executivePanel, facultyCoordinators, leadsData, membersData } from '../data/team';
import type { TeamMember } from '../types';

function TeamCard({ member, variant = 'default' }: { member: TeamMember; variant?: 'executive' | 'faculty' | 'default' }) {
  const [hovered, setHovered] = useState(false);

  const variants = {
    executive: 'bg-gradient-to-br from-dark-accent/10 to-dark-accent-secondary/10 border-dark-accent/30',
    faculty: 'bg-light-surface dark:bg-dark-surface border-light-border dark:border-dark-border',
    default: 'bg-light-surface dark:bg-dark-surface border-light-border dark:border-dark-border',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg hover:shadow-dark-accent/10 ${variants[variant]}`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-light-bg dark:border-dark-bg shadow-lg">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          {variant === 'executive' && (
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-dark-accent to-dark-accent-secondary flex items-center justify-center">
              <span className="text-white text-xs font-bold">{member.position[0]}</span>
            </div>
          )}
        </div>

        <h3 className="font-poppins font-semibold text-lg text-light-text dark:text-dark-text">
          {member.name}
        </h3>
        <p className="text-sm text-dark-accent font-medium mb-1">{member.position}</p>
        {member.rollNumber && (
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">{member.rollNumber}</p>
        )}
        {member.department && (
          <p className="text-xs text-gray-500 dark:text-gray-500">{member.department}</p>
        )}
        

        <AnimatePresence>
          {hovered && member.social && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex gap-2 mt-4"
            >
              {member.social.linkedin && (
                <a href={member.social.linkedin} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-dark-accent/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-light-muted dark:text-dark-muted" />
                </a>
              )}
              
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const [expandedCouncil, setExpandedCouncil] = useState<string | null>(null);

  const toggleCouncil = (name: string) => {
    setExpandedCouncil(expandedCouncil === name ? null : name);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <LogoWatermark />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-light-text dark:text-dark-text mb-6">
              Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
              Meet the dedicated individuals who drive innovation and excellence at VVISC.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Executive Panel */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-poppins font-bold text-3xl text-center text-light-text dark:text-dark-text mb-12">
              Executive <span className="text-gradient">Panel</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executivePanel.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 0.1}>
                <TeamCard member={member} variant="executive" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Coordinators */}
      <section className="py-12 lg:py-20 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-poppins font-bold text-3xl text-center text-light-text dark:text-dark-text mb-12">
              Faculty <span className="text-gradient">Coordinators</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {facultyCoordinators.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 0.1}>
                <TeamCard member={member} variant="faculty" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leads & Associate Leads */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-poppins font-bold text-3xl text-center text-light-text dark:text-dark-text mb-12">
              Leads & <span className="text-gradient">Associate Leads</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {Object.entries(leadsData).map(([councilName, members], councilIndex) => (
              <ScrollReveal key={councilName} delay={councilIndex * 0.1}>
                <div className="rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border overflow-hidden">
                  <button
                    onClick={() => toggleCouncil(councilName)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <h3 className="font-poppins font-semibold text-lg text-light-text dark:text-dark-text">
                      {councilName}
                    </h3>
                    {expandedCouncil === councilName ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  <AnimatePresence>
                    {(expandedCouncil === councilName || expandedCouncil === null) && (
                      <motion.div
                        initial={expandedCouncil !== null ? { height: 0, opacity: 0 } : false}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 grid sm:grid-cols-2 gap-4">
                          {members.map((member) => (
                            <TeamCard key={member.id} member={member} />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-12 lg:py-20 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-poppins font-bold text-3xl text-center text-light-text dark:text-dark-text mb-12">
              Council <span className="text-gradient">Members</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {Object.entries(membersData).map(([councilName, members], councilIndex) => (
              <ScrollReveal key={councilName} delay={councilIndex * 0.1}>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-light-text dark:text-dark-text mb-4">
                    {councilName}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {members.map((member) => (
                      <motion.div
                        key={member.id}
                        whileHover={{ y: -3 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-dark-accent/30 transition-all"
                      >
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="min-w-0">
                          <p className="font-medium text-sm text-light-text dark:text-dark-text truncate">
                            {member.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            {member.rollNumber}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
