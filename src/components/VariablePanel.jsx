import { useEffect, useState } from "react";
import ChartCard from "./ChartCard";
import { colorMap } from "../data/variables";

export default function VariablePanel({ variable }) {
  const [visible, setVisible] = useState(false);
  const c = colorMap[variable.color] || colorMap.cyan;

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [variable.id]);

  return (
    <div className={`flex-1 min-w-0 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      {/* Header de variable */}
      <div className="glass rounded-2xl p-6 mb-6 relative overflow-hidden"
        style={{ borderColor: c.border }}>
        {/* Glow fondo */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top left, ${c.accent}33, transparent 60%)` }} />

        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">  
          <div className="flex-1">
            <h2 className="font-display text-2xl font-black uppercase tracking-wider"
              style={{ color: c.accent }}>
              {variable.label}
            </h2>
            <p className="text-sm text-white/60 font-body mt-1 max-w-2xl leading-relaxed">
              {variable.description}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="font-display text-3xl font-black" style={{ color: c.accent }}>
              {variable.charts.length}
            </div>
            <div className="text-[10px] text-white/30 uppercase tracking-widest">
              {variable.charts.length === 1 ? "Gráfica" : "Gráficas"}
            </div>
          </div>
        </div>
      </div>

      {/* Grid de gráficas */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {variable.charts.map((chart, i) => (
          <ChartCard key={chart.id} chart={chart} color={variable.color} index={i} />
        ))}
      </div>
    </div>
  );
}