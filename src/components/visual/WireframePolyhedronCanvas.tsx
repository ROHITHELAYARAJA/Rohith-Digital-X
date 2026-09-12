import React, { useEffect, useRef } from "react"

interface Point3D {
  x: number
  y: number
  z: number
}

interface Edge {
  a: number
  b: number
}

// Generate Dodecahedron (12 pentagonal faces, 20 vertices, 30 edges)
function createDodecahedron(): { vertices: Point3D[]; edges: Edge[] } {
  const phi = (1 + Math.sqrt(5)) / 2
  const invPhi = 1 / phi

  const rawVerts: [number, number, number][] = [
    [-1, -1, -1],
    [-1, -1, 1],
    [-1, 1, -1],
    [-1, 1, 1],
    [1, -1, -1],
    [1, -1, 1],
    [1, 1, -1],
    [1, 1, 1],
    [0, -invPhi, -phi],
    [0, -invPhi, phi],
    [0, invPhi, -phi],
    [0, invPhi, phi],
    [-invPhi, -phi, 0],
    [-invPhi, phi, 0],
    [invPhi, -phi, 0],
    [invPhi, phi, 0],
    [-phi, 0, -invPhi],
    [phi, 0, -invPhi],
    [-phi, 0, invPhi],
    [phi, 0, invPhi],
  ]

  // Normalize vertices so radius is approx 1
  const vertices: Point3D[] = rawVerts.map(([x, y, z]) => {
    const len = Math.sqrt(x * x + y * y + z * z)
    return { x: x / len, y: y / len, z: z / len }
  })

  // Connect edges where distance is approximately the edge length (approx 0.7136 for normalized)
  const edges: Edge[] = []
  const edgeLenThreshold = 0.75

  for (let i = 0; i < vertices.length; i++) {
    for (let j = i + 1; j < vertices.length; j++) {
      const dx = vertices[i].x - vertices[j].x
      const dy = vertices[i].y - vertices[j].y
      const dz = vertices[i].z - vertices[j].z
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
      if (dist < edgeLenThreshold) {
        edges.push({ a: i, b: j })
      }
    }
  }

  return { vertices, edges }
}

// Generate Icosahedron (20 triangular faces, 12 vertices, 30 edges)
function createIcosahedron(): { vertices: Point3D[]; edges: Edge[] } {
  const phi = (1 + Math.sqrt(5)) / 2

  const rawVerts: [number, number, number][] = [
    [-1, phi, 0],
    [1, phi, 0],
    [-1, -phi, 0],
    [1, -phi, 0],
    [0, -1, phi],
    [0, 1, phi],
    [0, -1, -phi],
    [0, 1, -phi],
    [phi, 0, -1],
    [phi, 0, 1],
    [-phi, 0, -1],
    [-phi, 0, 1],
  ]

  const vertices: Point3D[] = rawVerts.map(([x, y, z]) => {
    const len = Math.sqrt(x * x + y * y + z * z)
    return { x: x / len, y: y / len, z: z / len }
  })

  const edges: Edge[] = []
  const edgeLenThreshold = 1.1

  for (let i = 0; i < vertices.length; i++) {
    for (let j = i + 1; j < vertices.length; j++) {
      const dx = vertices[i].x - vertices[j].x
      const dy = vertices[i].y - vertices[j].y
      const dz = vertices[i].z - vertices[j].z
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
      if (dist < edgeLenThreshold) {
        edges.push({ a: i, b: j })
      }
    }
  }

  return { vertices, edges }
}

interface WireframePolyhedronCanvasProps {
  className?: string
  accentColor?: string
  opacity?: number
  polyhedron?: "dodecahedron" | "icosahedron"
  size?: number
  lineColor?: string
  glowColor?: string
}

export const WireframePolyhedronCanvas: React.FC<WireframePolyhedronCanvasProps> = ({
  className = "",
  accentColor = "#8B5CF6",
  opacity = 1,
  polyhedron = "dodecahedron",
  size,
  lineColor,
  glowColor,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = 0
    let height = 0

    const dodeca = createDodecahedron()
    const icosa = createIcosahedron()

    // 3D rotation state
    let rotX1 = 0.4
    let rotY1 = 0.6
    let rotZ1 = 0.1

    let rotX2 = 0.2
    let rotY2 = -0.4

    // Target rotation influenced by mouse coordinates
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    const updateSize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.parentElement.clientWidth
      height = canvas.parentElement.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / width - 0.5
      const relY = (e.clientY - rect.top) / height - 0.5
      mouse.targetX = relX * 0.8
      mouse.targetY = relY * 0.8
    }

    window.addEventListener("resize", updateSize)
    window.addEventListener("mousemove", handleMouseMove)

    updateSize()

    // 3D Projection math
    const rotateAndProject = (
      p: Point3D,
      rx: number,
      ry: number,
      rz: number,
      scale: number,
      cx: number,
      cy: number,
      fov: number = 400
    ) => {
      // Rotate around X
      const cosX = Math.cos(rx)
      const sinX = Math.sin(rx)
      const y1 = p.y * cosX - p.z * sinX
      const z1 = p.y * sinX + p.z * cosX

      // Rotate around Y
      const cosY = Math.cos(ry)
      const sinY = Math.sin(ry)
      const x2 = p.x * cosY + z1 * sinY
      const z2 = -p.x * sinY + z1 * cosY

      // Rotate around Z
      const cosZ = Math.cos(rz)
      const sinZ = Math.sin(rz)
      const x3 = x2 * cosZ - y1 * sinZ
      const y3 = x2 * sinZ + y1 * cosZ

      // Perspective projection
      const depth = z2 + 2.5
      const projScale = fov / (fov + depth * 70) * scale

      return {
        screenX: cx + x3 * projScale,
        screenY: cy + y3 * projScale,
        depth: z2,
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      // Continuous automatic rotation with mouse tilt
      rotX1 += 0.003
      rotY1 += 0.0045
      rotZ1 += 0.001

      rotX2 -= 0.004
      rotY2 += 0.003

      // Main Large Polyhedron (Positioned on the Right Side, like HeyDigital)
      const isMobile = width < 768
      const mainRadius = isMobile ? Math.min(width, height) * 0.42 : Math.min(width, height) * 0.55
      const mainCenterX = isMobile ? width * 0.75 : width * 0.72
      const mainCenterY = isMobile ? height * 0.48 : height * 0.46

      const projectedMain = dodeca.vertices.map((v) =>
        rotateAndProject(
          v,
          rotX1 + mouse.y,
          rotY1 + mouse.x,
          rotZ1,
          mainRadius,
          mainCenterX,
          mainCenterY
        )
      )

      // Draw Main Dodecahedron Edges
      ctx.lineWidth = 1.1
      for (const edge of dodeca.edges) {
        const p1 = projectedMain[edge.a]
        const p2 = projectedMain[edge.b]

        // Depth-based line alpha
        const avgDepth = (p1.depth + p2.depth) / 2
        const alpha = Math.max(0.06, Math.min(0.32, 0.20 + avgDepth * 0.12))

        ctx.beginPath()
        ctx.moveTo(p1.screenX, p1.screenY)
        ctx.lineTo(p2.screenX, p2.screenY)
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.stroke()
      }

      // Draw subtle luminous nodes at main vertices
      for (let i = 0; i < projectedMain.length; i++) {
        const p = projectedMain[i]
        const isHighlight = i % 4 === 0
        ctx.beginPath()
        ctx.arc(p.screenX, p.screenY, isHighlight ? 2.5 : 1.5, 0, Math.PI * 2)
        if (isHighlight) {
          ctx.fillStyle = `rgba(255, 174, 0, ${0.4 + p.depth * 0.3})`
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.25 + p.depth * 0.2})`
        }
        ctx.fill()
      }

      // Secondary Smaller Polyhedron (Positioned Bottom-Center/Left, like HeyDigital screenshot)
      const secRadius = isMobile ? mainRadius * 0.45 : mainRadius * 0.48
      const secCenterX = isMobile ? width * 0.35 : width * 0.54
      const secCenterY = isMobile ? height * 0.88 : height * 0.82

      const projectedSec = icosa.vertices.map((v) =>
        rotateAndProject(
          v,
          rotX2 - mouse.y * 0.5,
          rotY2 - mouse.x * 0.5,
          0,
          secRadius,
          secCenterX,
          secCenterY
        )
      )

      ctx.lineWidth = 0.9
      for (const edge of icosa.edges) {
        const p1 = projectedSec[edge.a]
        const p2 = projectedSec[edge.b]

        const avgDepth = (p1.depth + p2.depth) / 2
        const alpha = Math.max(0.04, Math.min(0.22, 0.12 + avgDepth * 0.08))

        ctx.beginPath()
        ctx.moveTo(p1.screenX, p1.screenY)
        ctx.lineTo(p2.screenX, p2.screenY)
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.stroke()
      }

      // Subtle node dots on secondary
      for (let i = 0; i < projectedSec.length; i++) {
        const p = projectedSec[i]
        ctx.beginPath()
        ctx.arc(p.screenX, p.screenY, 1.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, 0.25)`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", updateSize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [accentColor])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  )
}
