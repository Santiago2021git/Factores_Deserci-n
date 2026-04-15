import { colorMap } from "../data/variables";

export default function VariableSidebar({ variables, activeId, onSelect }) {
  return (
    <aside className="relative z-10 w-full lg:w-64 xl:w-72 flex-shrink-0">
      <div className="glass rounded-2xl p-4 sticky top-6">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4 px-1">
          Variables Dataset
        </p>
        <nav className="flex flex-col gap-1.5">
          {variables.map((v, i) => {
            const isActive = v.id === activeId;
            const c = colorMap[v.color] || colorMap.cyan;
            return (
              <button
                key={v.id}
                onClick={() => onSelect(v.id)}
                style={{
                  animationDelay: `${i * 80}ms`,
                  borderColor: isActive ? c.border : "transparent",
                  backgroundColor: isActive ? c.bg : "transparent",
                  boxShadow: isActive ? `0 0 15px ${c.accent}22` : "none",
                }}
                className={`
                  w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-left
                  border transition-all duration-300 animate-fade-up
                  ${isActive ? "text-white" : "text-white/50 hover:text-white/80 hover:bg-white/5"}
                `}
              >
                <span className="text-lg leading-none">{v.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className={`font-display text-xs font-bold uppercase tracking-wider truncate`}
                    style={{ color: isActive ? c.accent : "inherit" }}>
                    {v.label}
                  </p>
                  <p className="text-[10px] text-white/30 truncate mt-0.5">
                    {v.charts.length} {v.charts.length === 1 ? "gráfica" : "gráficas"}
                  </p>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
                    style={{ backgroundColor: c.accent }} />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}