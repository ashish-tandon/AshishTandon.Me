'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'

const ParticleNetwork = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create particle system
    const particleCount = 200
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20

      // Color based on position (creating different colored zones)
      const x = positions[i * 3]
      const y = positions[i * 3 + 1]
      
      if (x > 0 && y > 0) {
        // Corporate zone - blue
        colors[i * 3] = 0.2     // R
        colors[i * 3 + 1] = 0.6 // G
        colors[i * 3 + 2] = 1.0 // B
      } else if (x < 0 && y > 0) {
        // Academic zone - green
        colors[i * 3] = 0.2     // R
        colors[i * 3 + 1] = 1.0 // G
        colors[i * 3 + 2] = 0.2 // B
      } else if (x < 0 && y < 0) {
        // Entrepreneurial zone - orange
        colors[i * 3] = 1.0     // R
        colors[i * 3 + 1] = 0.6 // G
        colors[i * 3 + 2] = 0.2 // B
      } else {
        // Civic zone - purple
        colors[i * 3] = 0.6     // R
        colors[i * 3 + 1] = 0.2 // G
        colors[i * 3 + 2] = 1.0 // B
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Create connection lines
    const lineGeometry = new THREE.BufferGeometry()
    const linePositions: number[] = []
    const lineColors: number[] = []

    // Connect nearby particles
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const distance = Math.sqrt(
          Math.pow(positions[i * 3] - positions[j * 3], 2) +
          Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
          Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
        )

        if (distance < 3) {
          // Add line start
          linePositions.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2]
          )
          lineColors.push(
            colors[i * 3],
            colors[i * 3 + 1],
            colors[i * 3 + 2]
          )

          // Add line end
          linePositions.push(
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          )
          lineColors.push(
            colors[j * 3],
            colors[j * 3 + 1],
            colors[j * 3 + 2]
          )
        }
      }
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3))

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
    })

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)

    // Animation
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Rotate particles
      particles.rotation.x += 0.001
      particles.rotation.y += 0.002
      lines.rotation.x += 0.001
      lines.rotation.y += 0.002

      // Move particles slightly
      const positions = geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.001
      }
      geometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}

export default ParticleNetwork
