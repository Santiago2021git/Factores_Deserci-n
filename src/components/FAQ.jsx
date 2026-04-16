import { useState } from "react";

// ══════════════════════════════════════════════════════════════
//  ARCHIVO DE PREGUNTAS FRECUENTES
//  Edita este arreglo para agregar, quitar o modificar preguntas
// ══════════════════════════════════════════════════════════════

const FAQ_DATA = [
  {
    category: "Dataset General",
    icon: "🗃️",
    color: "#22d3ee",
    questions: [
      {
        q: "¿Cuál es el origen del dataset?",
        a: "El dataset fue obtenido de la plataforma Kaggle, contiene información recopilada sobre factores que afectan el rendimiento academico. Cuenta con 20.000 datos y 12 variables entre cuantitativas y cualitativas.",
      },
      {
        q: "¿Cual es la finalidad del proyecto?",
        a: "Inicialmente el dataset se centra en tomar en cuenta los diversos factores que pueden afectar a los estudiantes para asi predecir su nota, sin embargo se puede hacer diferentes analisis tomando estos datos y tener en cuenta estudios sobre rendimiento academico y deserción escolar",
      },
      {
        q: "¿El dataset tiene valores faltantes?",
        a: "No, es un dataset limpio por defecto y sin valores faltantes ni nulos",
      },
      {
        q: "¿Cual es la fecha del estudio?",
        a: "El estudio es de diciembre de 2025",
      },
      {
        q: "¿Qué tipo de datos predominan en el dataset?",
        a: "Predominan datos numéricos y categóricos, lo que permite aplicar tanto análisis estadístico como análisis comparativo.",
      },
      {
        q: "¿Cuál es la variable objetivo del estudio?",
        a: "La variable objetivo es exam_score, ya que representa el rendimiento académico de los estudiantes.",
      }
    ],
  },
  {
    category: "Variables",
    icon: "📊",
    color: "#8b5cf6",
    questions: [
      {
        q: "¿Cuántas variables tiene el dataset?",
        a: "El dataset contiene 13 variables en total: 6 cuantitativas (id, edad, horas_estudio, atención_clase, horas_sueño, exam_score) y 7 cualitativas (genero, curso, acceso_internet, calidad_sueño, metodo_estudio, calificacion_instalaciones, dificultad_examenes).",
      },
      {
        q: "¿Cuál es la variable más importante del análisis?",
        a: "Despues del estudio, las variables mas importantes para un mejor rendimiento academico son: Horas de estudio, horas de sueño ",
      },
      {
        q: "¿Qué variable presenta mayor variabilidad?",
        a: "La variable de exam_score es la que presenta mas variabilidad ",
      },
      {
        q: "¿Por qué se codificaron variables?",
        a: "Para poder aplicar análisis cuantitativos y modelos predictivos, ya que los algoritmos requieren datos numéricos.",
      },
    ],
  },
  {
    category: "Análisis Estadístico",
    icon: "📈",
    color: "#10b981",
    questions: [
      {
        q: "¿Existe relación entre horas de estudio y rendimiento?",
        a: "Sí, se observa una relación positiva: a mayor cantidad de horas de estudio, mejores resultados.",
      },
      {
        q: "¿Existe correlación entre las variables?",
        a: "Se encontró correlación positiva moderada entre horas de estudio y horas de sueño con un mejor rendimiento academico, factores como edad y genero no influyen en el rendimiento.",
      },
      {
        q: "¿Cómo influye la calidad del sueño?",
        a: "Los estudiantes con mejor calidad de sueño tienden a tener mayores puntajes, evidenciando su impacto en el aprendizaje.",
      },
      {
        q: "¿La asistencia a clase influye en el rendimiento?",
        a: "Sí, una mayor asistencia está asociada con mejores resultados académicos.",
      },

      {
        q: "¿El método de estudio afecta el desempeño?",
        a: "Sí, algunos métodos muestran mejores resultados que otros, lo que indica que no todas las estrategias son igual de efectivas.",
      },

      {
        q: "¿Las variables demográficas son determinantes?",
        a: "No son determinantes por sí solas, pero sí pueden generar variaciones en los resultados.",
      },

    ],
  },
  {
    category: "Conclusiones",
    icon: "💡",
    color: "#f59e0b",
    questions: [
      {
        q: "¿Cuál es el principal factor que influye en el rendimiento?",
        a: "No existe un único factor, sino una combinación de variables, tales como horas de estudio, Calidad del sueño y Asistencia",
      },
      {
        q: "¿Se puede predecir el rendimiento académico?",
        a: "Sí, mediante la integración de múltiples variables es posible construir un modelo predictivo confiable.",
      },
      {
        q: "¿El descanso es realmente importante?",
        a: "Sí, el descanso adecuado mejora significativamente la capacidad de aprendizaje y el rendimiento.",
      },
      {
        q: "¿Cuál es la principal conclusión del estudio?",
        a: "El rendimiento académico es un fenómeno multifactorial, donde intervienen hábitos personales, condiciones académicas y características individuales.",
      }
    ],
  },
];

// ── Ítem individual de pregunta ──
function FAQItem({ item, index, accentColor }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl transition-all duration-500 ease-in-out"
      style={{
        // Borde y fondo cambian según el estado
        border: open
          ? `1px solid ${accentColor}88`
          : "1px solid rgba(255,255,255,0.06)",
        background: open
          ? `rgba(${hexToRgb(accentColor)}, 0.15)`
          : "rgba(255,255,255,0.02)",
        
        // Prioridad visual: z-index alto cuando está abierto
        zIndex: open ? 50 : 1,
        position: "relative",
        
        // Efecto sutil de elevación
        transform: open ? "scale(1.02) translateY(-2px)" : "scale(1) translateY(0)",
        boxShadow: open 
          ? `0 12px 30px -10px rgba(0,0,0,0.5), 0 0 20px ${accentColor}22` 
          : "none",
      }}
    >
      <button
        onClick={() => setOpen(!open)} // Toggle: abre y cierra al hacer click
        className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left focus:outline-none"
      >
        <span
          className="text-sm font-medium leading-snug transition-colors duration-300"
          style={{
            color: open ? "#ffffff" : "rgba(255,255,255,0.65)",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          {item.q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300"
          style={{
            background: open ? accentColor : "rgba(255,255,255,0.05)",
            color: open ? "#000" : "rgba(255,255,255,0.3)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            boxShadow: open ? `0 0 10px ${accentColor}66` : "none",
          }}
        >
          +
        </span>
      </button>

      {/* Contenedor de la Respuesta: Se expande para mostrar TODO el texto */}
      <div
        style={{
          maxHeight: open ? "1000px" : "0", // Valor alto para asegurar que no se corte
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className="px-4 pb-6 text-sm leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.85)",
            fontFamily: "DM Sans, sans-serif",
            borderTop: `1px solid ${accentColor}33`,
            paddingTop: "16px",
          }}
        >
          {item.a}
        </div>
      </div>
    </div>
  );
}

// ── Utilidad: hex a rgb para rgba dinámico ──
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

// ── Componente principal ──
export default function FAQ() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const category = FAQ_DATA[activeCategory];

  return (
    <>
      {/* Burbuja flotante */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: open
            ? "linear-gradient(135deg, #0891b2, #7c3aed)"
            : "linear-gradient(135deg, #22d3ee, #8b5cf6)",
          boxShadow: open
            ? "none"
            : "0 0 25px rgba(34,211,238,0.45), 0 4px 20px rgba(0,0,0,0.4)",
          transform: open ? "scale(0.92)" : "scale(1)",
        }}
        title="Preguntas frecuentes"
      >
        <span
          style={{
            fontSize: "20px",
            display: "inline-block",
            transition: "transform 0.3s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          {open ? "✕" : "❓"}
        </span>
      </button>

      {/* Ping animado cuando está cerrado */}
      {!open && (
        <span
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full pointer-events-none"
          style={{
            animation: "ping 2.5s cubic-bezier(0,0,0.2,1) infinite",
            background: "rgba(34,211,238,0.25)",
          }}
        />
      )}

      {/* Panel FAQ */}
      <div
        className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col rounded-2xl overflow-hidden"
        style={{
          height: "520px",
          background: "rgba(8,12,25,0.98)",
          border: "1px solid rgba(34,211,238,0.2)",
          boxShadow: "0 0 40px rgba(34,211,238,0.12), 0 20px 60px rgba(0,0,0,0.7)",
          backdropFilter: "blur(20px)",
          transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          transform: open ? "scale(1) translateY(0)" : "scale(0.88) translateY(16px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transformOrigin: "bottom right",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3.5 flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, rgba(34,211,238,0.08), rgba(139,92,246,0.08))",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0"
            style={{
              background: "rgba(34,211,238,0.12)",
              border: "1px solid rgba(34,211,238,0.3)",
            }}
          >
            ❓
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="text-xs font-bold uppercase tracking-widest text-cyan-300"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Preguntas Frecuentes
            </p>
            <p className="text-[10px] text-white/30">
              {FAQ_DATA.reduce((acc, c) => acc + c.questions.length, 0)} preguntas disponibles
            </p>
          </div>
        </div>

        {/* Tabs de categorías */}
        <div
          className="flex gap-1.5 px-3 py-2.5 overflow-x-auto flex-shrink-0"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            scrollbarWidth: "none",
          }}
        >
          {FAQ_DATA.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex-shrink-0"
              style={{
                fontFamily: "Orbitron, sans-serif",
                background:
                  activeCategory === i ? `${cat.color}20` : "rgba(255,255,255,0.03)",
                border:
                  activeCategory === i
                    ? `1px solid ${cat.color}44`
                    : "1px solid rgba(255,255,255,0.06)",
                color: activeCategory === i ? cat.color : "rgba(255,255,255,0.35)",
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Lista de preguntas */}
        <div
          className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(34,211,238,0.15) transparent" }}
        >
          {/* Título de categoría activa */}
          <div className="flex items-center gap-2 mb-1 px-1">
            <span
              className="w-1 h-4 rounded-full flex-shrink-0"
              style={{ background: category.color }}
            />
            <span
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: category.color, fontFamily: "Orbitron, sans-serif" }}
            >
              {category.category}
            </span>
            <span className="text-[10px] text-white/20 ml-auto">
              {category.questions.length} preguntas
            </span>
          </div>

          {category.questions.map((item, i) => (
            <FAQItem
              key={`${activeCategory}-${i}`}
              item={item}
              index={i}
              accentColor={category.color}
            />
          ))}
        </div>
        

        {/* Footer */}
        <div
          className="flex-shrink-0 px-4 py-2.5 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-[10px] text-white/20" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Análisis de Datos · {new Date().getFullYear()}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </>
  );
}