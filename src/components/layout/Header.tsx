import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#inicio', label: 'home' },
  { href: '#servicios', label: 'services' },
  { href: '#precios', label: 'pricing' },
  { href: '#contacto', label: 'contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const ids = ['inicio', 'servicios', 'precios', 'contacto'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/logo.svg" alt="LM Studio" className="h-8 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-widest transition-colors ${
                  active === link.href.slice(1)
                    ? 'text-blue-400'
                    : 'text-white/60 hover:text-blue-400'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-white/80 hover:text-blue-400 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-blue-900/30 bg-dark-950/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block text-sm uppercase tracking-widest transition-colors ${
                  active === link.href.slice(1)
                    ? 'text-blue-400'
                    : 'text-white/60 hover:text-blue-400'
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
