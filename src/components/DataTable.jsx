import { ArrowUpDown } from 'lucide-react';
import { useMemo, useState } from 'react';

const seed = [
  { id: 'STU-1024', name: 'Ava Johnson', course: 'Algebra I', progress: 88, status: 'On Track' },
  { id: 'STU-1025', name: 'Liam Chen', course: 'World History', progress: 62, status: 'Needs Support' },
  { id: 'STU-1026', name: 'Sophia Patel', course: 'Biology', progress: 94, status: 'On Track' },
  { id: 'STU-1027', name: 'Noah Smith', course: 'Computer Science', progress: 73, status: 'On Track' },
  { id: 'STU-1028', name: 'Emma García', course: 'Literature', progress: 51, status: 'At Risk' },
];

export default function DataTable() {
  const [sortKey, setSortKey] = useState('name');
  const [asc, setAsc] = useState(true);
  const [query, setQuery] = useState('');

  const data = useMemo(() => {
    const filtered = seed.filter((row) =>
      [row.id, row.name, row.course, row.status].some((v) => v.toLowerCase().includes(query.toLowerCase()))
    );
    const sorted = [...filtered].sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      if (typeof va === 'number' && typeof vb === 'number') return asc ? va - vb : vb - va;
      return asc ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va));
    });
    return sorted;
  }, [sortKey, asc, query]);

  const setSort = (key) => {
    if (key === sortKey) setAsc(!asc);
    else {
      setSortKey(key);
      setAsc(true);
    }
  };

  const badge = (status) => {
    const styles = {
      'On Track': 'bg-emerald-50 text-emerald-700 ring-emerald-200',
      'Needs Support': 'bg-amber-50 text-amber-700 ring-amber-200',
      'At Risk': 'bg-rose-50 text-rose-700 ring-rose-200',
    }[status] || 'bg-slate-50 text-slate-700 ring-slate-200';
    return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${styles}`}>{status}</span>;
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Cohort Overview</h3>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search students, courses, status..."
            className="w-full rounded-lg border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 sm:w-80"
          />
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-slate-500">
                <th className="px-3 py-3 font-medium">ID</th>
                <th className="px-3 py-3 font-medium">
                  <button onClick={() => setSort('name')} className="inline-flex items-center gap-1">
                    Name <ArrowUpDown className="h-4 w-4" />
                  </button>
                </th>
                <th className="px-3 py-3 font-medium">
                  <button onClick={() => setSort('course')} className="inline-flex items-center gap-1">
                    Course <ArrowUpDown className="h-4 w-4" />
                  </button>
                </th>
                <th className="px-3 py-3 font-medium">
                  <button onClick={() => setSort('progress')} className="inline-flex items-center gap-1">
                    Progress <ArrowUpDown className="h-4 w-4" />
                  </button>
                </th>
                <th className="px-3 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border-t border-slate-100">
                  <td className="px-3 py-3 text-slate-600">{row.id}</td>
                  <td className="px-3 py-3 font-medium text-slate-900">{row.name}</td>
                  <td className="px-3 py-3 text-slate-700">{row.course}</td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-full max-w-[140px] overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full bg-sky-500" style={{ width: `${row.progress}%` }} />
                      </div>
                      <span className="tabular-nums text-slate-700">{row.progress}%</span>
                    </div>
                  </td>
                  <td className="px-3 py-3">{badge(row.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
