import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';

export default function ContactSection({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService || 'Digital Marketing',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Digital Marketing',
    'Branding',
    'Social Media',
    'Web Development',
    'Content Creation',
    'Talent Connections',
    'Other',
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please share a brief project summary';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#0A0B0D] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Info */}
          <motion.div
            className="lg:col-span-5 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase font-semibold mb-3 sm:mb-4 block">
                GET IN TOUCH
              </span>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white">
                LET'S TALK.
              </h2>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed font-normal">
                Have a project, partnership or talent requirement? <br />
                Tell us what you're building.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 sm:space-y-4 pt-2">
              <a
                href="mailto:genfrexofficial@gmail.com"
                className="p-4 sm:p-5 rounded-2xl bg-[#0E0F12] border border-white/[0.07] hover:border-primary/50 flex items-center gap-4 group transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">Email Inquiries</span>
                  <p className="font-semibold text-white text-xs sm:text-sm group-hover:text-primary transition-colors truncate">
                    genfrexofficial@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919047295361"
                className="p-4 sm:p-5 rounded-2xl bg-[#0E0F12] border border-white/[0.07] hover:border-primary/50 flex items-center gap-4 group transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">Phone Inquiries</span>
                  <p className="font-semibold text-white text-xs sm:text-sm group-hover:text-primary transition-colors">
                    +91 9047295361
                  </p>
                </div>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-3">
                Social Networks
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Professional Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#0E0F12] border border-white/[0.08]">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Enquiry Received
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                    Thank you, {formData.name}. A member of our team will review your project requirements and respond within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'Digital Marketing',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    SEND ANOTHER ENQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-primary'
                          } text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-primary'
                          } text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-primary text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-primary text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-primary text-white text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      {services.map((svc) => (
                        <option key={svc} value={svc} className="bg-[#0E0F12] text-white">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Project Brief *
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your brand, current milestones, and how we can collaborate..."
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-primary'
                        } text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-primary hover:bg-blue-600 text-white transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'SENDING...' : 'SEND ENQUIRY →'}</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
