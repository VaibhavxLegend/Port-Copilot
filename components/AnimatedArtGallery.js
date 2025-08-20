'use client';
import Image from 'next/image';

const IMAGES = [
  // Replace these with your AI art URLs or local /art/*.jpg files
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922284-9e0a9cf0a83d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975926147-c2d6d5a5bcde?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975927727-26986b0f1d1e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop',
];

export default function AnimatedArtGallery({ images = IMAGES }) {
  // Create two rows with alternating directions
  const half = Math.ceil(images.length / 2);
  const rowA = images.slice(0, half);
  const rowB = images.slice(half).concat(images.slice(0, Math.max(0, 4 - images.slice(half).length)));

  return (
    <div className="space-y-6">
      <Row images={rowA} reverse={false} duration={35} />
      <Row images={rowB} reverse duration={38} />
      <style jsx>{`
        .scroll-track {
          display: inline-flex;
          gap: 16px;
          animation: gallery-marquee var(--dur, 30s) linear infinite;
          will-change: transform;
        }
        .scroll-track.reverse { animation-direction: reverse; }
        @keyframes gallery-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function Row({ images, reverse, duration }) {
  const trackStyle = { ['--dur']: `${duration}s` };
  const full = images.concat(images);
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-3">
      <div className={`scroll-track ${reverse ? 'reverse' : ''}`} style={trackStyle}>
        {full.map((src, i) => (
          <Figure key={`${src}-${i}`} src={src} />
        ))}
      </div>
    </div>
  );
}

function Figure({ src }) {
  return (
    <div className="relative h-36 w-52 shrink-0 overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
      <Image
        src={src}
        alt="AI artwork"
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 hover:scale-[1.05]"
      />
    </div>
  );
}
