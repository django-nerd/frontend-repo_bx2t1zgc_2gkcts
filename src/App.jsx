import Hero from './components/Hero';
import AuthCard from './components/AuthCard';
import StatsCards from './components/StatsCards';
import Analytics from './components/Analytics';
import DataTable from './components/DataTable';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <header className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-fuchsia-500" />
            <span className="text-lg font-semibold text-slate-900">EduVibe</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
            <a href="#analytics" className="hover:text-slate-900">Analytics</a>
            <a href="#auth" className="hover:text-slate-900">Sign in</a>
            <a href="#" className="rounded-lg bg-slate-900 px-3 py-1.5 font-medium text-white hover:bg-slate-800">Launch</a>
          </nav>
        </div>
      </header>

      <main className="space-y-10 lg:space-y-12">
        <Hero />
        <StatsCards />
        <Analytics />
        <DataTable />
        <AuthCard />
      </main>

      <footer className="mx-auto max-w-7xl px-6 py-12 text-center text-sm text-slate-500 lg:px-10">
        © {new Date().getFullYear()} EduVibe — Crafted for modern education.
      </footer>
    </div>
  );
}

export default App;
