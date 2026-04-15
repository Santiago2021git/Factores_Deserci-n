import { variables } from "../data/variables";

export default function StatsBar() {
  const totalCharts = variables.reduce((acc, v) => acc + v.charts.length, 0);

  return (
    <div className="relative z-10 w-full grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {[
        { label: "Pestañas", value: variables.length, color: "#22d3ee" },
        { label: "Gráficas", value: totalCharts, color: "#8b5cf6" },
        { label: "Análisis", value: totalCharts, color: "#10b981" },
        { label: "Dataset", value: "ESP", color: "#f59e0b" },
      ].map((stat, i) => (
        <div key={i} className="glass rounded-xl px-4 py-3.5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-display font-black"
            style={{ backgroundColor: `${stat.color}18`, color: stat.color }}>
            {typeof stat.value === "number" ? stat.value : "∞"}
          </div>
          <div>
            <div className="font-display text-lg font-black leading-none" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}