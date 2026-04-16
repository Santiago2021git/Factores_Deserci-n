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
          "La grafica de distribución nos muestra la mediana, en este caso es: 20, la media del estudio de edad: 20.47 y la moda de edad que es 21",
      },
      {
        id: "Edad-Media",
        title: "Grafica de Media",
        image: "/charts/age_media.png",     // ← coloca tu imagen aquí
        analysis:
          "Grafica centrada solamente en la media de las edades de los estudiantes, en este caso el resultado es 20.47",
      },
      {
        id: "Edad-Mediana",
        title: "Grafica de Mediana",
        image: "/charts/age_mediana.png",     // ← coloca tu imagen aquí
        analysis:
          "Grafica que evidencia la mediana de la edad de los 20.000 estudiantes, en este caso es 20. Las lineas de la grafica indican el movimiento entre 18 y 22 años",
      },
      {
        id: "Edad-Moda",
        title: "Grafica de Moda",
        image: "/charts/age_moda.png",     // ← coloca tu imagen aquí
        analysis:
          "La edad que mas se repite en el estudio es 21, se utilizo un grafico de barras horizontal ",
      },
      {
        id: "Edad-Quartil",
        title: "Quartiles",
        image: "/charts/avanzadas/age_cuartiles.png",     // ← coloca tu imagen aquí
        analysis:
          "El estudio se centra en una poblacion entre 18 a 22 años",
      },
      {
        id: "Edad-Min_Max",
        title: "Min - Max",
        image: "/charts/avanzadas/age_minmax.png",     // ← coloca tu imagen aquí
        analysis:
          "La edad minima fue de 17 y maxima de 24",
      },
      {
        id: "Edad-Varianza",
        title: "Varianza",
        image: "/charts/avanzadas/age_varianza_std.png",     // ← coloca tu imagen aquí
        analysis:
          "La varianza calculada en el estudio de las edades es: 5.219, la desviación estandar es de 2.284",
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
          "La grafica de distribución muestra la media, la moda y la mediana",
      },
      {
        id: "Atencion_clase-Media",
        title: "Grafica Media",
        image: "/charts/class_attendance_media.png",
        analysis:
          "El estudio de la atención en clase indica que la media es 70.02",
      },
      {
        id: "Atencion_clase-Mediana",
        title: "Grafica Mediana",
        image: "/charts/class_attendance_mediana.png",
        analysis:
          "El estudio indica que la mediana de atención en clase es 69.9",
      },
      {
        id: "Atencion_clase-Moda",
        title: "Grafoca Moda",
        image: "/charts/class_attendance_moda.png",
        analysis:
          "La moda del valor de atención en clase es 40.60",
      },

      {
        id: "Atencion_clase-Cuartiles",
        title: "Grafica cuartiles",
        image: "/charts/avanzadas/class_attendance_cuartiles.png",
        analysis:
          "Las grafica indican que el porcentaje de atención en clase estae entre 55.1 y 85",
      },
      {
        id: "Atencion_clase-MinMax",
        title: "Min - Max",
        image: "/charts/avanzadas/class_attendance_minmax.png",
        analysis:
          "El estudio indica que el minimo es 40.60 y maximo 99.4",
      },
            {
        id: "Atencion_clase-varianza",
        title: "Varianza",
        image: "/charts/avanzadas/class_attendance_varianza_std.png",
        analysis:
          "El estudio de atención en clase nos dio los siguientes resultados: varianza=298.677, la desviacion=17.28",
      },
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
          "Grafico de barras que muestra los 7 cursos mas destacados en los que participan los estudiantes",
      },
      {
        id: "curso-donut",
        title: "Grafica pie",
        image: "/charts/course_donut.png",
        analysis:
          "Grafico de pie que muestra los 7 cursos, no hay mucha diferencia entre cursos",
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
          "El grafico de barras de dificultad de examen muestra que la moda es que la dificultad de examenes es moderada",
      },
      {
        id: "pie-exam_dificultad",
        title: "Grafico pie",
        image: "/charts/exam_difficulty_donut.png",
        analysis:
          "Grafico Pie que muestra las diferentes percepciones de dificultades por los estudiantes",
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
          "La distribucion muestra que la media es 62.51, la mediana es 62.6 y la moda es 100",
      },
      {
        id: "exam_score_media",
        title: "Grafica Media",
        image: "/charts/exam_score_media.png",
        analysis:
          "Grafica que muestra los valores en el calculo de la media",
      },
      {
        id: "exam_score_mediana",
        title: "Grafica Mediana",
        image: "/charts/exam_score_mediana.png",
        analysis:
          "Estudio de la mediana",
      },
      {
        id: "exam_score_moda",
        title: "Grafica Moda",
        image: "/charts/exam_score_moda.png",
        analysis:
          "grafica donde se muestra el valor mas repetido o moda",
      },
      {
        id: "exam_score_cuartiles",
        title: "Grafica Cuartiles",
        image: "/charts/avanzadas/exam_score_cuartiles.png",
        analysis:
          "El estudio muestra que las notas se concentran entre 48.8 y 76.3",
      },
      {
        id: "exam_score_minmax",
        title: "Min - Max",
        image: "/charts/avanzadas/exam_score_minmax.png",
        analysis:
          "El valor minimo es 19.59 y el valor maximo es 100",
      },
      {
        id: "exam_score_varianza",
        title: "Grafica Varianza",
        image: "/charts/avanzadas/exam_score_varianza_std.png",
        analysis:
          "El estudio realizado dio como resultados: varianza=357.53 y la desviacion=18.91",
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
          "El grafico de barras muestra que la moda es calificación media en las instalaciones de las instituciones.",
      },
      {
        id: "facility_rating_donut",
        title: "Grafica Pie",
        image: "/charts/facility_rating_donut.png",
        analysis:
          "El grafico de dona muestra que no hay mucha diferencia entre las diferentes calificaciones hacia las instalaciones de la institución",
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
          "Grafica de barras que muestra que el genero elegido por la mayoria de estudiantes es 'otro'",
      },
      {
        id: "gender_donut",
        title: "Grafico pie",
        image: "/charts/gender_donut.png",
        analysis:
          "El grafico de dona muestra que no hay diferencia significativa entre las 3 opciones de genero",
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
          "El grafico de barras muestra que la moda es que los estudiantes si tengan acceso a internet",
      },
      {
        id: "internet_access_donut",
        title: "Grafico pie",
        image: "/charts/internet_access_donut.png",
        analysis:
          "El grafico de dona evidencia que el 85% de estudiantes cuenta con conexión a interner",
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
          "La grafica de distribución muestra que la moda es 4.10 horas de sueño, la mediana es 7 horas de sueño y la media es de 7.01 horas de sueño en los estudiantes",
      },
      {
        id: "sleep_hours_media",
        title: "Grafica Media",
        image: "/charts/sleep_hours_media.png",
        analysis:
          "Grafica que muestra la media de horas de sueño de los estudiantes",
      },
      {
        id: "sleep_hours_mediana",
        title: "Grafica Mediana",
        image: "/charts/sleep_hours_mediana.png",
        analysis:
          "Grafica que evidencia el valor de la mediana en las horas de sueño de los estudiantes",
      },
      {
        id: "sleep_hours_moda",
        title: "Grafica Moda",
        image: "/charts/sleep_hours_moda.png",
        analysis:
          "Grafica de la moda de hora de sueño en los estudiantes",
      },
      {
        id: "sleep_hours_cuartiles",
        title: "Grafica Cuartiles",
        image: "/charts/avanzadas/sleep_hours_cuartiles.png",
        analysis:
          "Las horas de sueño de los estudiantes varian entre 5.50 y 8.50",
      },
      {
        id: "sleep_hours_minmax",
        title: "Min - Max",
        image: "/charts/avanzadas/sleep_hours_minmax.png",
        analysis:
          "el minimo de horas de sueño es 4.1 y el maximo es 9.9 horas",
      },
      {
        id: "sleep_hours_varianza",
        title: "Grafica Varianza",
        image: "/charts/avanzadas/sleep_hours_varianza_std.png",
        analysis:
          "La grafica nos muestra que la varianza es 3.00, la desviacion estandar es 1.73",
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
          "La grafica de barras muestra que la moda en calidad de sueño es el valor promedio",
      },
      {
        id: "sleep_quality_donut",
        title: "Grafico Pie",
        image: "/charts/sleep_quality_donut.png",
        analysis:
          "La grafica de dona muestra que no hay diferencia significativa entre los diferentes valores de calidad de sueño",
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
          "La grafica de distribucion de horas de estudio de los estudiantes muestra que la media es 4.01, la mediana es 4.04 y la moda de horas de estudio es 7.91",
      },
      {
        id: "study_hours_media",
        title: "Grafica Media",
        image: "/charts/study_hours_media.png",
        analysis:
          "Grafica que representa la media de las horas de estudio diarias de los estudiantes",
      },
      {
        id: "study_hours_mediana",
        title: "Grafico Mediana",
        image: "/charts/study_hours_mediana.png",
        analysis:
          "Grafica que evidencia el valor de la mediana en las horas de estudio de los estudiantes",
      },
      {
        id: "study_hours_moda",
        title: "Grafico Moda",
        image: "/charts/study_hours_moda.png",
        analysis:
          "Grafica que muestra el valor que mas se repite o la moda en las horas de sueño de los estudiantes",
      },
      {
        id: "study_hours_cuartil",
        title: "Grafico Cuartiles",
        image: "/charts/avanzadas/study_hours_cuartiles.png",
        analysis:
          "La información de horas de estudio se centra entre 2 y 6",
      },
      {
        id: "study_hours_minmax",
        title: "Min - Max",
        image: "/charts/avanzadas/study_hours_minmax.png",
        analysis:
          "El valor minimo de horas de estudio diarias es 0.08 y el valor maximo es 7.91",
      },
      {
        id: "study_hours_varianza",
        title: "Grafico Varianza",
        image: "/charts/avanzadas/study_hours_varianza_std.png",
        analysis:
          "La varianza es: 5.33, la desviación estandar es 2.31",
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
          "El grafico de barras muestra que la moda en los metodos de estudio es 'Auto-Estudio",
      },
      {
        id: "study_method_donut",
        title: "Grafico pie",
        image: "/charts/study_method_donut.png",
        analysis:
          "El grafico de donas evidencia los porcentajes y distribución de los diferentes metodos de estudio",
      }
    ],
  },

 {
    id: "Resultados_finales",
    label: "Resultados finales",
    color: "orange",
    description:
      "Graficas que dan respuesta a los diferentes objetivos del proyecto",
    charts: [
      {
        id: "Correlacion",
        title: "Mapa de calor - Correlación",
        image: "/charts/avanzadas/00_correlacion_heatmap.png",
        analysis:
          "El mapa de calor indica que para un maximo rendimiento academico, influye en un 72% las horas de estudio, en un 31% la atención en clase y un 13% las horas de sueño, el resto de variables no influyen tanto",
      },
      {
        id: "Habitos_rendimiento",
        title: "Habitos de rendimiento",
        image: "/charts/avanzadas/OBJ1_habitos_rendimiento.png",
        analysis:
          "Las graficas indican que donde mas se concentra la tendencia es un mayor rendimiento por horas de estudio y su coeficiente de correlación de Pearson es 71,8% , La asistencia a clase influye pero en menor medida, su coeficiente es del 30.9% ",
      },
      {
        id: "bienestar_demografia",
        title: "Bienestar en relación a demografia",
        image: "/charts/avanzadas/OBJ2_bienestar_demografia.png",
        analysis:
          "Las horas de sueño influyen en el rendimiento pero en menor medida que otras variables, su coeficiente es de 13.3%. La edad y el genero no influyen en el rendimiento academico y la conexión a internet influye muy poco",
      },
      {
        id: "jerarquia",
        title: "Variables que afectan resultado final",
        image: "/charts/avanzadas/OBJ3_jerarquia_perfiles.png",
        analysis:
          "El grafico concluye que las 3 variables mas importantes relacionadas a la mejora del rendimiento son: Horas de estudio, asistencia a clase y horas de sueño",
      },
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