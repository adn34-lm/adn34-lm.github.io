import { useRef, useEffect, useState } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'
import { useTheme } from '@/hooks/use-theme'

const darkColors = ["#000000", "#001a4d", "#000d26", "#0066FF"]
const lightColors = ["#f0f7ff", "#93c5fd", "#0066FF", "#1e40af"]

export default function OptimizedMeshGradient() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const [isMobile] = useState(() => window.innerWidth < 768)
  const { theme } = useTheme()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting) },
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const colors = theme === 'light' ? lightColors : darkColors

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full">
      <MeshGradient
        className="w-full h-full"
        colors={colors}
        speed={visible ? (isMobile ? 0.3 : 0.5) : 0}
        minPixelRatio={isMobile ? 1 : 0.5}
        maxPixelCount={isMobile ? 2000000 : undefined}
      />
    </div>
  )
}
