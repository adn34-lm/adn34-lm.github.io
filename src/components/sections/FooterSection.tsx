import { Mail, Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-dark-950 border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-blue-400">LM</span>{' '}
              <span className="text-white/60 font-light">STUDIO</span>
            </span>
            <p className="text-neutral-500 text-sm mt-2">
              Engineering next-gen software solutions.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:hello@lmstudio.dev" className="text-neutral-500 hover:text-blue-400 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p className="flex items-center gap-1">
            &copy; {new Date().getFullYear()} LM Studio. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-blue-400 fill-blue-400" /> from around the world
          </p>
        </div>
      </div>
    </footer>
  );
}
