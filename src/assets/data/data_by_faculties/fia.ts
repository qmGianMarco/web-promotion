export const FIA_FACULTY = {
  id: 3,
  name: "INGENIERÍA AMBIENTAL",
  code: "FIA",
  typeTeachers: [
    {
      id: 1,
      name: "DOCENTES PRINCIPALES",
      departaments: [
        {
          id: 1,
          name: "Ingeniería y Gestión Ambiental",
          subjects: [
            {
              id: 1,
              plazaCode: "000368",
              category: "PP",
              scheduleDedication: "TC40",
              names: [
                "Ingeniería de procesos y producción más limpia",
                "Ecoeficiencia",
                "Energía",
              ],
              requirements: `Ingeniero mecánico, ingeniero ambiental, 3 años de experiencia en el dictado de cursos a los que postula. Grado de Doctor en la especialidad. Investigador con reconocimiento institucional.`,
            },
            {
              id: 2,
              plazaCode: "001110",
              category: "PP",
              scheduleDedication: "TC40",
              names: [
                "Biología General",
                "Bioquímica Ambiental",
                "Biorremediación",
              ],
              requirements: `Biólogo, licenciado en biología, Ingeniero Ambiental, Quimico con 3 años de experiencia en los cursos a los que postula. Grado de Doctor en la especialidad . Investigador con reconocimiento institucional.`,
            },
          ],
        },
        {
          id: 2,
          name: "Saneamiento",
          subjects: [
            {
              id: 1,
              plazaCode: "000376",
              category: "PP",
              scheduleDedication: "TP08",
              names: ["SA-426 Procesos Unitarios en Ingeniería Sanitaria"],
              requirements: `Ingeniero Sanitario con grado de doctor con experiencia en docencia universitaria minima de 03 años`,
            },
          ],
        },
        {
          id: 3,
          name: "Higiene y Seguridad Ocupacional. Línea de Investigación: Higiene y Ergonomía Ocupacional",
          subjects: [
            {
              id: 1,
              plazaCode: "000868",
              category: "PP",
              scheduleDedication: "TP20",
              names: [
                "SP-110 Salud Publica. Epidemiología y Salud Pública",
                "SA - 342 Medicina del Trabajo",
              ],
              requirements: `Medico ocupacional. Con grado academico de Doctor. Con experiencia minima en docencia de 03 años con reconocimiento institucional de Docente Investigador que incluya publicación en revistas indexadas. Preferentemente con Certificación Internacional en Higiene Industrial`,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "DOCENTES AUXILIARES",
      departaments: [
        {
          id: 1,
          name: "Saneamiento",
          subjects: [
            {
              id: 1,
              plazaCode: "000366",
              category: "AX",
              scheduleDedication: "TP07",
              names: ["SA-921 Evaluación de Impacto Ambiental"],
              requirements: `ingeniero Sanitario con grado de maestría en temas afines. Con experiencia en docencia Universitaria minima de 03 años en tema de la que postula.`,
            },
            {
              id: 2,
              plazaCode: "000683",
              category: "AX",
              scheduleDedication: "TP12",
              names: [
                "PA 135 Programación de Obras",
                "SA 818 Costos y Presupuestos",
              ],
              requirements: `Ingeniero Civil con grado de maestría en temas afines. Con experiencia en docencia universitaria minima de 03 años.`,
            },
          ],
        },
        {
          id: 2,
          name: "Higiene y Seguridad Ocupacional. Línea de Investigación: Higiene y Ergonomía Ocupacional. Seguridad Ocupacional y Prevención de Desastres",
          subjects: [
            {
              id: 1,
              names: [
                "HO-220 Evaluación y control de Agentes Biológicos",
                "HO-320 Diseño de instalaciones de Higiene y Seguridad Industrial",
              ],
              plazaCode: "000004",
              category: "AX",
              scheduleDedication: "TC40",
              requirements: `Ingeniero en Higiene y Seguridad Industriall. Con grado de Magister en Higiene Ocupacional o afines. Con experiencia minima en docencia universitaria de 03 años. Con certificación Internacional en Higiene Industrial preferentemente.`,
            },
            {
              id: 2,
              names: ["GA-136 Evaluación y Control de la contaminación Sonora"],
              plazaCode: "001436",
              category: "AX",
              scheduleDedication: "TP16",
              requirements: `Ingeniero de Higiene y Seguridad Industrial. Con grado académico de Magister relacionado a los temas a dictar. Con experiencia en docencia universitaria mínima de 03 años.`,
            },
          ],
        },
        {
          id: 3,
          name: "Ingeniería y Gestión Ambiental",
          subjects: [
            {
              id: 1,
              names: [
                "Hidrología",
                "Contaminación y Modelación Hidrológico",
                "Ingeniería de Recursos Hidricos",
              ],
              plazaCode: "001022",
              category: "AX",
              scheduleDedication: "TP17",
              requirements: `Ingeniero Ambiental, Ingeniero Agronomo o Ingeniero Agricola con 03 años de experiencia en el dictado de cursos a los que postula. Grado de maestro en la especialidad.`,
            },
            {
              id: 2,
              names: [
                "Diseño Experimental",
                "Simulación y Modelamiento Ambiental",
              ],
              plazaCode: "000872",
              category: "AX",
              scheduleDedication: "TP12",
              requirements: `Ingeniero ambiental, Ingeniero Meteorólogo con 03 años de experiencia en el dictado de los cursos a lo que postula. Grado de maestro en la especialidad.`,
            },
          ],
        },
      ],
    },
  ],
};
