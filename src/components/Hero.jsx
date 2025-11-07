import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-inset ring-sky-500/30">
            Education SaaS • Modern & Secure
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A clean, futuristic learning platform for the next generation
          </h1>
          <p className="max-w-xl text-slate-300">
            Streamline enrollment, track progress, and visualize outcomes with a delightful experience. Built with modern tech, elegant design, and secure authentication.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#auth" className="rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400">Get Started</a>
            <a href="#analytics" className="rounded-lg bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10">View Analytics</a>
          </div>
        </div>

        <div className="relative h-[360px] w-full sm:h-[420px] md:h-[460px] lg:h-[520px]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0" />
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      </div>
      <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
    </section>
  );
}
