import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/use-theme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full text-white/60 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
