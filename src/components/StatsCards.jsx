import { BarChart3, Users, GraduationCap, BookOpen } from 'lucide-react';

const stats = [
  { id: 1, label: 'Active Students', value: '12,438', icon: Users, diff: '+8.2%' },
  { id: 2, label: 'Courses', value: '248', icon: BookOpen, diff: '+2.1%' },
  { id: 3, label: 'Completions', value: '6,973', icon: GraduationCap, diff: '+4.4%' },
  { id: 4, label: 'Engagement', value: '76%', icon: BarChart3, diff: '+1.7%' },
];

export default function StatsCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ id, label, value, icon: Icon, diff }) => (
          <div key={id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">{label}</p>
                <h4 className="mt-1 text-2xl font-semibold text-slate-900">{value}</h4>
              </div>
              <div className="rounded-lg bg-slate-50 p-2 text-slate-600">
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-3 text-xs font-medium text-emerald-600">{diff} this month</p>
          </div>
        ))}
      </div>
    </section>
  );
}
