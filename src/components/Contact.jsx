import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Copy, Send, ExternalLink, Loader2, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', text: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('saikowshikgandikota@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setToast({ show: true, type: 'error', text: 'Please fill out all required fields.' });
      return;
    }

    setLoading(true);
    setToast({ show: false, type: 'success', text: '' });

    try {
      const res = await fetch('https://formsubmit.co/ajax/saikowshikgandikota@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject} - From ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await res.json();
      if (res.ok || data.success === true || data.success === 'true') {
        setToast({ 
          show: true, 
          type: 'success', 
          text: '✓ Message Sent Successfully! I will respond to your email shortly.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setToast({ 
          show: true, 
          type: 'error', 
          text: 'Unable to submit directly right now. Please click "Open in Gmail" below.' 
        });
      }
    } catch (err) {
      setToast({ 
        show: true, 
        type: 'error', 
        text: 'Network error. Please use "Open in Gmail" to dispatch directly.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSendViaGmail = () => {
    const { name, email, subject, message } = formData;
    const bodyText = encodeURIComponent(`From: ${name || 'N/A'} (${email || 'N/A'})\n\nMessage:\n${message || ''}`);
    const encodedSubject = encodeURIComponent(subject || 'Role Opportunity / Project Collaboration');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=saikowshikgandikota@gmail.com&su=${encodedSubject}&body=${bodyText}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Get in Touch</h2>
          <div className="h-px bg-zinc-800 flex-grow ml-4"></div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Quick Contact Info & Direct Copy */}
        <ScrollReveal className="lg:col-span-5 space-y-4" delay={0.05} curtain={true}>
          <div className="aurora-card rounded-2xl p-6 sm:p-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">Direct Reach</span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">Let's Build Together</h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Whether you have an open AI/Full-Stack role, a project collaboration, or an engineering inquiry, I'm always open to discussing new opportunities.
              </p>
            </div>

            <div className="space-y-3.5 pt-2 border-t border-zinc-800">
              {/* Email Item with Instant Copy */}
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3 group hover:border-zinc-500 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-white/10 text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono text-zinc-400 uppercase">Email</span>
                    <a href="mailto:saikowshikgandikota@gmail.com" className="text-xs sm:text-sm font-mono text-white hover:text-zinc-300 truncate block transition-colors">
                      saikowshikgandikota@gmail.com
                    </a>
                  </div>
                </div>
                <button 
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-mono transition-all flex-shrink-0 cursor-pointer" 
                  title="Copy Email"
                >
                  {copiedEmail ? (
                    <span className="text-white font-bold text-[10px]">COPIED</span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Item */}
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3 group hover:border-zinc-500 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-white/10 text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-400 uppercase">Phone / WhatsApp</span>
                    <a href="tel:+917989528212" className="text-xs sm:text-sm font-mono text-white hover:text-zinc-300 transition-colors">
                      +91 7989528212
                    </a>
                  </div>
                </div>
                <a 
                  href="tel:+917989528212" 
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-mono transition-all flex-shrink-0" 
                  title="Call Now"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Location & Work Mode */}
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/10 text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-400 uppercase">Location & Availability</span>
                  <span className="text-xs sm:text-sm font-mono text-zinc-200">India &bull; Remote Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* FlyRank AI Verified Track Badge */}
          <div className="aurora-card rounded-2xl p-4 border border-zinc-700 flex items-center gap-3 bg-zinc-900">
            <Award className="w-5 h-5 text-white flex-shrink-0" />
            <span className="text-xs font-mono text-zinc-200 font-medium">
              Verified Graduate of FlyRank AI Track
            </span>
          </div>
        </ScrollReveal>

        {/* Right: Interactive Working Message Dispatcher */}
        <ScrollReveal className="lg:col-span-7" delay={0.15} curtain={true}>
          <div className="aurora-card rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10">
            <div>
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">Direct Message</span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">Send a Message</h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                Fill out the form below to send an inquiry directly to my email inbox.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-300 mb-1.5">Your Name *</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors text-sm" 
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-300 mb-1.5">Your Email *</label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors text-sm" 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-300 mb-1.5">Subject *</label>
                <input 
                  type="text" 
                  id="contact-subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                  placeholder="Role Opportunity / Project Collaboration" 
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors text-sm" 
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-300 mb-1.5">Message *</label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  placeholder="Hi Sai Kowshik, I would love to connect with you regarding..." 
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors text-sm resize-none"
                ></textarea>
              </div>

              {/* Dispatch Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 shadow-lg shadow-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>

                <button 
                  type="button" 
                  onClick={handleSendViaGmail}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white text-xs font-mono transition-all border border-zinc-700 hover:border-zinc-500 flex items-center justify-center gap-2 cursor-pointer" 
                  title="Alternative: Open prefilled in Gmail"
                >
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>Open in Gmail</span>
                </button>
              </div>

              {/* Status Alert Toast */}
              {toast.show && (
                <div className={`text-center p-3.5 rounded-xl font-mono text-xs transition-all ${
                  toast.type === 'success' 
                    ? 'bg-white/10 border border-white/20 text-white' 
                    : 'bg-rose-500/15 border border-rose-500/40 text-rose-300'
                }`}>
                  {toast.text}
                </div>
              )}
            </form>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
