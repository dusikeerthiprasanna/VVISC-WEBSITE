import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Linkedin, Globe, Send, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import LogoWatermark from '../components/LogoWatermark';

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'VVIT Campus, Nambur, Guntur District, Andhra Pradesh - 522508',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'vvisc@vvit.ac.in',
      href: 'mailto:vvisc@vvit.ac.in',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 863-XXX-XXXX',
      href: 'tel:+91863XXXXXXX',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@vvisc_official',
      href: '#',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'VVISC Official',
      href: '#',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'www.vvit.ac.in',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <LogoWatermark />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-light-text dark:text-dark-text mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
              Have questions or want to collaborate? We would love to hear from you. Reach out to the VVISC team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Information */}
            <ScrollReveal>
              <div className="space-y-8">
                <h2 className="font-poppins font-semibold text-2xl text-light-text dark:text-dark-text">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-dark-accent/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-dark-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-dark-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-light-text dark:text-dark-text hover:text-dark-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-light-text dark:text-dark-text">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map Embed */}
                <div className="rounded-2xl overflow-hidden border border-light-border dark:border-dark-border aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.338!2d80.519!3d16.345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDIwJzQyLjAiTiA4MMKwMzEnMDguNCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(20%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VVIT Campus Location"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Contact Form */}
            <ScrollReveal delay={0.2}>
              <div className="p-6 sm:p-8 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                <h2 className="font-poppins font-semibold text-2xl text-light-text dark:text-dark-text mb-6">
                  Send a Message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-light-text dark:text-dark-text mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-light-muted dark:text-dark-muted">
                      Thank you for reaching out. We will get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-light-muted dark:text-dark-muted mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text focus:border-dark-accent focus:ring-1 focus:ring-dark-accent outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-light-muted dark:text-dark-muted mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text focus:border-dark-accent focus:ring-1 focus:ring-dark-accent outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-light-muted dark:text-dark-muted mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text focus:border-dark-accent focus:ring-1 focus:ring-dark-accent outline-none transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-light-muted dark:text-dark-muted mb-1">
                          Subject
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text focus:border-dark-accent focus:ring-1 focus:ring-dark-accent outline-none transition-all"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="events">Event Related</option>
                          <option value="collaboration">Collaboration</option>
                          <option value="sponsorship">Sponsorship</option>
                          <option value="join">Join VVISC</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-light-muted dark:text-dark-muted mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text focus:border-dark-accent focus:ring-1 focus:ring-dark-accent outline-none transition-all resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-dark-accent to-dark-accent-secondary text-white font-semibold hover:shadow-lg hover:shadow-dark-accent/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Join VVISC CTA */}
      <section className="py-16 lg:py-24 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-dark-accent/10 to-dark-accent-secondary/10 border border-dark-accent/20">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-light-text dark:text-dark-text mb-4">
                Join <span className="text-gradient">VVISC</span>
              </h2>
              <p className="text-light-muted dark:text-dark-muted mb-8 max-w-xl mx-auto">
                Interested in becoming part of VVISC? Join us in driving innovation, research, leadership, and technological excellence at VVIT.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-dark-accent to-dark-accent-secondary text-white font-semibold hover:shadow-lg hover:shadow-dark-accent/30 transition-all"
              >
                Join VVISC
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
