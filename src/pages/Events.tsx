import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ChevronRight, Filter } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import LogoWatermark from '../components/LogoWatermark';
import { eventsData } from '../data/events';
import type { Event } from '../types';

function getEventStatus(date: string): Event['status'] {
  const eventDate = new Date(date);
  const today = new Date();
  const diffDays = Math.floor((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffDays > 7) return 'upcoming';
  if (diffDays >= -1 && diffDays <= 7) return 'ongoing';
  return 'completed';
}

function StatusBadge({ status }: { status: Event['status'] }) {
  const styles = {
    upcoming: 'bg-green-600 text-white border-green-700 shadow-sm shadow-green-600/30',
    ongoing: 'bg-amber-500 text-white border-amber-600 shadow-sm shadow-amber-500/30',
    completed: 'bg-slate-600 text-white border-slate-700 shadow-sm shadow-slate-600/30',
  };

  const labels = {
    upcoming: 'Upcoming',
    ongoing: 'Ongoing',
    completed: 'Completed',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border ${styles[status]}`}>
      <span className={`w-2 h-2 rounded-full bg-white animate-pulse`} />
      {labels[status]}
    </span>
  );
}

export default function Events() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'ongoing' | 'completed'>('all');

  const filteredEvents = eventsData.filter(event => {
    if (filter === 'all') return true;
    return event.status === filter;
  });

  const categories = ['all', 'upcoming', 'ongoing', 'completed'] as const;

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <LogoWatermark />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-light-text dark:text-dark-text mb-6">
              Our <span className="text-gradient">Events</span>
            </h1>
            <p className="text-lg text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
              Discover workshops, hackathons, research symposiums, and technical events organized by VVISC.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-gray-500 mr-2" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === cat
                      ? 'bg-gradient-to-r from-dark-accent to-dark-accent-secondary text-white'
                      : 'bg-light-surface dark:bg-dark-surface text-light-muted dark:text-dark-muted border border-light-border dark:border-dark-border hover:border-dark-accent/50'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl overflow-hidden bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-dark-accent/50 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={event.poster}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <StatusBadge status={event.status} />
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 rounded-md bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-poppins font-semibold text-lg text-light-text dark:text-dark-text mb-3">
                      {event.name}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-light-muted dark:text-dark-muted">
                        <Calendar className="w-4 h-4 text-dark-accent" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-light-muted dark:text-dark-muted">
                        <MapPin className="w-4 h-4 text-dark-accent" />
                        {event.venue}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-light-muted dark:text-dark-muted">
                        <Clock className="w-4 h-4 text-dark-accent" />
                        {event.mode}
                      </div>
                    </div>
                    
                    <p className="text-sm text-light-muted dark:text-dark-muted line-clamp-2 mb-4">
                      {event.description}
                    </p>
                    
                    <Link
                      to={`/events/${event.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-dark-accent hover:text-dark-accent-secondary transition-colors"
                    >
                      Explore Details
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
