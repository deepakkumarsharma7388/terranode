import PageHero from '../components/PageHero.jsx'

const CASES = [
  { name: 'Metro Expansion, North Corridor', sector: 'Transportation', desc: 'Convergence and settlement monitoring across 12km of new tunnel.' },
  { name: 'Riverside Bridge Retrofit', sector: 'Bridges', desc: 'Structural health monitoring during a multi-year retrofit program.' },
  { name: 'Highland Tailings Facility', sector: 'Mining', desc: 'Continuous pore-pressure and displacement tracking for dam safety.' },
  { name: 'Coastal Port Expansion', sector: 'Civil & Construction', desc: 'Survey and environmental data unified across three contractors.' },
]

export default function UseCases() {
  return (
    <div>
      <PageHero
        eyebrow="Use Cases"
        title="Where Terranode runs"
        subtitle="A look at how teams use the platform across different project types."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {CASES.map((c) => (
            <div key={c.name} className="rounded-xl border border-ink/10 bg-white p-7">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">{c.sector}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-ink/60">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
