import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Lightbulb } from "lucide-react";
import ParticlesBg from "../components/ParticlesBg";
import { conclusions, datasetInfo } from "../data/variables";

const tagColors = {
  "prioridad":       "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "importante":      "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "secundario":  "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export default function Conclusions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark-900 grid-bg relative">
      <ParticlesBg />

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #22d3ee, transparent 70%)", filter: "blur(80px)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-white/50 hover:text-cyan-400 transition-colors mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver al Dashboard
        </button>

        {/* Title */}
        <div className="mb-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 
            flex items-center justify-center mx-auto mb-5 animate-float">
            <Lightbulb size={28} className="text-cyan-400" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-black uppercase tracking-wider shimmer-text mb-3">
            Conclusiones
          </h1>
          <p className="text-white/40 text-sm font-body">
            {datasetInfo.subtitle} · {datasetInfo.author}
          </p>
        </div>

        {/* Lista de conclusiones */}
        <div className="flex flex-col gap-4">
          {conclusions.map((c, i) => (
            <div
              key={c.id}
              className="glass glass-hover rounded-2xl p-6 flex gap-5 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Número */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20
                flex items-center justify-center font-display text-sm font-black text-cyan-400">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">
                    {c.title}
                  </h3>
                  {c.tag && (
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border
                      ${tagColors[c.tag] || "bg-white/10 text-white/40 border-white/10"}`}>
                      {c.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/60 font-body leading-relaxed">{c.text}</p>
              </div>

              <CheckCircle2 size={18} className="text-cyan-500/40 flex-shrink-0 mt-1" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display text-xs font-bold uppercase tracking-widest
              bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-300
              hover:from-cyan-500/30 hover:to-violet-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
              transition-all duration-300"
          >
            <ArrowLeft size={14} />
            Regresar al Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}