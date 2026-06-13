import { useRef, useEffect, useState } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'

export default function OptimizedMeshGradient() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const [isMobile] = useState(() => window.innerWidth < 768)

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

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full">
      <MeshGradient
        className="w-full h-full"
        colors={["#000000", "#001a4d", "#000d26", "#0066FF"]}
        speed={visible ? (isMobile ? 0.3 : 0.5) : 0}
        minPixelRatio={isMobile ? 1 : 0.5}
        maxPixelCount={isMobile ? 2000000 : undefined}
      />
    </div>
  )
}
