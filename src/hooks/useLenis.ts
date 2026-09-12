import { useEffect } from "react"
import Lenis from "lenis"

export function useLenis() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    // Expose lenis globally for any programatic smooth scroll actions
    ;(window as any).lenis = lenis

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete (window as any).lenis
    }
  }, [])
}
