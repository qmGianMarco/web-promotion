export const FC_FACULTY = {
  id: 2,
  name: "CIENCIAS",
  code: "FC",
  typeCandidates: [
    {
      id: 1,
      name: "DOCENTES PRINCIPALES",
      departaments: [
        {
          id: 1,
          name: "Ingeniería Física",
          subjects: [
            {
              id: 1,
              names: [
                "Física Térmica I y II",
                "Ingeniería Solar",
                "Tópicos de nanotecnología",
              ],
              plazaCode: "000653",
              category: "PP",
              scheduleDedication: "DE40",
              requirements: `
                Profesional de reconocida trayectoria con amplia experiencia en las áreas de desarrollo y
                caracterización de materiales y en energías renovables que le permita conducir la línea de
                energías renovables de la escuela profesional de Física.
                Publicación en revistas indexadas, además de haber dirigido proyectos de investigación y
                asesoría de tesis en dichas áreas Grado de Maestro en Ciencias y Doctor en Ciencias en un
                área afin a la especialidad. Debe acreditar experiencia docente.
              `,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "DOCENTES ASOCIADOS",
      departaments: [
        {
          id: 1,
          name: "Ingeniería Física",
          subjects: [
            {
              id: 1,
              names: [
                "Física Térmica",
                "Ingeniería Solar",
                "Tópicos de Energía Renovables",
              ],
              plazaCode: "000783",
              category: "AS",
              scheduleDedication: "TP09",
              requirements: `
              Titulo Profesional. Grado académico de Maestro en Ciencias en Energías Renovables y eficiencia Energética. Con experiencia en energías renovables.`,
            },
            {
              id: 2,
              names: ["Imágenes y visión artificial", "Sistemas digitales"],
              plazaCode: "000552",
              category: "AS",
              scheduleDedication: "TP15",
              requirements: `Título profesional. Grado Academico de Mestro o Doctor en areas afines a la experiencia requerida.
              Experiencia en tratamiento digital de imágenes, machine learning, deep learning.
              Que tenga publicaciones y que haya dirigido proyectos de investigación en las áreas solicitadas`,
            },
          ],
        },
        {
          id: 2,
          name: "Matematica",
          subjects: [
            {
              id: 1,
              names: [
                "Programación Líneal y no Líneal",
                "Optimización Combinatoria",
                "Teoría de Grafos",
              ],
              plazaCode: "001532",
              category: "AS",
              scheduleDedication: "TC40",
              requirements: `Maestría y Doctorado en Matemática.
              Participación en proyectos de investigación en los ultimos 3 años.
              Publicación en revistas indexadas en los ultimos 3 años`,
            },
          ],
        },
        {
          id: 3,
          name: "Quimica",
          subjects: [
            {
              id: 1,
              names: ["Fundamentos de Electroquímica"],
              plazaCode: "001479",
              category: "AS",
              scheduleDedication: "TC40",
              requirements: `Doctor en Química, con reconocida expereincia en Electroquímica y materiales`,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "DOCENTES AUXILIARES",
      departaments: [
        {
          id: 1,
          name: "Física",
          subjects: [
            {
              id: 1,
              names: ["Circuitos Analógicos"],
              plazaCode: "000809",
              category: "AX",
              scheduleDedication: "TC40",
              requirements: `
              Titulo profesional. Grado academico de Doctor o Maestro en Física.`,
            },
            {
              id: 2,
              names: ["Mecánica Estadística"],
              plazaCode: "001150",
              category: "AX",
              scheduleDedication: "TC40",
              requirements: `
              Titulo profesional. Grado academico de Doctor o Maestro en Física.`,
            },
          ],
        },
        {
          id: 2,
          name: "Química",
          subjects: [
            {
              id: 1,
              names: ["Química de Coordinación"],
              plazaCode: "001692",
              category: "AX",
              scheduleDedication: "TC40",
              requirements: `
              Grado académico de Maestría en Química. Con experiecia en Química de Coordinación.`,
            },
          ],
        },
        {
          id: 3,
          name: "Ciencias de la Computación",
          subjects: [
            {
              id: 1,
              names: ["Inteligencia Artificial", "Matemática Computacional"],
              plazaCode: "001217",
              category: "AX",
              scheduleDedication: "TC40",
              requirements: `
              Grado academico de Doctor o Maestro en Ciencias de la Computación o Ciencias Afines.`,
            },
            {
              id: 2,
              names: [
                "Programación Evolutiva",
                "Introducción a la Computación",
              ],
              plazaCode: "001536",
              category: "AX",
              scheduleDedication: "TC40",
              requirements: `
              Grado académico de Doctor o Maestro en Ciencias de la Computación o Ciencias Afines.`,
            },
            {
              id: 3,
              names: [
                "Metodología de la Investigación",
                "Introducción a la Computación",
              ],
              plazaCode: "000844",
              category: "AX",
              scheduleDedication: "TP10",
              requirements: `
              Grado Académico de Doctor o Maestro en Ciencias de la Computación.`,
            },
            {
              id: 4,
              names: ["Desarrollo de Software", "Ingeniería de Software"],
              plazaCode: "000633",
              category: "AX",
              scheduleDedication: "TP20",
              requirements: `
              Grado Academico de Doctor o Maestro en Ciencias de la Computación, Ingeniería Informática o Ingeniería de Software.`,
            },
          ],
        },
        {
          id: 4,
          name: "Matemática",
          subjects: [
            {
              id: 1,
              names: [
                "Procesador de Texto Cientifico y Programación",
                "Programación Estructurada",
                "Analisis en Rn",
                "Análisis Numérico",
              ],
              plazaCode: "001697",
              category: "AX",
              scheduleDedication: "TC40",
              requirements: `
              Grado Academico de Doctor o Maestro en Enseñanza de la Matemática
              Experiencia mínima de 5 años en el dictado de cursos básicos de Matemática y Computación a nivel Universitario
              Experiencia en capacitación a docentes universitarios en manejo de Herramientas digitales`,
            },
          ],
        },
        {
          id: 5,
          name: "Ingeniería Física",
          subjects: [
            {
              id: 1,
              names: [
                "Laboratorios de Energía Renovables",
                "Ingeniería Solar",
                "Física Térmica",
              ],
              plazaCode: "000433",
              category: "AX",
              scheduleDedication: "DE40",
              requirements: `
              Profesional con experiencia en confort térmico, energías renovables y eficiencia energética.
              Grado de Maestro en Ciencias con Mención en Energías Renovables y eficiencia Enenergética`,
            },
          ],
        },
      ],
    },
  ],
};
