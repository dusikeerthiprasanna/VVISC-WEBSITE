import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Monitor, ChevronLeft, Users, Target, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { eventsData } from '../data/events';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const event = eventsData.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-2xl text-light-text dark:text-dark-text mb-4">
            Event Not Found
          </h1>
          <Link to="/events" className="text-dark-accent hover:text-dark-accent-secondary">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const statusColors = {
    upcoming: 'bg-green-500/10 text-green-600 dark:text-green-400',
    ongoing: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    completed: 'bg-gray-500/10 text-light-muted dark:text-dark-muted',
  };

  const statusLabels = {
    upcoming: 'Upcoming',
    ongoing: 'Ongoing',
    completed: 'Completed',
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm text-light-muted dark:text-dark-muted hover:text-dark-accent transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Events
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9]">
              <img
                src={event.banner}
                alt={event.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[event.status]}`}>
                    {statusLabels[event.status]}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                    {event.category}
                  </span>
                </div>
                <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                  {event.name}
                </h1>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <div className="p-6 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                  <h2 className="font-poppins font-semibold text-xl text-light-text dark:text-dark-text mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-dark-accent" />
                    About Event
                  </h2>
                  <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="p-6 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                  <h2 className="font-poppins font-semibold text-xl text-light-text dark:text-dark-text mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-dark-accent" />
                    Objectives
                  </h2>
                  <ul className="space-y-3">
                    {event.objectives.map((objective, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-dark-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-dark-accent">{index + 1}</span>
                        </div>
                        <span className="text-light-muted dark:text-dark-muted">{objective}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {event.speakers && event.speakers.length > 0 && (
                <ScrollReveal delay={0.2}>
                  <div className="p-6 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                    <h2 className="font-poppins font-semibold text-xl text-light-text dark:text-dark-text mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-dark-accent" />
                      Speakers
                    </h2>
                    <div className="space-y-2">
                      {event.speakers.map((speaker, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-light-bg dark:bg-dark-bg">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dark-accent to-dark-accent-secondary flex items-center justify-center text-white font-bold text-sm">
                            {speaker.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-light-muted dark:text-dark-muted">{speaker}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Right - Sidebar */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="p-6 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                  <h3 className="font-poppins font-semibold text-lg text-light-text dark:text-dark-text mb-4">
                    Event Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-dark-accent/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-dark-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Date</p>
                        <p className="text-sm font-medium text-light-text dark:text-dark-text">
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-dark-accent/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-dark-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Time</p>
                        <p className="text-sm font-medium text-light-text dark:text-dark-text">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-dark-accent/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-dark-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Venue</p>
                        <p className="text-sm font-medium text-light-text dark:text-dark-text">{event.venue}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-dark-accent/10 flex items-center justify-center">
                        <Monitor className="w-5 h-5 text-dark-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Mode</p>
                        <p className="text-sm font-medium text-light-text dark:text-dark-text">{event.mode}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {event.status === 'upcoming' && (
                <ScrollReveal delay={0.1}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-dark-accent to-dark-accent-secondary text-white font-semibold hover:shadow-lg hover:shadow-dark-accent/30 transition-all"
                  >
                    Register Now
                  </motion.button>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
