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
        a: "El dataset fue obtenido de [fuente], contiene información recopilada durante [periodo]. Cuenta con 1.500 observaciones y 8 variables entre cuantitativas y cualitativas.",
      },
      {
        q: "¿Cómo se recolectaron los datos?",
        a: "Los datos fueron recolectados mediante encuestas directas aplicadas a una muestra representativa. El proceso de recolección siguió un muestreo estratificado por edad y región.",
      },
      {
        q: "¿El dataset tiene valores faltantes?",
        a: "Sí, se encontraron 47 valores faltantes distribuidos en 3 variables (3.1% del total). Fueron tratados mediante imputación con la mediana para variables numéricas y la moda para categóricas.",
      },
    ],
  },
  {
    category: "Variables",
    icon: "📊",
    color: "#8b5cf6",
    questions: [
      {
        q: "¿Cuántas variables tiene el dataset?",
        a: "El dataset contiene 8 variables en total: 5 cuantitativas (edad, ingreso, horas_trabajo, satisfacción, puntaje) y 3 cualitativas (educación, región, género).",
      },
      {
        q: "¿Cuál es la variable más importante del análisis?",
        a: "La variable 'satisfacción' es la variable objetivo del análisis. Las demás actúan como predictoras. Se encontró que 'ingreso' y 'educación' tienen mayor peso explicativo sobre la satisfacción.",
      },
      {
        q: "¿Qué variable presenta mayor variabilidad?",
        a: "La variable 'ingreso' presenta el coeficiente de variación más alto (CV=0.87), lo que indica alta dispersión. Esto es típico en variables económicas con distribución asimétrica positiva.",
      },
      {
        q: "¿Se detectaron outliers?",
        a: "Sí, mediante el método IQR se detectaron 23 valores atípicos, principalmente en las variables 'ingreso' (15) y 'edad' (8). Representan el 1.5% del total y fueron analizados individualmente antes de cualquier tratamiento.",
      },
    ],
  },
  {
    category: "Análisis Estadístico",
    icon: "📈",
    color: "#10b981",
    questions: [
      {
        q: "¿Las variables siguen una distribución normal?",
        a: "Según la prueba de Shapiro-Wilk (α=0.05), solo 'puntaje' sigue una distribución normal (p=0.32). Las demás variables cuantitativas presentan asimetría significativa, requiriendo pruebas no paramétricas.",
      },
      {
        q: "¿Existe correlación entre las variables?",
        a: "Se encontró correlación positiva moderada entre 'ingreso' y 'satisfacción' (r=0.52), y entre 'educación' y 'ingreso' (r=0.44). La correlación entre 'edad' e 'ingreso' es significativa pero no lineal.",
      },
      {
        q: "¿Qué pruebas estadísticas se aplicaron?",
        a: "Se aplicaron: Shapiro-Wilk para normalidad, Kruskal-Wallis para comparación de grupos, correlación de Pearson y Spearman, y Chi-cuadrado para variables categóricas. Todos los análisis se realizaron con α=0.05.",
      },
    ],
  },
  {
    category: "Conclusiones",
    icon: "💡",
    color: "#f59e0b",
    questions: [
      {
        q: "¿Cuál es la conclusión principal del análisis?",
        a: "El nivel educativo y el ingreso son los factores con mayor influencia sobre la satisfacción. Las personas con educación universitaria y mayores ingresos reportan índices de satisfacción entre un 35% y 48% más altos que el promedio general.",
      },
      {
        q: "¿Qué recomendaciones surgen del análisis?",
        a: "Se recomienda: (1) Ampliar la muestra para grupos de edad mayores de 60 años, (2) incluir variables de contexto regional, (3) aplicar modelos de regresión para cuantificar el efecto conjunto de las variables predictoras.",
      },
      {
        q: "¿Los resultados son generalizables?",
        a: "Los resultados son representativos para la población objetivo definida en el muestreo. Para generalizar a otras poblaciones se requeriría validación con muestras adicionales de diferentes contextos geográficos.",
      },
    ],
  },
];

// ── Ítem individual de pregunta ──
function FAQItem({ item, index, accentColor }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        border: open
          ? `1px solid ${accentColor}44`
          : "1px solid rgba(255,255,255,0.06)",
        background: open
          ? `rgba(${hexToRgb(accentColor)}, 0.05)`
          : "rgba(255,255,255,0.02)",
        animationDelay: `${index * 60}ms`,
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-left transition-all duration-200"
      >
        <span
          className="text-sm font-medium leading-snug"
          style={{
            color: open ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.65)",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          {item.q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300"
          style={{
            background: open ? `${accentColor}22` : "rgba(255,255,255,0.05)",
            color: open ? accentColor : "rgba(255,255,255,0.3)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            border: `1px solid ${open ? accentColor + "44" : "rgba(255,255,255,0.08)"}`,
          }}
        >
          +
        </span>
      </button>

      {/* Respuesta */}
      <div
        style={{
          maxHeight: open ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          className="px-4 pb-4 text-sm leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.55)",
            fontFamily: "DM Sans, sans-serif",
            borderTop: `1px solid ${accentColor}18`,
            paddingTop: "12px",
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
            Análisis Exploratorio de Datos · {new Date().getFullYear()}
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