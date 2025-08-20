export default function Hero() {
  return (
    <section className="pt-6 md:pt-10">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-brand-400">Vaibhav Jain</span>.
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            I design and build modern web apps with delightful user experiences.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/projects" className="group relative overflow-hidden px-5 py-2.5 rounded bg-brand-500 text-white hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/30 hover-pop">
              <span>View Projects</span>
              <span className="btn-sheen" />
            </a>
            <a href="/vaibhav-jain-cv.pdf" download className="group relative overflow-hidden px-5 py-2.5 rounded border border-white/20 text-white/90 hover:text-white hover:border-white/40 hover:bg-white/5 hover-pop">
              <span>Download CV</span>
              <span className="btn-sheen" />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-500/20 via-brand-400/10 to-transparent border border-white/10" />
        </div>
      </div>
    </section>
  );
}
