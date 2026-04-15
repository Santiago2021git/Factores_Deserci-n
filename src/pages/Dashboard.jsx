import { useState } from "react";
import ParticlesBg from "../components/ParticlesBg";
import Header from "../components/Header";
import VariableSidebar from "../components/VariableSidebar";
import VariablePanel from "../components/VariablePanel";
import StatsBar from "../components/StatsBar";
import { variables } from "../data/variables";

export default function Dashboard() {
  const [activeId, setActiveId] = useState(variables[0]?.id);
  const activeVar = variables.find((v) => v.id === activeId) || variables[0];

  return (
    <div className="min-h-screen bg-dark-900 grid-bg relative">
      <ParticlesBg />

      {/* Orbs decorativos */}
      <div className="fixed top-20 right-20 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)", filter: "blur(40px)" }} />
      <div className="fixed bottom-20 left-10 w-96 h-96 rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)", filter: "blur(60px)" }} />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <StatsBar />

          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <VariableSidebar
              variables={variables}
              activeId={activeId}
              onSelect={setActiveId}
            />
            {activeVar && <VariablePanel variable={activeVar} />}
          </div>
        </main>

        <footer className="relative z-10 text-center py-4 text-xs text-white/20 font-body border-t border-white/5">
          Dashboard · Análisis de Datos · {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}