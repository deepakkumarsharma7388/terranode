export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-ink py-20 text-center text-white">
      <div className="mx-auto max-w-3xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-white/60">{subtitle}</p>}
      </div>
    </section>
  )
}
