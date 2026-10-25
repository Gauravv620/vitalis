import { ArrowUpRight, BrainCircuit, Check, ExternalLink, FileText, GitBranch, ScanSearch, Sparkles } from 'lucide-react'

const capabilities = [
  {
    icon: FileText,
    title: 'Report analysis',
    text: 'Processes complex medical reports and patient data into readable findings.',
  },
  {
    icon: BrainCircuit,
    title: 'Machine learning',
    text: 'Applies machine learning models to surface patterns across health data.',
  },
  {
    icon: ScanSearch,
    title: 'Explainable insights',
    text: 'Uses SHAP explainability to make diagnostic findings easier to interpret.',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faff] text-[#102a43]">
      <section className="relative border-b border-[#dbe8f5] bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(34,105,170,0.12),transparent_30%),linear-gradient(135deg,transparent_0%,transparent_55%,rgba(232,242,251,0.55)_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-7 sm:px-10 lg:px-12 lg:pb-28">
          <header className="flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-tight text-[#0c3760]" aria-label="Health AI & Report Analyzer home">
              <span className="flex size-9 items-center justify-center rounded-xl bg-[#0b4f8a] text-white shadow-[0_8px_20px_rgba(11,79,138,0.2)]">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
              Health AI
            </a>
            <a href="https://github.com/Gauravv620" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-medium text-[#52708d] transition-colors hover:text-[#0b4f8a]">
              View on GitHub <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </header>

          <div id="top" className="grid items-center gap-16 pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:pt-28">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#2873ab]"><span className="h-px w-8 bg-[#2873ab]" /> Project overview</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#0b3155] sm:text-6xl lg:text-[78px]">Making health data easier to <span className="text-[#1767a4]">understand.</span></h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#58718a]">Health AI &amp; Report Analyzer is a full-stack web platform built with Python and Flask that automates the analysis of medical reports.</p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a href="https://github.com/Gauravv620" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#0b4f8a] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(11,79,138,0.2)] transition hover:bg-[#083d6c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b4f8a]">Explore the project <ExternalLink className="size-4" aria-hidden="true" /></a>
                <a href="#why" className="text-sm font-semibold text-[#35627f] underline decoration-[#aac7de] underline-offset-4 hover:text-[#0b4f8a]">Why it matters</a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
              <div className="absolute -inset-5 rounded-[2rem] bg-[#dcecf8] blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#cfe2f2] bg-[#f9fcff] shadow-[0_24px_60px_rgba(26,76,115,0.14)]">
                <div className="flex items-center justify-between border-b border-[#dbe8f5] px-6 py-5"><div className="flex gap-1.5"><span className="size-2 rounded-full bg-[#9fc5e3]" /><span className="size-2 rounded-full bg-[#bad6eb]" /><span className="size-2 rounded-full bg-[#d8e8f4]" /></div><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7695ae]">Analysis view</span></div>
                <div className="p-6 sm:p-8"><div className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7390a8]">Patient report</p><p className="mt-2 text-xl font-semibold text-[#123e62]">Health insights</p></div><div className="flex size-10 items-center justify-center rounded-xl bg-[#e3f0fa] text-[#1767a4]"><BrainCircuit className="size-5" aria-hidden="true" /></div></div>
                  <div className="mt-8 rounded-xl border border-[#d9e9f5] bg-white p-4"><div className="mb-4 flex justify-between text-xs font-semibold text-[#607f98]"><span>Model explanation</span><span className="text-[#1e78b0]">SHAP</span></div><div className="space-y-3">{[['Feature A', '78%', 'bg-[#1767a4]'], ['Feature B', '56%', 'bg-[#65a5d0]'], ['Feature C', '34%', 'bg-[#9bc7e5]']].map(([label, width, color]) => <div key={label} className="flex items-center gap-3"><span className="w-16 text-[11px] text-[#7690a5]">{label}</span><div className="h-2 flex-1 rounded-full bg-[#e8f1f8]"><div className={`h-full rounded-full ${color}`} style={{ width }} /></div><span className="w-8 text-right text-[11px] font-semibold text-[#41657f]">{width}</span></div>)}</div></div>
                  <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#eaf4fb] px-4 py-3 text-xs font-medium text-[#286487]"><Check className="size-4 text-[#1767a4]" aria-hidden="true" /> Transparent, readable health analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#2873ab]">The idea</p><h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0b3155] sm:text-5xl">Clarity for the people reading the report.</h2></div><div><p className="max-w-2xl text-xl leading-9 text-[#547089]">The platform processes complex patient data and generates instant visual insights using machine learning and explainable AI models.</p><p className="mt-6 max-w-2xl text-base leading-8 text-[#70889d]">By providing transparent, readable health analytics through SHAP explainability, it helps patients and practitioners easily interpret diagnostic findings.</p></div></div>
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-[#dbe8f5] bg-[#dbe8f5] md:grid-cols-3">{capabilities.map(({ icon: Icon, title, text }) => <article key={title} className="bg-white p-7 sm:p-8"><Icon className="size-6 text-[#1767a4]" aria-hidden="true" /><h3 className="mt-10 text-lg font-semibold text-[#123e62]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#70889d]">{text}</p></article>)}</div>
      </section>

      <footer className="border-t border-[#dbe8f5] bg-[#0b3155] text-white"><div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10 md:flex-row md:items-end md:justify-between lg:px-12"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8bbada]">Built by</p><p className="mt-3 text-2xl font-semibold tracking-tight">Gaurav Kumar</p></div><a href="https://github.com/Gauravv620" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 text-sm font-medium text-[#d9edf9] transition hover:text-white"><GitBranch className="size-5" aria-hidden="true" /> github.com/Gauravv620 <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" /></a></div></footer>
    </main>
  )
}
