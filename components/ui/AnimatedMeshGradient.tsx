"use client";

import React, { useEffect, useState } from "react";

interface AnimatedMeshGradientProps {
  variant?: "hero" | "footer";
  className?: string;
}

export function AnimatedMeshGradient({ variant = "hero", className = "" }: AnimatedMeshGradientProps) {
  const flipped = variant === "footer";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!flipped) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Gentle parallax displacement based on mouse movement
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 40;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePos({ x: xPercent, y: yPercent });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [flipped]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        backgroundColor: flipped ? "#ffffff" : "#EEF4FC",
      }}
    >
      <style>{`
        @keyframes fluidAurora1 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1) rotate(0deg);
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          }
          33% {
            transform: translate(14%, -10%) scale(1.18) rotate(18deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          66% {
            transform: translate(-10%, 12%) scale(1.08) rotate(-14deg);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }
        @keyframes fluidAurora2 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1.05) rotate(0deg);
            border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%;
          }
          33% {
            transform: translate(-18%, 14%) scale(0.92) rotate(-22deg);
            border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%;
          }
          66% {
            transform: translate(12%, -10%) scale(1.15) rotate(14deg);
            border-radius: 40% 60% 60% 40% / 50% 30% 70% 50%;
          }
        }
        @keyframes fluidAurora3 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1) rotate(0deg);
            border-radius: 60% 40% 30% 70% / 50% 50% 40% 60%;
          }
          40% {
            transform: translate(14%, 18%) scale(1.25) rotate(25deg);
            border-radius: 30% 70% 70% 30% / 60% 40% 60% 40%;
          }
          75% {
            transform: translate(-14%, -12%) scale(0.98) rotate(-18deg);
            border-radius: 50% 50% 40% 60% / 40% 60% 50% 50%;
          }
        }
        @keyframes organicPulse {
          0%, 100% {
            transform: scale(1) translate(0%, 0%);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.22) translate(-8%, -10%);
            opacity: 1;
          }
        }
        @keyframes subtleWave {
          0% { transform: translateY(0px) scaleY(1); }
          50% { transform: translateY(-8px) scaleY(1.04); }
          100% { transform: translateY(0px) scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mesh-blob { animation: none !important; }
        }
      `}</style>

      {/* Layer 0: Ambient Bioluminescent Deep Base (Organic Ocean Tone) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: flipped
            ? "radial-gradient(ellipse at 50% 60%, rgba(209,250,229,0.6) 0%, #ffffff 100%)"
            : "radial-gradient(ellipse at 70% 40%, #ecfdf5 0%, #f0fdf4 100%)",
        }}
      />

      {/* Blob 1: Ultra Deep Royal / Oceanic Base Blob */}
      <div
        className="mesh-blob absolute blur-[95px] will-change-transform"
        style={{
          width: flipped ? "95%" : "75%",
          height: flipped ? "95%" : "75%",
          background: flipped
            ? "radial-gradient(circle at 40% 40%, rgba(5,150,105,0.22) 0%, transparent 70%)"
            : "radial-gradient(circle, #059669 0%, #047857 100%)",
          [flipped ? "top" : "bottom"]: flipped ? "-20%" : "-15%",
          right: "-10%",
          opacity: flipped ? 0.95 : 0.88,
          animation: "fluidAurora1 15s ease-in-out infinite",
          transform: flipped ? `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` : undefined,
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Blob 2: Vibrant Electric Marine Blue & Cyan Light Wave */}
      <div
        className="mesh-blob absolute blur-[80px] will-change-transform"
        style={{
          width: flipped ? "85%" : "70%",
          height: flipped ? "85%" : "70%",
          background: flipped
            ? "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.30) 0%, transparent 80%)"
            : "radial-gradient(circle, #34d399 0%, #10b981 100%)",
          [flipped ? "bottom" : "top"]: flipped ? "-12%" : "5%",
          left: flipped ? "15%" : "auto",
          right: flipped ? "auto" : "0%",
          opacity: flipped ? 0.92 : 0.85,
          animation: "fluidAurora2 18s ease-in-out infinite",
          transform: flipped ? `translate(${-mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px)` : undefined,
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Blob 3: Rich Indigo & Violet Deep Atmospheric Glow */}
      <div
        className="mesh-blob absolute blur-[100px] will-change-transform"
        style={{
          width: flipped ? "80%" : "65%",
          height: flipped ? "80%" : "65%",
          background: flipped
            ? "radial-gradient(circle at 60% 40%, rgba(52,211,153,0.28) 0%, transparent 80%)"
            : "radial-gradient(circle, #6ee7b7 0%, #34d399 100%)",
          [flipped ? "top" : "bottom"]: flipped ? "5%" : "15%",
          left: flipped ? "-10%" : "10%",
          opacity: flipped ? 0.88 : 0.75,
          animation: "fluidAurora3 20s ease-in-out infinite",
          transform: flipped ? `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` : undefined,
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Blob 4: Living Specular Light Caustic - gives lifelike breathing feel */}
      <div
        className="mesh-blob absolute blur-[65px] will-change-transform pointer-events-none"
        style={{
          width: flipped ? "60%" : "50%",
          height: flipped ? "60%" : "50%",
          background: flipped
            ? "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 75%)"
            : "radial-gradient(circle, rgba(255, 255, 255, 0.75) 0%, rgba(16, 185, 129, 0.3) 50%, transparent 80%)",
          top: flipped ? "25%" : "25%",
          right: flipped ? "20%" : "15%",
          animation: "organicPulse 10s ease-in-out infinite",
          transform: flipped ? `translate(${-mousePos.x * 0.8}px, ${-mousePos.y * 0.8}px)` : undefined,
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Blob 5: Bottom Aurora Floor - warm oceanic luminescence */}
      {flipped && (
        <div
          className="mesh-blob absolute bottom-0 inset-x-0 h-1/2 blur-[80px] pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(16, 185, 129, 0.12) 0%, transparent 80%)",
            animation: "subtleWave 8s ease-in-out infinite",
          }}
        />
      )}

      {/* Soft Analog Film Grain Noise (Organic Tactile Feel) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
