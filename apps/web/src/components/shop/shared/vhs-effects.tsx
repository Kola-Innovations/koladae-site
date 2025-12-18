import { PARTICLES } from "./shop-constants";

// Reusable VHS overlay component - Tailwind only
export function VHSOverlay() {
  return (
    <>
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 z-[6] overflow-hidden">
        {PARTICLES.map((particle) => (
          <div
            key={particle.id}
            className="absolute h-0.5 w-0.5 rounded-full bg-white/60 animate-float"
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
      <div className="pointer-events-none absolute inset-0 z-[7] opacity-15 mix-blend-screen">
        <div
          className="absolute inset-0 -left-0.5 animate-color-shift"
          style={{ background: "rgba(255, 0, 0, 0.3)" }}
        />
        <div
          className="absolute inset-0 left-0.5 animate-color-shift-reverse"
          style={{ background: "rgba(0, 255, 255, 0.3)" }}
        />
      </div>

      {/* VHS Tracking lines */}
      <div className="pointer-events-none absolute inset-0 z-[8] overflow-hidden">
        {[0, 0.5, 1, 1.5].map((delay) => (
          <div
            key={delay}
            className="absolute left-0 h-[3px] w-full animate-vhs-track"
            style={{
              animationDelay: `${delay}s`,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 90%, transparent 100%)",
            }}
          />
        ))}
      </div>

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 z-[15]"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Film Grain */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
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
    <div className="absolute inset-0 z-[1]">
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

// Grainy bar component for the split bars
export function GrainyBar({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.7) 100%)",
      }}
    >
      {/* Denim texture overlay */}
      <div
        className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] animate-grain-move opacity-40"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='denim'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23denim)'/%3E%3C/svg%3E"),
            repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,0.02) 1px, rgba(255,255,255,0.02) 2px),
            repeating-linear-gradient(-45deg, transparent, transparent 1px, rgba(0,0,0,0.03) 1px, rgba(0,0,0,0.03) 2px)
          `,
        }}
      />
      {/* Fade variation */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.05) 100%)",
        }}
      />
      {children}
    </div>
  );
}

// Butterfly component
export function Butterfly({
  left,
  top,
  delay,
  duration,
}: {
  left: number;
  top: number;
  delay: number;
  duration: number;
}) {
  return (
    <div
      className="absolute z-[25] h-5 w-[30px] animate-butterfly-float"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <div
        className="absolute left-0 h-[18px] w-3 origin-right animate-flap-wing rounded-[50%_50%_50%_50%/70%_70%_30%_30%]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,200,150,0.6) 0%, rgba(255,150,100,0.4) 50%, rgba(200,100,50,0.3) 100%)",
          animationDuration: "0.3s",
        }}
      />
      <div
        className="absolute right-0 h-[18px] w-3 origin-left animate-flap-wing rounded-[50%_50%_50%_50%/70%_70%_30%_30%]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,200,150,0.6) 0%, rgba(255,150,100,0.4) 50%, rgba(200,100,50,0.3) 100%)",
          animationDuration: "0.3s",
          animationDelay: "0.05s",
        }}
      />
      <div className="absolute left-1/2 top-1/2 h-3.5 w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(100,70,50,0.7)]" />
    </div>
  );
}

// Spinning vinyl component
export function SpinningVinyl({
  size = "medium",
  className = "",
}: {
  size?: "small" | "medium" | "large";
  className?: string;
}) {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-[clamp(200px,45vw,320px)] h-[clamp(200px,45vw,320px)]",
    large: "w-80 h-80",
  };

  return (
    <div
      className={`relative animate-spin-vinyl rounded-full ${sizeClasses[size]} ${className}`}
      style={{
        background: `radial-gradient(
          circle at center,
          #1a1a1a 0%, #1a1a1a 12%, #333 13%, #111 14%,
          #222 25%, #111 26%, #333 38%, #111 39%,
          #222 52%, #111 53%, #333 66%, #111 67%,
          #222 80%, #111 81%, #1a1a1a 92%, #333 100%
        )`,
        boxShadow:
          "0 0 0 4px #111, 0 0 0 8px #333, 0 0 40px rgba(0,0,0,0.6), 0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      {/* Center label */}
      <div
        className="absolute left-1/2 top-1/2 h-[35%] w-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, #c4956a 0%, #a67c52 40%, #8b6b4a 60%, #1a1a1a 61%, #1a1a1a 100%)",
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)",
        }}
      />
      {/* Center hole */}
      <div
        className="absolute left-1/2 top-1/2 h-[8%] w-[8%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0a0a0a]"
        style={{ boxShadow: "0 0 5px rgba(0,0,0,0.5)" }}
      />
    </div>
  );
}
