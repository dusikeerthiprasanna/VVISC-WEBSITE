import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe } from 'lucide-react';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/council-framework', label: 'Council Framework' },
  { path: '/team', label: 'Team' },
  { path: '/events', label: 'Events' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/connect', label: 'Connect With Us' },
];

const councils = [
  'Digital Infrastructure',
  'Events',
  'Research & Development',
  'Media & Arts',
  'Public Relations',
  'Finance',
  'Operations',
];

export default function Footer() {
  return (
    <footer className="bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/WhatsApp_Image_2026-06-19_at_9.47.31_PM.jpeg"
                alt="VVISC Logo"
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="font-poppins font-bold text-xl bg-gradient-to-r from-dark-accent to-dark-accent-secondary bg-clip-text text-transparent">
                VVISC
              </span>
            </div>
            <p className="text-sm text-light-muted dark:text-dark-muted mb-4">
              VVIT Innovation & Student Council - Empowering innovation, research, leadership, and technology at Vasireddy Venkatadri Institute of Technology.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-light-surface dark:bg-dark-surface hover:bg-dark-accent/20 transition-colors">
                <Instagram className="w-4 h-4 text-light-muted dark:text-dark-muted" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-light-surface dark:bg-dark-surface hover:bg-dark-accent/20 transition-colors">
                <Linkedin className="w-4 h-4 text-light-muted dark:text-dark-muted" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-light-surface dark:bg-dark-surface hover:bg-dark-accent/20 transition-colors">
                <Globe className="w-4 h-4 text-light-muted dark:text-dark-muted" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-poppins font-semibold text-light-text dark:text-dark-text mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-light-muted dark:text-dark-muted hover:text-dark-accent dark:hover:text-dark-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Councils */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-poppins font-semibold text-light-text dark:text-dark-text mb-4">
              Councils
            </h3>
            <ul className="space-y-2">
              {councils.map((council) => (
                <li key={council}>
                  <span className="text-sm text-light-muted dark:text-dark-muted">
                    {council}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-poppins font-semibold text-light-text dark:text-dark-text mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-dark-accent mt-0.5 shrink-0" />
                <span className="text-sm text-light-muted dark:text-dark-muted">
                  VVIT Campus, Nambur, Guntur District, Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-dark-accent shrink-0" />
                <span className="text-sm text-light-muted dark:text-dark-muted">
                  vvisc@vvit.ac.in
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-dark-accent shrink-0" />
                <span className="text-sm text-light-muted dark:text-dark-muted">
                  +91 863-XXX-XXXX
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-light-border dark:border-dark-border text-center">
          <p className="text-sm text-light-muted dark:text-dark-muted">
            &copy; {new Date().getFullYear()} VVISC - VVIT Innovation & Student Council. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
