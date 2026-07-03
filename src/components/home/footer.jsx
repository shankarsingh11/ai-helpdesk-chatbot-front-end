export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* TOP GRID */}
        <div className="grid gap-14 lg:grid-cols-5">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              {/* BOT ICON (SVG) */}
              <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 p-3">
                <svg
                  className="h-7 w-7 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C10 2 8 4 8 6v2H6a2 2 0 0 0-2 2v6a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6v-6a2 2 0 0 0-2-2h-2V6c0-2-2-4-4-4z" />
                  <path d="M8 14h.01M16 14h.01" />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  AI Helpdesk
                </h2>
                <p className="text-slate-400">
                  Smart AI Support Platform
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              AI Helpdesk is an intelligent support platform combining AI,
              automation, document processing, voice input, and ticket management.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-3">

              {/* GITHUB */}
              <SocialIcon href="#">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.3 7.6 10.8.6.1.8-.2.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.3-1.5-1.3-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.2 2.1 2.6 2.6.3-.7.6-1.2 1-1.5-2.5-.3-5.2-1.2-5.2-5.4 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 .9.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.1-1.2 3-1 3-1 .6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.2-2.7 5.1-5.3 5.4.4.3.7.9.7 1.9v2.8c0 .4.2.7.8.6 4.4-1.5 7.6-5.8 7.6-10.8C23.2 5.4 18.3.5 12 .5z"/>
                </svg>
              </SocialIcon>

              {/* LINKEDIN */}
              <SocialIcon href="#">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-1 1.7-2 3.5-2 3.7 0 4.4 2.4 4.4 5.6v6.2zM5.3 7.4c-1.2 0-2.1-.9-2.1-2.1S4.1 3.2 5.3 3.2s2.1.9 2.1 2.1-.9 2.1-2.1 2.1zM3.5 20.4h3.6V9H3.5v11.4z"/>
                </svg>
              </SocialIcon>

            </div>
          </div>

          {/* COLUMNS */}
          <FooterColumn
            title="Product"
            items={["Features", "Pricing", "Integrations", "Roadmap"]}
          />

          <FooterColumn
            title="Resources"
            items={["Docs", "API", "Blog", "Support"]}
          />

          <FooterColumn
            title="Company"
            items={["About", "Careers", "Privacy", "Terms"]}
          />
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AI Helpdesk. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-slate-500">
            Built with
            <span className="text-red-500">❤</span>
            React • Spring Boot • AI
          </p>

        </div>

      </div>
    </footer>
  );
}

/* ---------------- FOOTER COLUMN ---------------- */
function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- SOCIAL ICON ---------------- */
function SocialIcon({ children, href }) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-cyan-500 hover:bg-cyan-600 hover:text-white"
    >
      {children}
    </a>
  );
}