# MedNG — 3D Medical Data Ownership Experience

> **First Movers Hackathon Project**
> An immersive 3D landing page showcasing MedNG — a next-generation medical data vault where patients own, control, and monetize their health records using blockchain, threshold encryption, and decentralized storage.

https://github.com/user-attachments/assets/4062aa1e-7bb8-43de-b288-10de007b699c

---

## Project Overview

MedNG reimagines how patients interact with their health data. Instead of static pages, users explore a **real-time 3D environment** as "Dr. Dino" — their digital guide — walking through six themed rooms that each represent a core technology pillar:

| Room | Technology | Description |
|------|-----------|-------------|
| **Data Ownership** | Self-Custody | Patients fully own and control their records |
| **Threshold Encryption** | M-of-N Seal | No single point of failure — data protected by multiple parties |
| **Sui Blockchain** | Audit Trail | Immutable metadata and transaction history |
| **Walrus Storage** | Decentralized Storage | Pre-encrypted data stored across a distributed network |
| **TEE Oyster CVM** | AWS Nitro Enclave | Hardware-isolated processing for sensitive data |
| **HIPAA & GDPR** | Compliance | Full international regulatory compliance |

---

## Tech Stack

- **Three.js** — Real-time 3D rendering (vanilla, no framework)
- **GLSL Shaders** — Custom post-processing, glow, and particle effects
- **Web Audio API** — Procedural footstep sounds and UI feedback
- **WebGL** — GPU-accelerated post-processing (bloom, god rays)
- **HTML/CSS/JS** — Single-file deployment, zero build step

---

## Key Features

### 3D Navigation
- WASD / Arrow keys to walk around a virtual showroom
- Camera smoothly follows the mascot with damped lerp
- Interactive room markers — walk near one to trigger an info panel

### Dr. Dino Mascot
- Procedurally built from Three.js primitives (no external model)
- **Vinyl toy aesthetic** — MeshPhysicalMaterial with clearcoat and subsurface hints
- Breathing idle animation, blink cycles, ear twitches, walking gaity
- Soft contact shadow blob rendered with MultiplyBlending

### Visual Effects
- **Bloom + God rays** post-processing via UnrealBloomPass
- **Echo ripple system** — footstep-triggered rings that expand and pulse walls
- **Particle scanner** — canvas-generated scanning beam
- **Portal ending sequence** — shrinks mascot into a glowing warp portal
- **Ambient drones** — floating surveillance bots circling the scene
- **Parallax hero shapes** — background decorative geometry reacts to mouse

### Sound Design
- Procedural footstep synthesis (Web Audio API — triangle wave + exponential pitch fall)
- UI click sounds (sine wave chords)
- Ambient drone pad with tempo-synced filter sweeps

---

## File Structure

```
ladipage/
├── index-3d.html     # Full app — HTML + inline CSS + inline JS
├── styles.css        # Landing page styles (unused by 3D scene, reference)
├── script.js         # Landing page interactions (unused by 3D scene, reference)
├── mascot.png       # Mascot illustration used in loading screen
└── model.obj        # Reference 3D model (143MB — NOT used by app)
```

---

## Run Locally

```bash
# Python 3
python3 -m http.server 8080

# or npx
npx serve .
```

---

## Hackathon Context

Built for the **First Movers Hackathon** by a small team. The goal: demonstrate that patients can be full custodians of their medical data — no hospital, no corporation, no third party required — without sacrificing security or compliance.

The 3D format lets users *experience* the architecture rather than read about it. Walking the maze and entering each room creates a mental model of how decentralized data ownership actually works in practice.

---

## Future Roadmap

- [ ] Load actual 3D mascot model (.glb) replacing procedural version
- [ ] Add multiplayer sync via WebRTC or WebSocket
- [ ] Integrate real Sui wallet for on-chain access grants
- [ ] WebAuthn / Passkey login flow
- [ ] Export room panels to actual smart contract calls

---

## Team

**First Movers Hackathon — MedNG Team**

Built with ❤️ and sleep deprivation.

---

## License

MIT — use freely for good.
