import AnimatedArtGallery from '@/components/AnimatedArtGallery';

export const metadata = { title: 'AI Art Gallery — Vaibhav Jain' };

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <h1 className="section-title">AI Art Gallery</h1>
      <p className="section-subtitle max-w-2xl">
        A playful, animated wall of AI-generated artwork. Replace these URLs with your own pieces.
      </p>
      <AnimatedArtGallery />
    </div>
  );
}
