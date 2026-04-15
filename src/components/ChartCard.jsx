import { useState } from "react";
import { ZoomIn, X, TrendingUp } from "lucide-react";
import { colorMap } from "../data/variables";

export default function ChartCard({ chart, color, index }) {
  const [lightbox, setLightbox] = useState(false);
  const c = colorMap[color] || colorMap.cyan;

  return (
    <>
      <div
        className="glass glass-hover rounded-2xl overflow-hidden group scanline relative"
        style={{
          animationDelay: `${index * 120}ms`,
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        {/* Imagen */}
        <div className="relative overflow-hidden bg-dark-800 aspect-video">
          <img
            src={chart.image}
            alt={chart.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          {/* Placeholder cuando no hay imagen */}
          <div
            className="absolute inset-0 hidden items-center justify-center flex-col gap-2"
            style={{ display: "none" }}
          >
            <div className="w-16 h-16 rounded-2xl border-2 border-dashed flex items-center justify-center"
              style={{ borderColor: c.border }}>
              <TrendingUp size={24} style={{ color: c.accent }} />
            </div>
            <p className="text-xs text-white/30">Imagen: {chart.image}</p>
          </div>

          {/* Overlay hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
            <button
              onClick={() => setLightbox(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-body font-medium
                bg-white/10 backdrop-blur-sm border border-white/20 text-white
                hover:bg-white/20 transition-all duration-200"
            >
              <ZoomIn size={12} />
              Ampliar
            </button>
          </div>

          {/* Badge título */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-lg text-[10px] font-display font-bold uppercase tracking-wider"
              style={{ backgroundColor: `${c.accent}22`, color: c.accent, border: `1px solid ${c.border}` }}>
              {chart.title}
            </span>
          </div>
        </div>

        {/* Análisis */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-0.5 h-4 rounded-full" style={{ backgroundColor: c.accent }} />
            <h3 className="font-display text-xs font-bold uppercase tracking-widest"
              style={{ color: c.accent }}>
              Análisis
            </h3>
          </div>
          <p className="text-sm text-white/70 font-body leading-relaxed">
            {chart.analysis}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          onClick={() => setLightbox(false)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(false)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <div className="glass rounded-2xl overflow-hidden">
              <img src={chart.image} alt={chart.title} className="w-full h-auto" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}