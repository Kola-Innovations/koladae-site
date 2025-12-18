import { PARTICLES } from "./shop-constants";

// VHS Styles as a constant string
export const VHS_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  .shop-container {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  /* Film grain overlay */
  .film-grain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 30;
    opacity: 0.1;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }

  /* Vignette overlay */
  .vignette {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 20;
    background: radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%);
  }

  /* VHS Scanlines */
  .vhs-scanlines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 15;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
  }

  /* VHS Tracking lines */
  .vhs-tracking {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 8;
    overflow: hidden;
  }

  .vhs-line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.1) 90%,
      transparent 100%
    );
    animation: vhsTrack 2s linear infinite;
  }

  @keyframes vhsTrack {
    0% { transform: translateY(-100vh); }
    100% { transform: translateY(100vh); }
  }

  /* VHS Color bleed / RGB separation */
  .vhs-color-bleed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 7;
    mix-blend-mode: screen;
    opacity: 0.15;
  }

  .vhs-color-bleed::before {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    width: 100%;
    height: 100%;
    background: rgba(255, 0, 0, 0.3);
    animation: colorShift 0.1s steps(2) infinite;
  }

  .vhs-color-bleed::after {
    content: '';
    position: absolute;
    top: 0;
    left: 2px;
    width: 100%;
    height: 100%;
    background: rgba(0, 255, 255, 0.3);
    animation: colorShift 0.1s steps(2) infinite reverse;
  }

  @keyframes colorShift {
    0% { transform: translateX(0); }
    50% { transform: translateX(2px); }
    100% { transform: translateX(-1px); }
  }

  /* Floating particles */
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 6;
  }

  .particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) translateX(20px);
      opacity: 0;
    }
  }

  /* Grainy bar texture */
  .grainy-bar {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.6) 20%,
      rgba(0, 0, 0, 0.55) 50%,
      rgba(0, 0, 0, 0.6) 80%,
      rgba(0, 0, 0, 0.7) 100%
    );
    position: relative;
    overflow: hidden;
  }

  .grainy-bar::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-image:
      url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='denim'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23denim)'/%3E%3C/svg%3E"),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 1px,
        rgba(255, 255, 255, 0.02) 1px,
        rgba(255, 255, 255, 0.02) 2px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 1px,
        rgba(0, 0, 0, 0.03) 1px,
        rgba(0, 0, 0, 0.03) 2px
      );
    opacity: 0.4;
    pointer-events: none;
    animation: grainMove 0.5s steps(10) infinite;
  }

  .grainy-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.03) 0%,
      transparent 30%,
      transparent 70%,
      rgba(0, 0, 0, 0.05) 100%
    );
    pointer-events: none;
  }

  @keyframes grainMove {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-2%, -2%); }
    20% { transform: translate(2%, 2%); }
    30% { transform: translate(-1%, 1%); }
    40% { transform: translate(1%, -1%); }
    50% { transform: translate(-2%, 1%); }
    60% { transform: translate(2%, -2%); }
    70% { transform: translate(-1%, -1%); }
    80% { transform: translate(1%, 1%); }
    90% { transform: translate(-2%, 2%); }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Spinning vinyl record */
  .vinyl {
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      #1a1a1a 0%,
      #1a1a1a 15%,
      #333 16%,
      #111 17%,
      #222 30%,
      #111 31%,
      #333 45%,
      #111 46%,
      #222 60%,
      #111 61%,
      #333 75%,
      #111 76%,
      #1a1a1a 90%,
      #333 100%
    );
    box-shadow:
      0 0 0 3px #111,
      0 0 0 6px #333,
      0 0 20px rgba(0,0,0,0.5);
    animation: spinVinyl 8s linear infinite;
  }

  .vinyl::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      #c4956a 0%,
      #a67c52 50%,
      #1a1a1a 51%,
      #1a1a1a 100%
    );
  }

  .vinyl::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8%;
    height: 8%;
    border-radius: 50%;
    background: #111;
  }

  @keyframes spinVinyl {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Butterfly */
  .butterfly {
    position: absolute;
    width: 30px;
    height: 20px;
    animation: butterflyFloat ease-in-out infinite;
  }

  .butterfly-wing {
    position: absolute;
    width: 12px;
    height: 18px;
    background: linear-gradient(135deg,
      rgba(255, 200, 150, 0.6) 0%,
      rgba(255, 150, 100, 0.4) 50%,
      rgba(200, 100, 50, 0.3) 100%
    );
    border-radius: 50% 50% 50% 50% / 70% 70% 30% 30%;
    animation: flapWing 0.3s ease-in-out infinite;
  }

  .butterfly-wing.left {
    left: 0;
    transform-origin: right center;
  }

  .butterfly-wing.right {
    right: 0;
    transform-origin: left center;
    animation-delay: 0.05s;
  }

  .butterfly-body {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 3px;
    height: 14px;
    background: rgba(100, 70, 50, 0.7);
    border-radius: 50%;
  }

  @keyframes flapWing {
    0%, 100% { transform: rotateY(0deg) scaleX(1); }
    50% { transform: rotateY(70deg) scaleX(0.5); }
  }

  @keyframes butterflyFloat {
    0%, 100% {
      transform: translate(0, 0) rotate(-5deg);
    }
    25% {
      transform: translate(20px, -30px) rotate(5deg);
    }
    50% {
      transform: translate(40px, -10px) rotate(-3deg);
    }
    75% {
      transform: translate(20px, 20px) rotate(8deg);
    }
  }

  /* VHS image filter */
  .vhs-image-filter {
    filter: saturate(0.7) contrast(1.1) brightness(0.95);
  }
`;

// Reusable VHS overlay component
export function VHSOverlay() {
  return (
    <>
      {/* Floating particles */}
      <div className="particles">
        {PARTICLES.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* VHS Color bleed / RGB separation */}
      <div className="vhs-color-bleed" />

      {/* VHS Tracking lines */}
      <div className="vhs-tracking">
        <div className="vhs-line" style={{ animationDelay: "0s" }} />
        <div className="vhs-line" style={{ animationDelay: "0.5s" }} />
        <div className="vhs-line" style={{ animationDelay: "1s" }} />
        <div className="vhs-line" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Scanlines */}
      <div className="vhs-scanlines" />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 10,
          background: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Vignette */}
      <div className="vignette" />

      {/* Film Grain */}
      <div className="film-grain" />
    </>
  );
}

// Background image component with gradient overlay
export function BackgroundImage({
  src,
  opacity = 0.2,
}: {
  src: string;
  opacity?: number;
}) {
  return (
    <div className="absolute inset-0 z-1">
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
        style={{ opacity }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, black 80%)",
        }}
      />
    </div>
  );
}
