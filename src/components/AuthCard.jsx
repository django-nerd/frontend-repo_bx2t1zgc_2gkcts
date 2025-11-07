import { User, ShieldCheck } from 'lucide-react';

export default function AuthCard() {
  return (
    <section id="auth" className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-sky-50 p-2 text-sky-600">
              <User className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Sign in to your workspace</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Use your email to access courses, cohorts, and analytics.
          </p>
          <form className="mt-5 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" placeholder="you@school.edu" className="mt-1 w-full rounded-lg border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input type="password" placeholder="••••••••" className="mt-1 w-full rounded-lg border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20" />
            </div>
            <button type="button" className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              Continue
            </button>
          </form>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4" />
            <span>Secure authentication. SSO and OTP ready.</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 text-white shadow-sm">
          <h3 className="text-lg font-semibold">Why educators choose us</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>• Consolidated classroom, content, and analytics</li>
            <li>• Role-based access for admins, instructors, and students</li>
            <li>• Built-in messaging and progress tracking</li>
          </ul>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
            <p>Tip: Enable SSO and 2FA for enterprise-grade security out of the box.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
