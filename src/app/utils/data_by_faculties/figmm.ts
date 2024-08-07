export const FIGMM_FACULTY = {
  id: 8,
  name: "INGENIERÍA GEOLÓGICA, MINERA Y METALÚRGICA",
  code: "FIGMM",
  typeCandidates: [
    {
      id: 1,
      name: "DOCENTES PRINCIPALES",
      departaments: [
        {
          id: 1,
          name: "Geología básica",
          subjects: [
            {
              id: 1,
              plazaCode: "001347",
              category: "PP",
              scheduleDedication: "TC40",
              names: ["Tectónica", "Investigación"],
              requirements: `Experiencia Profesional 10 años. Ingeniero Geólogo
              Registro RENACYT
              Amplio dominio en Software aplicado a la enseñanza universitaria.
              `,
            },
            {
              id: 2,
              plazaCode: "001422",
              category: "PP",
              scheduleDedication: "TP12",
              names: ["Geología del Perú", "Captone"],
              requirements: `Experiencia Profesional 10 años. Ing. Geólogo
              Registro RENACYT
              Amplio dominio en Software aplicado a la enseñanza universitaria`,
            },
          ],
        },
        {
          id: 2,
          name: "Minas",
          subjects: [
            {
              id: 1,
              plazaCode: "000821",
              category: "PP",
              scheduleDedication: "TP12",
              names: ["Automatización aplicada a la minería"],
              requirements: `Ingeniero de Minas, con mas de 15 años de experiencia profesional.
              Experiencia minima docente universitario de 05 años
              Grado de Doctor en Ing. de Minas.`,
            },
            {
              id: 2,
              plazaCode: "001457",
              category: "PP",
              scheduleDedication: "TP06",
              names: ["No metálicos y su comercial"],
              requirements: `Ingeniero de Minas o Ing. Geologo, con mas de 15 años de experiencia profesional.
              Experiencia minima docente universitario de 03 años.
              Grado de Doctor.`,
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
          name: "Metalurgia Extractiva",
          subjects: [
            {
              id: 1,
              plazaCode: "001437",
              category: "AS",
              scheduleDedication: "TC40",
              names: [
                "Corrosión y degradación de materiales o  Nanomateriales",
              ],
              requirements: `Ingeniero Metalúrgista o TÍTULO DE QUÍMICA con 20
              años de experiencia profesional
              Maestro en Ciencias en Ingeniería Metalúrgica o Maestro en Metalurgia de Metales No Ferrosos.`,
            },
          ],
        },
        {
          id: 2,
          name: "Minas",
          subjects: [
            {
              id: 1,
              plazaCode: "001634",
              category: "AS",
              scheduleDedication: "TP08",
              names: ["Planeamiento de minado"],
              requirements: `Ingeniero de Minas con mas de 15 años de experiencia profesional.
              Con experiencia en planeamiento de Minado.
              Grado de Maestro.`,
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
          name: "Ciencias Básicas",
          subjects: [
            {
              id: 1,
              plazaCode: "000679",
              category: "AX",
              scheduleDedication: "TP20",
              names: [
                "Cálculo Integral",
                "Cálculo Multivariable",
                "Ecuaciones Diferenciales",
                "Introducción a la computación",
                "Cálculo Diferencial",
              ],
              requirements: `Título Licenciado en Matemáticas.
              Grado de maestro en educación
              Experiencia Profesional 05 años (requisito excluyente).
              Sólidos conocimientos en:
                     Cálculo Integral
                     Cálculo Multivariable
                     Ecuaciones Diferenciales
                     Introducción a la computación
                     Cálculo Diferencial
              Amplio dominio en Software aplicados a la enseñanza universitaria aulas virtuales.`,
            },
            {
              id: 2,
              plazaCode: "000862",
              category: "AX",
              scheduleDedication: "TC40",
              names: ["Calculo Diferencial", "Calculo Integral"],
              requirements: `Título Ingeniero de Minas
              El grado de maestro en Ciencias en Física
              Experiencia Profesional 05 años (requisito excluyente).
              Sólidos conocimientos en:
                    Calculo Diferencial
                    Calculo Integral
              Amplio dominio en Software aplicados a la enseñanza universitaria aulas virtuales.`,
            },
          ],
        },
        {
          id: 2,
          name: "Geología básica",
          subjects: [
            {
              id: 1,
              plazaCode: "000833",
              category: "AX",
              scheduleDedication: "TP09",
              names: ["Mineralogía", "Petrografía"],
              requirements: `Experiencia Profesional 05 años. Ingeniero Geólogo
              Sólidos concimientos en reconocimiento mineralógico y petrográfico
              Manejo de nivel avanzado en Software Aplicado a Ciencias Geológicas
              Amplio dominio en Software aplicado a la enseñanza universitaria.`,
            },
            {
              id: 2,
              plazaCode: "001342",
              category: "AX",
              scheduleDedication: "TP09",
              names: ["Geología", "Mineralogía"],

              requirements: `Experiencia Profesional 05 años. Ing. Geólogo
              Sólidos concimientos en reconocimiento mineralógico y petrográfico
              Manejo de nivel avanzado en Software Aplicado a Ciencias Geológicas
              Amplio dominio en Software aplicado a la enseñanza universitaria.`,
            },
            {
              id: 3,
              plazaCode: "001582",
              category: "AX",
              scheduleDedication: "TC40",
              names: ["Ciencias", "Ingeniería", "Geología General"],
              requirements: `Experiencia Profesional 05 años. Formación Ing. Geólogo
              Experiencia no menor de 05 años en docencia universitaria
              Sólidos conocimientos en ciencias e ingeniería e ingeniería apao a geología
              Amplio dominio en Software aplicado a la enseñanza universitaria.`,
            },
          ],
        },
        {
          id: 3,
          name: "Metalurgia Extractiva",
          subjects: [
            {
              id: 1,
              plazaCode: "000473",
              category: "AX",
              scheduleDedication: "TP06",
              names: ["Diseño de Plantas"],
              requirements: `Ingeniero Metalúrgista con 5 años de experiencia en investigacion y gestion de proyecto.
              Maestro en Ciencias de Materiales e Ingeniería.`,
            },
            {
              id: 2,
              plazaCode: "001071",
              category: "AX",
              scheduleDedication: "TP07",
              names: [
                "Procesamiento de minerales y materiales I",
                "Tópicos selectos en ingeniería metalúrgica",
              ],

              requirements: `Ingeniero Metalúrgista con 10 años de experiencia profesional
              Maestro en Ciencias con Mención en Automatica e Instrumentación.`,
            },
          ],
        },
        {
          id: 4,
          name: "Minas",
          subjects: [
            {
              id: 1,
              plazaCode: "000211",
              category: "AX",
              scheduleDedication: "TP07",
              names: ["Taller de software minero"],
              requirements: `Ingeniero de Minas con mas de 10 años de experiencia profesional.
              Conocimientos y dominio de software minero comerciales.
              Grado de Maestro.`,
            },
            {
              id: 2,
              plazaCode: "000533",
              category: "AX",
              scheduleDedication: "TP09",
              names: ["Topografía minera"],

              requirements: `Ingeniero de Minas con mas de 15 años de experiencia profesional.
              Experiencia docente univeritario minimo 06 años
              Grado de Maestro..`,
            },
            {
              id: 3,
              plazaCode: "000620",
              category: "AX",
              scheduleDedication: "TP07",
              names: ["Diseño de planta minera"],
              requirements: `Ingeniero de Minas con mas de 15 años de experiencia profesional.
              Haber participado en diseño minero.
              Grado de Maestro.`,
            },
            {
              id: 4,
              plazaCode: "001490",
              category: "AX",
              scheduleDedication: "TP07",
              names: ["Método de explotación"],
              requirements: `Ingeniero de Minas con mas de 15 años de experiencia profesional.
              Experiencia en docencia universitaria.
              Grado de Maestro.`,
            },
            {
              id: 5,
              plazaCode: "001554",
              category: "AX",
              scheduleDedication: "TP15",
              names: ["Geoestadística"],
              requirements: `Ingeniero de Minas con mas de 15 años de experiencia.
              Minimo 08 años de experiencia en docencia Universitaria en el curso de Geoestadística.
              Grado de Maestro en Ingeniería de Minas.`,
            },
          ],
        },
      ],
    },
  ],
};
