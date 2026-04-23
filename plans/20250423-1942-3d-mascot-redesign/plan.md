# Plan: 3D Mascot Redesign — MedNG Experience

**Date:** 2026-04-23 | **Priority:** High | **Status:** In Progress

## Overview
Redesign the "Dr. Dino" mascot in `index-3d.html` to improve visual quality and appeal. The mascot is a procedural Three.js character (not a loaded .obj file). Goal: vinyl toy aesthetic with better proportions, smoother shading, richer materials, and enhanced animations.

---

## Phases

| # | Phase | Status | File |
|---|-------|--------|------|
| 1 | Research & Visual Direction | ✅ Done | - |
| 2 | Mascot Body Redesign | 🔄 In Progress | `phase-01-mascot-body.md` |
| 3 | Head & Face Enhancement | 🔄 In Progress | `phase-02-head-face.md` |
| 4 | Materials & Shaders | 🔄 In Progress | `phase-03-materials-shaders.md` |
| 5 | Animation Polish | 🔄 In Progress | `phase-04-animation.md` |
| 6 | Integration & Testing | 🔄 In Progress | `phase-05-integration.md` |

---

## Current State
- Mascot is procedurally built from Three.js primitives (spheres, cylinders, capsules)
- `model.obj` exists (143MB) but is NOT loaded by the app — it's a reference/benchmark only
- Mascot uses `MeshPhysicalMaterial` for a vinyl toy look, but has rough proportions
- Scene already has particles, post-processing bloom, and portal effects

## Key Changes Planned
1. **Better body proportions** — rounder belly, better weight distribution
2. **Face enhancement** — sparkly eyes, cute expressions, better snout
3. **Material upgrades** — subsurface scattering hint, subsurface-style translucency on belly, glossy eye reflections
4. **Ambient animations** — idle breathing, ear twitches, blink cycles
5. **Modeled stethoscope** that hangs naturally
6. **Enhanced shadows** and soft-contact shadow under mascot

## Files
- Main: `index-3d.html` (all inline — script + styles)
- Reference model: `model.obj` (benchmark only)
- Mascot PNG: `mascot.png`

## Next Step
Launch `ui-ux-designer` agent to implement all phases in one pass.
