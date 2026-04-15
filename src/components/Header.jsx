import { useNavigate } from "react-router-dom";
import { FileText, BarChart3, Sparkles } from "lucide-react";
import { datasetInfo } from "../data/variables";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="relative z-10 w-full px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/5">
      {/* Logo / Título */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center animate-pulse2">
            <BarChart3 size={20} className="text-cyan-400" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
        </div>
        <div>
          <h1 className="font-display text-sm font-bold text-gradient tracking-wider uppercase">
            {datasetInfo.title}
          </h1>
          <p className="text-[11px] text-white/40 font-body">
            {datasetInfo.subtitle}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="hidden md:flex items-center gap-6 text-xs text-white/40">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
          {datasetInfo.totalObservations.toLocaleString()} Registros
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
          {datasetInfo.totalVariables} variables
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          {datasetInfo.author} · {datasetInfo.year}
        </span>
      </div>

      {/* Botón Conclusiones */}
      <button
        onClick={() => navigate("/conclusions")}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display text-xs font-bold uppercase tracking-widest
          bg-gradient-to-r from-cyan-500/20 to-violet-500/20 
          border border-cyan-500/30 text-cyan-300
          hover:from-cyan-500/30 hover:to-violet-500/30 hover:border-cyan-400/50
          hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
          transition-all duration-300 group"
      >
        <Sparkles size={14} className="group-hover:rotate-12 transition-transform duration-300" />
        Ver Conclusiones
        <FileText size={14} />
      </button>

      <button
        onClick={() => navigate("/recomendaciones")}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display text-xs font-bold uppercase tracking-widest
          bg-gradient-to-r from-cyan-500/20 to-violet-500/20 
          border border-cyan-500/30 text-cyan-300
          hover:from-cyan-500/30 hover:to-violet-500/30 hover:border-cyan-400/50
          hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
          transition-all duration-300 group"
      >
        <Sparkles size={14} className="group-hover:rotate-12 transition-transform duration-300" />
        Ver Recomendaciones
        <FileText size={14} />
      </button>
    </header>
  );
}