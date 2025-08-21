"use client";

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [render, setRender] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const alreadySeen = sessionStorage.getItem('splashSeen');

    if (alreadySeen) {
      setVisible(false);
      setRender(false);
      return;
    }

    const duration = prefersReduced ? 50 : 1400;
    const t1 = setTimeout(() => {
      setVisible(false);
      try { sessionStorage.setItem('splashSeen', '1'); } catch {}
    }, duration);
    const t2 = setTimeout(() => setRender(false), duration + 640);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!render) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-[#0a0d16] to-[#0b1020] dark:from-black dark:to-[#0b0f1a] transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="relative">
        <div className="absolute -inset-14 blur-3xl bg-[radial-gradient(ellipse_at_center,theme(colors.brand.500/_0.25),transparent_60%)]" />
        <div className="relative grid place-items-center">
          <div className="relative h-28 w-28">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg,theme(colors.brand.400),theme(colors.brand.500),theme(colors.brand.600),theme(colors.brand.400))] animate-spin-slower" />
            <div className="absolute inset-[6px] rounded-full bg-[#0b1020] dark:bg-black" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-xl font-semibold bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent tracking-wide">VJ</span>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-400">Loading</div>
        </div>
      </div>
    </div>
  );
}
