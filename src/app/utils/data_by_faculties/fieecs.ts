export const FIEECS_FACULTY = {
  id: 6,
  name: "INGENIERÍA ECONÓMICA, ESTADÍSTICA Y CIENCIAS SOCIALES",
  code: "FIEECS",
  typeCandidates: [
    {
      id: 1,
      name: "DOCENTES AUXILIARES",
      departaments: [
        {
          id: 1,
          name: "Humanidades y CC.SS",
          subjects: [
            {
              id: 1,
              plazaCode: "000919",
              category: "AX",
              scheduleDedication: "TC40",
              names: ["Redacción y Comunicación"],
              requirements: `5 años de ejercicio profesional
              Maestría en Gerencia Pública
              Título profesional
              2 años de experiencia docente en redacción y comunicaciones
              Estudios de comunicación, psicología y ciencias sociales.`,
            },
          ],
        },
        {
          id: 2,
          name: "Estadística",
          subjects: [
            {
              id: 1,
              plazaCode: "001386",
              category: "AX",
              scheduleDedication: "TC40",
              names: ["Econometría y/o Análisis de Series de Tiempo"],
              requirements: `5 años de ejercicio profesional
              Maestría en Administración
              Título profesional de Ingeniero Economista
              2 años de experiencia en el dictado del curso de Econometría y Análisis de Series de Tiempo.`,
            },
          ],
        },
        {
          id: 3,
          name: "Métodos Cuantitativos",
          subjects: [
            {
              id: 1,
              plazaCode: "001363",
              category: "AX",
              scheduleDedication: "TC40",
              names: [
                "Economía Matemática, Métodos Matemáticos para la Economía Matemática",
              ],
              requirements: `5 años de ejercicio profesional
              Maestría en Métodos Cuantitativos
              Licenciatura en Matemática.`,
            },
          ],
        },
        {
          id: 4,
          name: "Economía",
          subjects: [
            {
              id: 1,
              plazaCode: "000591",
              category: "AX",
              scheduleDedication: "TP09",
              names: ["Planeamiento Estratégico"],
              requirements: `5 años de jercicio profesional
              Maestría en Administración
              Título profesional Ingeniero Economista
              2 años de experiencia en el dicatdo del curso de Planeamiento Estratégicco
              Ingeniero Economista o Economista.`,
            },
            {
              id: 2,
              plazaCode: "000463",
              category: "AX",
              scheduleDedication: "TP10",
              names: ["Metodología de la Investigación"],
              requirements: `5 años de ejercicio profesional
              Maestría en Ciencias Sociales con mención en Sociología. Economía y Psicología
              Titulo profesional
              2 años de expereincia en conducción de taller de investigación, dictado de la metodología de la investigación en CC.SS..`,
            },
          ],
        },
      ],
    },
  ],
};
