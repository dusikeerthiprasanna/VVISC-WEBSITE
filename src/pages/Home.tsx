import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, FileText, Calendar, Trophy, Eye, Target, Zap, ChevronRight } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import LogoWatermark from '../components/LogoWatermark';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';
import { eventsData } from '../data/events';

const stats = [
  { icon: FileText, label: 'Research Papers', value: 30, suffix: '+' },
  { icon: Calendar, label: 'Events Conducted', value: 50, suffix: '+' },
  { icon: Users, label: 'Volunteers', value: 40, suffix: '+' },
  { icon: Trophy, label: 'Achievements', value: 20, suffix: '+' },
];

export default function Home() {
  const latestEvent = eventsData[0];
  const upcomingEvent = eventsData.find(e => e.status === 'upcoming');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <LogoWatermark />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-light-bg/50 to-light-bg dark:via-dark-bg/50 dark:to-dark-bg z-[1]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-accent/10 dark:bg-dark-accent/20 border border-dark-accent/20 mb-6">
              <Zap className="w-4 h-4 text-dark-accent" />
              <span className="text-sm font-medium text-dark-accent dark:text-dark-accent-secondary">
                VVITU Innovation & Student Council
              </span>
            </div>
            
            <h1 className="font-poppins font-bold text-5xl sm:text-6xl lg:text-7xl text-light-text dark:text-dark-text mb-6">
              <span className="bg-gradient-to-r from-dark-accent to-dark-accent-secondary bg-clip-text text-transparent">
                VVISC
              </span>{' '}
              Council
            </h1>
            
            <p className="text-lg sm:text-xl text-light-muted dark:text-dark-muted max-w-2xl mx-auto mb-10 font-inter">
              Empowering Innovation, Research, Leadership, and Technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/council-framework"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-dark-accent to-dark-accent-secondary text-white font-semibold hover:shadow-lg hover:shadow-dark-accent/30 transition-all hover:scale-105"
              >
                Explore VVISC
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-dark-accent/30 text-dark-accent dark:text-dark-accent-secondary font-semibold hover:bg-dark-accent/10 transition-all"
              >
                Meet Our Team
                <Users className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - About Content */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-light-text dark:text-dark-text mb-6">
                    About <span className="text-gradient">VVISC</span>
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                      <h3 className="font-semibold text-light-text dark:text-dark-text mb-2 flex items-center gap-2">
                        <Eye className="w-5 h-5 text-dark-accent" />
                        About VVITU
                      </h3>
                      <p className="text-sm text-light-muted dark:text-dark-muted">
                        Vasireddy Venkatadri International Technological University(VVITU), located in Nambur, Guntur District, Andhra Pradesh, 
                        is a premier engineering institution known for academic excellence, innovation ecosystem, and comprehensive 
                        student development initiatives.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                      <h3 className="font-semibold text-light-text dark:text-dark-text mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5 text-dark-accent" />
                        About VVISC
                      </h3>
                      <p className="text-sm text-light-muted dark:text-dark-muted">
                        VVISC is the central student-driven council responsible for fostering innovation, technical activities, 
                        research initiatives, events, outreach, operations, and leadership development. We create opportunities 
                        for students to excel in technology, research, and leadership while building a vibrant innovation culture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Stats Card */}
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-dark-accent/20 to-dark-accent-secondary/20 rounded-3xl blur-xl" />
                <div className="relative backdrop-blur-xl bg-light-surface dark:bg-dark-surface rounded-2xl border border-light-border dark:border-dark-border p-6 sm:p-8">
                  <h3 className="font-poppins font-semibold text-xl text-light-text dark:text-dark-text mb-6 text-center">
                    Our Impact
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-4 rounded-xl text-center ${
                          index < 2 ? 'border-b border-r' : ''
                        } ${
                          index === 0 ? 'border-light-border dark:border-dark-border' : ''
                        } ${
                          index === 1 ? 'border-b border-light-border dark:border-dark-border' : ''
                        } ${
                          index === 2 ? 'border-r border-light-border dark:border-dark-border' : ''
                        }`}
                      >
                        <stat.icon className="w-6 h-6 text-dark-accent mx-auto mb-2" />
                        <div className="font-poppins font-bold text-2xl sm:text-3xl text-gradient">
                          <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-xs text-light-muted dark:text-dark-muted mt-1">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-32 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center text-light-text dark:text-dark-text mb-12">
              Vision & <span className="text-gradient">Mission</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="group relative p-8 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-dark-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-dark-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-accent/10 to-dark-accent-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-dark-accent to-dark-accent-secondary flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-light-text dark:text-dark-text mb-4">
                    Our Vision
                  </h3>
                  <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                    To establish VVISC as the premier student innovation hub that nurtures groundbreaking ideas, 
                    fosters research excellence, and develops future leaders who will drive technological advancement 
                    and societal impact through innovation and collaboration.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="group relative p-8 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border hover:border-dark-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-dark-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-accent/10 to-dark-accent-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-dark-accent to-dark-accent-secondary flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-light-text dark:text-dark-text mb-4">
                    Our Mission
                  </h3>
                  <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                    To create a vibrant ecosystem that empowers students with technical skills, research opportunities, 
                    and leadership experiences. We are committed to organizing world-class events, promoting innovation 
                    culture, and building bridges between academia and industry for holistic student development.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-center text-light-text dark:text-dark-text mb-12">
              Latest <span className="text-gradient">Highlights</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Latest Event */}
            <ScrollReveal delay={0.1}>
              <div className="group relative rounded-2xl overflow-hidden bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-dark-accent/50 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={latestEvent?.poster}
                    alt={latestEvent?.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-dark-accent/10 text-dark-accent text-xs font-medium mb-3">
                    <Zap className="w-3 h-3" />
                    Latest Event
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-light-text dark:text-dark-text mb-2">
                    {latestEvent?.name}
                  </h3>
                  <p className="text-sm text-light-muted dark:text-dark-muted line-clamp-2 mb-4">
                    {latestEvent?.description}
                  </p>
                  <Link
                    to={`/events/${latestEvent?.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-dark-accent hover:text-dark-accent-secondary transition-colors"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Upcoming Event */}
            <ScrollReveal delay={0.2}>
              <div className="group relative rounded-2xl overflow-hidden bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-dark-accent/50 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={upcomingEvent?.poster || eventsData[2]?.poster}
                    alt={upcomingEvent?.name || eventsData[2]?.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium mb-3">
                    <Calendar className="w-3 h-3" />
                    Upcoming Event
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-light-text dark:text-dark-text mb-2">
                    {upcomingEvent?.name || eventsData[2]?.name}
                  </h3>
                  <p className="text-sm text-light-muted dark:text-dark-muted line-clamp-2 mb-4">
                    {upcomingEvent?.description || eventsData[2]?.description}
                  </p>
                  <Link
                    to={`/events/${upcomingEvent?.id || eventsData[2]?.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-dark-accent hover:text-dark-accent-secondary transition-colors"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Recent Achievement */}
            <ScrollReveal delay={0.3}>
              <div className="group relative rounded-2xl overflow-hidden bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-dark-accent/50 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Achievement"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium mb-3">
                    <Trophy className="w-3 h-3" />
                    Recent Achievement
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-light-text dark:text-dark-text mb-2">
                    Best Student Council Award 2025
                  </h3>
                  <p className="text-sm text-light-muted dark:text-dark-muted line-clamp-2 mb-4">
                    VVISC was recognized as the Best Student Council at the State Level Technical Fest for 
                    outstanding contributions to student innovation and research.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-dark-accent">
                    <Trophy className="w-4 h-4" />
                    State Level Recognition
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
