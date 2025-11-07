export default function Analytics() {
  // Simple inline dataset for a smooth SVG line/area chart
  const points = [
    { x: 0, y: 65 },
    { x: 1, y: 72 },
    { x: 2, y: 68 },
    { x: 3, y: 78 },
    { x: 4, y: 86 },
    { x: 5, y: 92 },
    { x: 6, y: 100 },
  ];

  const width = 900;
  const height = 260;
  const padding = 28;

  const xScale = (i) => padding + (i * (width - padding * 2)) / (points.length - 1);
  const yMax = Math.max(...points.map((p) => p.y));
  const yMin = Math.min(...points.map((p) => p.y));
  const yScale = (v) => height - padding - ((v - yMin) * (height - padding * 2)) / (yMax - yMin || 1);

  const linePath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${xScale(p.x)} ${yScale(p.y)}`)
    .join(' ');

  const areaPath = `${linePath} L ${xScale(points[points.length - 1].x)} ${height - padding} L ${xScale(points[0].x)} ${height - padding} Z`;

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  return (
    <section id="analytics" className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Learning Analytics</h3>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
            Live
          </span>
        </div>
        <div className="mt-6 overflow-x-auto">
          <svg
            width={width}
            height={height}
            className="min-w-full"
            role="img"
            aria-label="Line chart showing growth in completions"
          >
            <defs>
              <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            {[0, 1, 2, 3].map((g) => (
              <line
                key={g}
                x1={padding}
                x2={width - padding}
                y1={padding + (g * (height - padding * 2)) / 3}
                y2={padding + (g * (height - padding * 2)) / 3}
                stroke="#e2e8f0"
                strokeDasharray="4 6"
              />
            ))}

            {/* Area fill */}
            <path d={areaPath} fill="url(#grad)" />

            {/* Line */}
            <path d={linePath} fill="none" stroke="#0ea5e9" strokeWidth="2.5" />

            {/* Points */}
            {points.map((p, i) => (
              <circle key={i} cx={xScale(p.x)} cy={yScale(p.y)} r="3.5" fill="#0ea5e9" />
            ))}

            {/* X labels */}
            {labels.map((l, i) => (
              <text
                key={l}
                x={xScale(i)}
                y={height - padding / 2}
                textAnchor="middle"
                className="fill-slate-500 text-[10px]"
              >
                {l}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
