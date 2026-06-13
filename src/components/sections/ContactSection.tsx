import { Send, Loader2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import Reveal from '@/components/ui/reveal';

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch(form.action, { method: form.method, body: data, headers: { Accept: 'application/json' } });
      setSent(true);
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <section id="contacto" className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Send className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-blue-400 text-lg font-medium">
              Message sent successfully! Our engineering team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 md:mb-6">
              GET IN TOUCH
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Have a breakthrough project in mind? Let's engineer something exceptional together.
            </p>
            <div className="w-20 md:w-32 h-0.5 md:h-1 bg-blue-500 mx-auto mt-4 md:mt-6" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="max-w-lg mx-auto">
            <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xpqezyba"
            method="POST"
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-dark-950/80 backdrop-blur-sm border border-blue-900/30 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-dark-950/80 backdrop-blur-sm border border-blue-900/30 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-dark-950/80 backdrop-blur-sm border border-blue-900/30 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 bg-blue-500 text-dark-950 rounded-lg font-semibold hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              {sending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
