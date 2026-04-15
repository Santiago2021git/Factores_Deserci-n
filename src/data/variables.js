// ============================================================
//  SCRIPT DE CONFIGURACIÓN DE VARIABLES DEL DASHBOARD
//  ─────────────────────────────────────────────────────────
//  CÓMO USARLO:
//  1. Agrega tus imágenes en: public/charts/
//  2. Edita el arreglo `variables` abajo
//  3. Cada variable tiene:
//     - id: identificador único (string sin espacios)
//     - label: nombre visible en el menú
//     - icon: emoji o icono representativo
//     - color: color temático ("cyan" | "violet" | "green" | "orange" | "pink")
//     - description: descripción breve de la variable
//     - charts: arreglo de gráficas con imagen y análisis
// ============================================================

export const datasetInfo = {
  title: "Análisis Factores rendimiento Estudio",
  subtitle: "Exam_Score_Prediction",
  author: "Santiago Gallego - Omar David Bernal - Sebastian Sanchez",
  year: "2026",
  totalObservations: 20000,       
  totalVariables: 12,            
};

export const conclusions = [
  {
    id: 1,
    title: "El rendimiento académico es multifactorial",
    text: "El análisis evidencia que el desempeño académico no depende de una única variable, sino de la interacción entre factores académicos, personales y contextuales. Esto demuestra la necesidad de abordar el rendimiento desde una perspectiva integral.",
    tag: "prioridad",
  },
  {
    id: 2,
    title: "Impacto de las metodologías de estudio",
    text: "Las metodologías de estudio influyen en el rendimiento; sin embargo, no existe una estrategia universalmente efectiva. Su impacto depende de la combinación con otros factores como la disciplina, el tiempo dedicado y las condiciones del estudiante.",
    tag: "importante",
  },
  {
    id: 3,
    title: "Importancia de las horas de estudio",
    text: "Se observa que los estudiantes que dedican más tiempo al estudio tienden a obtener mejores resultados. Esto confirma que la constancia y el esfuerzo sostenido son determinantes clave del éxito académico.",
    tag: "prioridad",
  },
  {
    id: 4,
    title: "Influencia de la asistencia a clases",
    text: "La asistencia y participación en clase muestran una relación positiva con el rendimiento académico, lo que sugiere que la interacción directa con el entorno educativo fortalece el aprendizaje.",
    tag: "prioridad",
  },
  {
    id: 5,
    title: "Relación entre sueño y desempeño académico",
    text: "La calidad y cantidad del sueño influyen significativamente en los resultados. Los estudiantes con mejores hábitos de descanso presentan un mejor desempeño, evidenciando la importancia del bienestar físico en el aprendizaje.",
    tag: "prioridad",
  },
  {
    id: 6,
    title: "Influencia de factores contextuales",
    text: "Variables como el acceso a internet y la calidad de las instalaciones educativas tienen un impacto moderado, pero relevante, al facilitar el acceso a recursos y mejorar las condiciones de estudio.",
    tag: "importante",
  },
{
    id: 7,
    title: "Baja influencia de variables demográficas",
    text: "Factores como la edad y el género no muestran una incidencia significativa en el rendimiento académico, lo que indica que el desempeño está más relacionado con hábitos y condiciones que con características personales.",
    tag: "secundario",
  },
  {
    id: 8,
    title: "Relación indirecta entre variables",
    text: "Algunas variables no afectan directamente el rendimiento, pero sí lo hacen de forma indirecta. Por ejemplo, una mala calidad del sueño puede reducir la concentración en clase, lo que a su vez afecta el desempeño.",
    tag: "secundario",
  },
  {
    id: 9,
    title: "Importancia del equilibrio entre variables",
    text: "No basta con sobresalir en una sola variable (por ejemplo, estudiar muchas horas). El mejor rendimiento se obtiene cuando existe un equilibrio entre estudio, descanso y condiciones adecuadas.",
    tag: "secundario",
  }
];

export const recomendaciones = [
  {
    id: 1,
    title: "Fomentar hábitos de estudio consistentes",
    text: "Se recomienda promover rutinas de estudio estructuradas, ya que se evidenció que una mayor dedicación en horas de estudio está asociada con mejores resultados académicos. No se trata únicamente de estudiar más, sino de hacerlo de manera organizada y constante.",
    tag: "importante",
  },
  {
    id: 2,
    title: "Fortalecer la asistencia y participación en clase",
    text: "Dado que la asistencia a clases tiene una relación positiva con el desempeño, es fundamental implementar estrategias que incentiven la participación activa de los estudiantes, como metodologías dinámicas o evaluaciones continuas.",
    tag: "importante",
  },
  {
    id: 3,
    title: "Implementar orientación sobre metodologías de estudio",
    text: "Debido a que no existe una única metodología efectiva para todos, se sugiere brindar acompañamiento a los estudiantes para que identifiquen y adopten las técnicas de estudio que mejor se ajusten a sus necesidades y estilos de aprendizaje.",
    tag: "secundario",
  },
  {
    id: 4,
    title: "Mejorar el acceso a recursos educativos",
    text: "El acceso a herramientas como internet y espacios adecuados de estudio puede facilitar el aprendizaje. Se recomienda a las instituciones educativas fortalecer la infraestructura y garantizar condiciones equitativas para los estudiantes.",
    tag: "prioridad",
  },
  {
    id: 5,
    title: "Implementar modelos predictivos para intervención temprana",
    text: "Se recomienda utilizar modelos de análisis de datos para identificar estudiantes en riesgo de bajo rendimiento o posible deserción, permitiendo así aplicar estrategias de apoyo oportunas.",
    tag: "importante",
  },
  {
    id: 6,
    title: "Involucrar a la comunidad educativa",
    text: "Es fundamental que docentes, padres de familia e instituciones trabajen de manera conjunta para crear un entorno que favorezca el aprendizaje, apoyando tanto el desarrollo académico como el bienestar del estudiante.",
    tag: "importante",
  }
];


export const variables = [
  // ════════════════════════════════════════════════════════
  //  VARIABLE 1 — Edita los campos, agrega tus imágenes
  // ════════════════════════════════════════════════════════
  {
    id: "edad",
    label: "Edad",
    color: "cyan",
    description:
      "Distribución de la edad de los participantes en el dataset.",
    charts: [
      {
        id: "Edad-Distribución",
        title: "Grafica de Distribución",
        image: "/charts/age_distribucion.png",  // ← coloca tu imagen aquí
        analysis:
          "Analisis",
      },
      {
        id: "Edad-Media",
        title: "Grafica de Media",
        image: "/charts/age_media.png",     // ← coloca tu imagen aquí
        analysis:
          "Analisis",
      },
      {
        id: "Edad-Mediana",
        title: "Grafica de Mediana",
        image: "/charts/age_mediana.png",     // ← coloca tu imagen aquí
        analysis:
          "Analisis",
      },
      {
        id: "Edad-Moda",
        title: "Grafica de Moda",
        image: "/charts/age_moda.png",     // ← coloca tu imagen aquí
        analysis:
          "analisis",
      }
    ],
  },

  // ════════════════════════════════════════════════════════
  //  VARIABLE 2
  // ════════════════════════════════════════════════════════
  {
    id: "Atencion_clase",
    label: "Atencion en clase",
    color: "green",
    description:
      "Variable que representa la atención prestada en clase por parte de los estudiantes",
    charts: [
      {
        id: "Distribucion-Atencion",
        title: "Grafica Distribucion",
        image: "/charts/class_attendance_distribucion.png",
        analysis:
          "Analisis",
      },
      {
        id: "Atencion_clase-Media",
        title: "Grafica Media",
        image: "/charts/class_attendance_media.png",
        analysis:
          "Analisis",
      },
      {
        id: "Atencion_clase-Mediana",
        title: "Grafica Mediana",
        image: "/charts/class_attendance_mediana.png",
        analysis:
          "Analisis",
      },
      {
        id: "Atencion_clase-Moda",
        title: "Grafoca Moda",
        image: "/charts/class_attendance_moda.png",
        analysis:
          "Analisis",
      }
    ],
  },

  // ════════════════════════════════════════════════════════
  //  VARIABLE 3
  // ════════════════════════════════════════════════════════
  {
    id: "curso",
    label: "Curso",
    color: "violet",
    description:
      "Cursos en los que participan los estudiantes",
    charts: [
      {
        id: "curso-barras",
        title: "Grafica de barras",
        image: "/charts/course_barras.png",
        analysis:
          "Analisis",
      },
      {
        id: "curso-donut",
        title: "Grafica pie",
        image: "/charts/course_donut.png",
        analysis:
          "Analisis",
      }
    ],
  },

  // ════════════════════════════════════════════════════════
  //  VARIABLE 4
  // ════════════════════════════════════════════════════════
  {
    id: "exam_dificultad",
    label: "Dificultad Examen",
    color: "orange",
    description:
      "Graficas que evidencian la dificultad de los examenes que presentan los estudiantes segun el dataset",
    charts: [
      {
        id: "barras-exam_dificultad",
        title: "Grafico de barras",
        image: "/charts/exam_difficulty_barras.png",
        analysis:
          "",
      },
      {
        id: "pie-exam_dificultad",
        title: "Grafico pie",
        image: "/charts/exam_difficulty_donut.png",
        analysis:
          "Analisis",
      },
    ],
  },

  {
    id: "exam_score",
    label: "Puntajes de examen",
    color: "violet",
    description:
      "Índice de las notas que tienen los diferentes estudiantes que son objeto de estudio en el dataset",
    charts: [
      {
        id: "exam_score_distribucion",
        title: "Grafica de distribución",
        image: "/charts/exam_score_distribucion.png",
        analysis:
          "Analisis",
      },
      {
        id: "exam_score_media",
        title: "Grafica Media",
        image: "/charts/exam_score_media.png",
        analysis:
          "Analisis",
      },
      {
        id: "exam_score_mediana",
        title: "Grafica Mediana",
        image: "/charts/exam_score_mediana.png",
        analysis:
          "Analisis",
      },
      {
        id: "exam_score_moda",
        title: "Grafica Moda",
        image: "/charts/exam_score_moda.png",
        analysis:
          "Analisis",
      }
    ],
  },

  {
    id: "Facility_rating",
    label: "Calificación de instalaciones",
    color: "pink",
    description:
      "Puntaje que dan los encuestados a las instalaciones de las cuales son estudiantes",
    charts: [
      {
        id: "facility_rating_barras",
        title: "Grafico de barras",
        image: "/charts/facility_rating_barras.png",
        analysis:
          "Analisis",
      },
      {
        id: "facility_rating_donut",
        title: "Grafica Pie",
        image: "/charts/facility_rating_donut.png",
        analysis:
          "Analisis",
      }
    ],
  },

  {
    id: "gender",
    label: "Genero de los estudiantes",
    color: "cyan",
    description:
      "Genero de los estudiantes encuestados",
    charts: [
      {
        id: "gender_barras",
        title: "Grafica de barras",
        image: "/charts/gender_barras.png",
        analysis:
          "Analisis",
      },
      {
        id: "gender_donut",
        title: "Grafico pie",
        image: "/charts/gender_donut.png",
        analysis:
          "Analisis",
      },
    ],
  },

  {
    id: "internet_access",
    label: "Conexión a internet",
    color: "green",
    description:
      "Porcentaje de estudiantes que cuentan con conexión a internet para complementar sus estudios y realizar sus trabajos",
    charts: [
      {
        id: "internet_acces_barras",
        title: "Grafica de barras",
        image: "/charts/internet_access_barras.png",
        analysis:
          "Analisis",
      },
      {
        id: "internet_access_donut",
        title: "Grafico pie",
        image: "/charts/internet_access_donut.png",
        analysis:
          "Analisis",
      }
    ],
  },

  
  {
    id: "sleep_hours",
    label: "Horas de sueño",
    color: "orange",
    description:
      "Índice de horas de sueño de los estudiantes",
    charts: [
      {
        id: "sleep_hours_distribucion",
        title: "Grafica de distribución",
        image: "/charts/sleep_hours_distribucion.png",
        analysis:
          "Analisis",
      },
      {
        id: "sleep_hours_media",
        title: "Grafica Media",
        image: "/charts/sleep_hours_media.png",
        analysis:
          "Analisis",
      },
      {
        id: "sleep_hours_mediana",
        title: "Grafica Mediana",
        image: "/charts/sleep_hours_mediana.png",
        analysis:
          "Analisis",
      },
      {
        id: "sleep_hours_moda",
        title: "Grafica Moda",
        image: "/charts/sleep_hours_moda.png",
        analysis:
          "Analisis",
      }
    ],
  },

  {
    id: "sleep_quality",
    label: "Calidad de sueño",
    color: "pink",
    description:
      "A partir del estudio de horas de sueño, se pudo evaluar la calidad de sueño que tienen los estudiantes(cualitativo) ",
    charts: [
      {
        id: "sleep_quality_barras",
        title: "Grafica de barras",
        image: "/charts/sleep_quality_barras.png",
        analysis:
          "Analisis",
      },
      {
        id: "sleep_quality_donut",
        title: "Grafico Pie",
        image: "/charts/sleep_quality_donut.png",
        analysis:
          "Analisis",
      }
    ],
  },

  {
    id: "study_hours",
    label: "Horas de estudio",
    color: "green",
    description:
      "Horas de estudio diarias de cada estudiante",
    charts: [
      {
        id: "study_hours_distribucion",
        title: "Grafica de distribución",
        image: "/charts/study_hours_distribucion.png",
        analysis:
          "Analisis",
      },
      {
        id: "study_hours_media",
        title: "Grafica Media",
        image: "/charts/study_hours_media.png",
        analysis:
          "Analisis",
      },
      {
        id: "study_hours_mediana",
        title: "Grafico Mediana",
        image: "/charts/study_hours_mediana.png",
        analysis:
          "Analisis",
      },
      {
        id: "study_hours_moda",
        title: "Grafico Moda",
        image: "/charts/study_hours_moda.png",
        analysis:
          "Analisis",
      }
    ],
  },

  {
    id: "study_method",
    label: "Metodo de estudio",
    color: "violet",
    description:
      "Metodos de estudio que tienen los estudiantes de la encuesta",
    charts: [
      {
        id: "study_method_barras",
        title: "Grafica de barras",
        image: "/charts/study_method_barras.png",
        analysis:
          "Analisis",
      },
      {
        id: "study_method_donut",
        title: "Grafico pie",
        image: "/charts/study_method_donut.png",
        analysis:
          "Analisis",
      }
    ],
  },

];

// Mapa de colores por variable (no editar)
export const colorMap = {
  cyan:   { accent: "#22d3ee", bg: "rgba(34,211,238,0.08)",   border: "rgba(34,211,238,0.25)",  badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
  violet: { accent: "#8b5cf6", bg: "rgba(139,92,246,0.08)",   border: "rgba(139,92,246,0.25)",  badge: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
  green:  { accent: "#10b981", bg: "rgba(16,185,129,0.08)",   border: "rgba(16,185,129,0.25)",  badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  orange: { accent: "#f59e0b", bg: "rgba(245,158,11,0.08)",   border: "rgba(245,158,11,0.25)",  badge: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  pink:   { accent: "#ec4899", bg: "rgba(236,72,153,0.08)",   border: "rgba(236,72,153,0.25)",  badge: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
};