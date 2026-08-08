'use client'

import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// "Pipeline particle flow" — a field of orange/green nodes connected by thin lines,
// drifting left→right (build → test → ship), with a gentle mouse-distance repulsion.
// Pure atmosphere behind the hero copy: low opacity, no interaction required to read it.
const COUNT = 90
const BOUNDS_X = 9
const BOUNDS_Y = 5
const NEIGHBOR_COUNT = 2
const ORANGE = new THREE.Color('#f97316')
const GREEN = new THREE.Color('#4ade80')

function Field() {
  const pointsRef = useRef<THREE.Points>(null)
  const lineRef = useRef<THREE.LineSegments>(null)
  const { viewport } = useThree()
  const pointerNDC = useRef({ x: 9999, y: 9999 })
  const pointerWorld = useRef({ x: 9999, y: 9999 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      pointerNDC.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  const { basePositions, speeds, colors, pairs } = useMemo(() => {
    const base = new Float32Array(COUNT * 3)
    const speed = new Float32Array(COUNT)
    const cols = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      base[i * 3] = (Math.random() - 0.5) * BOUNDS_X * 2
      base[i * 3 + 1] = (Math.random() - 0.5) * BOUNDS_Y * 2
      base[i * 3 + 2] = 0
      speed[i] = 0.15 + Math.random() * 0.2
      const c = Math.random() < 0.65 ? ORANGE : GREEN
      cols[i * 3] = c.r
      cols[i * 3 + 1] = c.g
      cols[i * 3 + 2] = c.b
    }
    const pairSet: [number, number][] = []
    for (let i = 0; i < COUNT; i++) {
      const dists: { j: number; d: number }[] = []
      for (let j = 0; j < COUNT; j++) {
        if (i === j) continue
        const dx = base[i * 3] - base[j * 3]
        const dy = base[i * 3 + 1] - base[j * 3 + 1]
        dists.push({ j, d: dx * dx + dy * dy })
      }
      dists.sort((a, b) => a.d - b.d)
      for (let k = 0; k < NEIGHBOR_COUNT; k++) {
        if (dists[k].d < 3) pairSet.push([i, dists[k].j])
      }
    }
    return { basePositions: base, speeds: speed, colors: cols, pairs: pairSet }
  }, [])

  const positions = useMemo(() => basePositions.slice(), [basePositions])
  const linePositions = useMemo(() => new Float32Array(pairs.length * 6), [pairs])

  useFrame((state) => {
    pointerWorld.current.x = pointerNDC.current.x * (viewport.width / 2)
    pointerWorld.current.y = pointerNDC.current.y * (viewport.height / 2)

    const t = state.clock.elapsedTime
    for (let i = 0; i < COUNT; i++) {
      let x = basePositions[i * 3] + t * speeds[i]
      x = ((x + BOUNDS_X) % (BOUNDS_X * 2)) - BOUNDS_X
      let y = basePositions[i * 3 + 1]

      const dx = x - pointerWorld.current.x
      const dy = y - pointerWorld.current.y
      const distSq = dx * dx + dy * dy
      const radius = 1.6
      if (distSq < radius * radius) {
        const dist = Math.sqrt(distSq) || 0.001
        const force = (1 - dist / radius) * 0.5
        x += (dx / dist) * force
        y += (dy / dist) * force
      }

      positions[i * 3] = x
      positions[i * 3 + 1] = y
    }

    if (pointsRef.current) {
      const attr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute
      attr.array.set(positions)
      attr.needsUpdate = true
    }

    if (lineRef.current) {
      pairs.forEach(([a, b], idx) => {
        linePositions[idx * 6] = positions[a * 3]
        linePositions[idx * 6 + 1] = positions[a * 3 + 1]
        linePositions[idx * 6 + 2] = 0
        linePositions[idx * 6 + 3] = positions[b * 3]
        linePositions[idx * 6 + 4] = positions[b * 3 + 1]
        linePositions[idx * 6 + 5] = 0
      })
      const attr = lineRef.current.geometry.attributes.position as THREE.BufferAttribute
      attr.array.set(linePositions)
      attr.needsUpdate = true
    }
  })

  return (
    <group>
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={pairs.length * 2} array={linePositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#f97316" transparent opacity={0.12} />
      </lineSegments>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={COUNT} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={COUNT} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.055} vertexColors transparent opacity={0.6} sizeAttenuation />
      </points>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 70, position: [0, 0, 10] }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Field />
    </Canvas>
  )
}
