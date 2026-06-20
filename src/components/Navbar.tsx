import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/council-framework', label: 'Council Framework' },
  { path: '/team', label: 'Team' },
  { path: '/events', label: 'Events' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/connect', label: 'Connect With Us' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-light-surface/80 dark:bg-dark-surface/80 border-b border-light-border dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left - VVIT Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/image.png"
              alt="VVIT Logo"
              className="w-[150px] h-[150px] rounded-lg object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Center - Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  location.pathname === link.path
                    ? 'text-dark-accent dark:text-dark-accent'
                    : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
                )}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-dark-accent/10 dark:bg-dark-accent/20 rounded-lg -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right - Theme Toggle + VVISC Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-dark-accent-secondary" />
              ) : (
                <Moon className="w-5 h-5 text-light-accent-secondary" />
              )}
            </button>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex items-center gap-2"
            >
              <img
                src="/WhatsApp_Image_2026-06-19_at_9.47.31_PM.jpeg"
                alt="VVISC Logo"
                className="w-[100px] h-[100px] rounded-full object-cover shadow-lg shadow-dark-accent/30"
              />
            </motion.div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-light-border dark:border-dark-border bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-xl"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    location.pathname === link.path
                      ? 'bg-dark-accent/10 dark:bg-dark-accent/20 text-dark-accent dark:text-dark-accent'
                      : 'text-light-muted dark:text-dark-muted hover:bg-light-surface dark:hover:bg-dark-surface'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
