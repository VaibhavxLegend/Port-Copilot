export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-white/10 bg-white/[0.02]">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="/" className="text-lg font-semibold">Vaibhav Jain</a>
            <p className="mt-2 max-w-xs text-sm text-gray-400">
              Developer crafting modern, accessible web experiences.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-gray-500">Pages</p>
              <ul className="space-y-1">
                <li><a className="hover:text-white text-gray-300" href="/about">About</a></li>
                <li><a className="hover:text-white text-gray-300" href="/projects">Projects</a></li>
                <li><a className="hover:text-white text-gray-300" href="/contact">Contact</a></li>
                <li><a className="hover:text-white text-gray-300" href="/vaibhav-jain-cv.pdf" download>Download CV</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500">Social</p>
              <ul className="space-y-1">
                <li>
                  <a className="group inline-flex items-center gap-2 text-gray-300 hover:text-white" href="#" target="_blank" rel="noreferrer noopener">
                    <GitHubIcon className="h-4 w-4 text-gray-400 group-hover:text-white" /> GitHub
                  </a>
                </li>
                <li>
                  <a className="group inline-flex items-center gap-2 text-gray-300 hover:text-white" href="#" target="_blank" rel="noreferrer noopener">
                    <LinkedInIcon className="h-4 w-4 text-gray-400 group-hover:text-white" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a className="group inline-flex items-center gap-2 text-gray-300 hover:text-white" href="#" target="_blank" rel="noreferrer noopener">
                    <XIcon className="h-4 w-4 text-gray-400 group-hover:text-white" /> X (Twitter)
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <p className="text-gray-500 text-sm">Get in touch</p>
            <ul className="mt-2 text-sm space-y-1">
              <li><a className="text-gray-300 hover:text-white" href="mailto:vaibhav2019jain@gmail.com">vaibhav2019jain@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Vaibhav Jain. All rights reserved.</p>
          <p>Built with Next.js + Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.793 23.39c.6.11.82-.26.82-.58v-2.03c-3.338.73-4.04-1.61-4.04-1.61-.546-1.39-1.334-1.76-1.334-1.76-1.09-.75.083-.736.083-.736 1.205.086 1.84 1.24 1.84 1.24 1.07 1.84 2.807 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.665-.3-5.467-1.34-5.467-5.96 0-1.32.47-2.4 1.236-3.25-.124-.303-.536-1.52.117-3.16 0 0 1.008-.32 3.3 1.24.957-.27 1.983-.4 3.004-.4 1.02 0 2.046.14 3.003.4 2.29-1.56 3.297-1.24 3.297-1.24.655 1.64.243 2.86.12 3.16.77.85 1.235 1.93 1.235 3.25 0 4.63-2.807 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55V14.8c0-1.35-.02-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99v5.75H9.3V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z"/>
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.16l-4.81-6.04L5.9 22H2.64l8.06-9.2L2 2h6.25l4.35 5.53L18.244 2Zm-1.08 18h1.78L8.94 4h-1.8l9.02 16Z"/>
    </svg>
  );
}
