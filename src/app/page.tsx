export default function Home() {
  return (
    <main className="relative min-h-dvh flex items-center justify-center px-6">
      <div className="hex-bg"></div>
      <section className="relative max-w-3xl w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">
        <h1 className="text-5xl font-bold tracking-tight">
          Michał — Frontend Developer
        </h1>
        <p className="mt-3 text-lg/7 opacity-80">
          React • TypeScript • Next.js • Tailwind
        </p>
        <div className="mt-6 flex gap-3">
          <a className="px-5 py-2 rounded-xl bg-[var(--primary)]/20 border border-[var(--primary)]/40 hover:bg-[var(--primary)]/30 transition">
            Moje projekty
          </a>
          <a className="px-5 py-2 rounded-xl bg-[var(--accent)]/20 border border-[var(--accent)]/40 hover:bg-[var(--accent)]/30 transition">
            Kontakt
          </a>
        </div>
      </section>
    </main>
  );
}
