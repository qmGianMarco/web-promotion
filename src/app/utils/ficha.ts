export const FICHA = [
  {
    heading: 'Sección 1.- Formación Academica y Profesional',
    score: 0,
    max_score: 25,
    subheads: [
      {
        subhead: '1. Grados y Títulos',
        score: 0,
        max_score: 20,
        headItems: [
          {
            head_item: 'Item_null',
            display: false,
            documentItems: [
              {
                id: 1,
                title_item: 'a) Grado de Doctor (10.0 ptos c/u)',
                info: '(Todos los títulos deben estar registrados en SUNEDU)',
                columns: {
                  Grado: { title: 'Doctorado', width: '35%' },
                  Universidad: { title: 'Universidad', width: '35%' },
                  País: { title: 'País', width: '15%' },
                  Fecha: {
                    title: 'Fecha de obtención del grado',
                    width: '10%'
                  }
                },
                values: [],
                score: { type: 'select', values: [0, 10] }
              },
              {
                id: 2,
                title_item: 'b) Grado de Maestro (7.0 ptos c/u)',
                info: '(Todos los títulos deben estar registrados en SUNEDU)',
                columns: {
                  Grado: { title: 'Maestría', width: '35%' },
                  Institución: { title: 'Institución', width: '35%' },
                  País: { title: 'País', width: '15%' },
                  Fecha: {
                    title: 'Fecha de obtención del grado',
                    width: '10%'
                  }
                },
                values: [],
                score: { type: 'select', values: [0, 7] }
              },
              {
                id: 3,
                title_item: 'c) Titulo Profesional (3.0 ptos c/u)',
                info: '(Todos los títulos deben estar registrados en SUNEDU)',
                columns: {
                  Grado: { title: 'Titulo Profesional', width: '35%' },
                  Universidad: { title: 'Universidad', width: '35%' },
                  País: { title: 'País', width: '15%' },

                  Fecha: {
                    title: 'Fecha de obtención del título',
                    width: '10%'
                  }
                },
                values: [],
                score: { type: 'select', values: [0, 3] }
              }
            ]
          }
        ]
      },
      {
        subhead: '2. Otros Idiomas o Lenguas Nativas',
        score: 0,
        max_score: 5,
        headItems: [
          {
            head_item: 'Item_null',
            display: false,
            documentItems: [
              {
                id: 4,
                title_item: 'a) Nivel Avanzado (3.0 ptos c/u)',
                columns: {
                  Idioma: {
                    title: 'Idioma',
                    width: '35%'
                  },
                  Institución: { title: 'Institución', width: '45%' },
                  Fecha: { title: 'Fecha', width: '10%' }
                },
                values: [],
                score: { type: 'select', values: [0, 3] }
              },
              {
                id: 5,
                title_item: 'b) Nivel Intermedio (2.0 ptos c/u)',
                columns: {
                  Idioma: {
                    title: 'Idioma',
                    width: '35%'
                  },
                  Institución: { title: 'Institución', width: '45%' },
                  Fecha: { title: 'Fecha', width: '10%' }
                },
                values: [],
                score: { type: 'select', values: [0, 2] }
              },
              {
                id: 6,
                title_item: 'c) Nivel Básico (1.0 ptos c/u)',
                columns: {
                  Idioma: {
                    title: 'Idioma',
                    width: '35%'
                  },
                  Institución: { title: 'Institución', width: '45%' },
                  Fecha: { title: 'Fecha', width: '10%' }
                },
                values: [],
                score: { type: 'select', values: [0, 1] }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    heading: 'Sección 2.- Actividades Académicas e Investigación',
    score: 0,
    max_score: 30,
    subheads: [
      {
        subhead: '1. Enseñanza Universitaria',
        score: 0,
        max_score: 10,
        headItems: [
          {
            head_item: 'Item_null',
            display: false,
            documentItems: [
              {
                id: 7,
                title_item: 'a) Pregrado (1.0 pto por periodo)',
                info: '(Solo se contara por cada periodo académico de 12 horas por semana, de los ultimos 5 años contados a partir de la convocatoria del concurso de admisión)',
                columns: {
                  Institución: { title: 'Institución', width: '50%' },
                  Fecha_inicio: { title: 'Fecha Inicio', width: '15%' },
                  FechaFinal: { title: 'Fecha Final', width: '15%' }
                },
                values: [],
                score: { type: 'select', values: [0, 1] }
              },
              {
                id: 8,
                title_item: 'b) Posgrado (1.50 pto por periodo)',
                info: '(Solo se contara por cada periodo académico de 6 horas por semana, de los ultimos 5 años contados a partir de la convocatoria del concurso de admisión)',
                columns: {
                  Institución: { title: 'Institución', width: '50%' },
                  Fecha_inicio: { title: 'Fecha Inicio', width: '15%' },
                  FechaFinal: { title: 'Fecha Final', width: '15%' }
                },
                values: [],
                score: { type: 'select', values: [0, 1.5] }
              }
            ]
          }
        ]
      },
      {
        subhead: '2. Trabajos de Investigación',
        score: 0,
        max_score: 9,
        headItems: [
          {
            head_item: 'Item_null',
            display: false,
            documentItems: [
              {
                id: 9,
                title_item:
                  'a. Trabajo de Investigación culminado (3.0 ptos c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 3] }
              },
              {
                id: 10,
                title_item:
                  'b. Patente o Innovación Tecnológica registrada (3.0 ptos c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 3] }
              }
            ]
          }
        ]
      },
      {
        subhead: '3. Actualización y Capacitación',
        score: 0,
        max_score: 7,
        headItems: [
          {
            head_item: 'Item_null',
            display: false,
            documentItems: [
              {
                id: 11,
                title_item:
                  'a) Otros Doctorados, no considerado en el rubro 1 (7.0 ptos por grado)',
                info: '(Todos los títulos deben estar registrados en SUNEDU)',
                columns: {
                  Grado: { title: 'Doctorado', width: '35%' },
                  Institución: { title: 'Institución', width: '35%' },
                  Semestre: { title: 'Semestres Concluidos', width: '15%' },
                  Fecha: { title: 'Fecha', width: '10%' }
                },
                values: [],
                score: { type: 'select', values: [0, 7] }
              },
              {
                id: 12,
                title_item:
                  'b) Otros Maestrías, no considerado en el rubro 1 (5.0 ptos por grado)',
                info: '(Todos los títulos deben estar registrados en SUNEDU)',
                columns: {
                  Grado: { title: 'Maestría', width: '35%' },
                  Institución: { title: 'Institución', width: '35%' },
                  Semestre: { title: 'Semestres Concluidos', width: '15%' },
                  Fecha: { title: 'Fecha', width: '10%' }
                },
                values: [],
                score: { type: 'select', values: [0, 5] }
              },
              {
                id: 13,
                title_item:
                  'c) Titulación de Segunda Especialidad Profesional (2.0 ptos)',
                info: '(Todos los títulos deben estar registrados en SUNEDU)',
                columns: {
                  Grado: {
                    title: 'Titulo de Segunda Especialidad ',
                    width: '35%'
                  },
                  Institución: { title: 'Institución', width: '35%' },
                  Semestre: { title: 'Semestres Concluidos', width: '15%' },
                  Fecha: { title: 'Fecha', width: '10%' }
                },
                values: [],
                score: { type: 'select', values: [0, 2] }
              },
              {
                id: 14,
                title_item: 'd) Estudios de Doctorado (1.0 ptos por ciclo)',
                info: '(Todos los títulos deben estar registrados en SUNEDU)',
                columns: {
                  Grado: { title: 'Doctorado', width: '35%' },
                  Institución: { title: 'Institución', width: '35%' },
                  Semestre: { title: 'Semestres Concluidos', width: '15%' },
                  Fecha: { title: 'Fecha', width: '10%' }
                },
                values: [],
                score: { max: 7, min: 0, type: 'input-range' }
              },
              {
                id: 15,
                title_item: 'e) Estudios de Maestría (0.75 ptos por ciclo)',
                info: '(Todos los títulos deben estar registrados en SUNEDU)',
                columns: {
                  Estudio: { title: 'Maestria', width: '35%' },
                  Institución: { title: 'Institución', width: '35%' },
                  Semestre: { title: 'Semestres Concluidos', width: '15%' },
                  Fecha: { title: 'Fecha', width: '10%' }
                },
                values: [],
                score: { max: 7, min: 0, type: 'input-range' }
              },
              {
                id: 16,
                title_item: 'f) Diplomados (1.0 ptos c/u)',
                columns: {
                  Diploma: { title: 'Diplomatura', width: '35%' },
                  Institución: { title: 'Institución', width: '45%' },
                  Fecha: { title: 'Fecha', width: '10%' }
                },
                values: [],
                score: { type: 'select', values: [0, 1] }
              },
              {
                id: 17,
                title_item:
                  'g) Segunda Especialización Profesional (0.5 ptos por ciclo)',
                columns: {
                  Estudio: { title: 'Segunda Especialización', width: '35%' },
                  Institución: { title: 'Institución', width: '35%' },
                  Semestre: { title: 'Semestres Concluidos', width: '15%' },
                  Fecha: { title: 'Fecha', width: '10%' }
                },
                values: [],
                score: { max: 7, min: 0, type: 'input-range' }
              },
              {
                id: 18,
                title_item:
                  'h) Asistencia a cursos o eventos académicos, en seminarios, simposios, congresos, ecuentros científicos (Con Evaluación 0.05 ptos c/u, Sin Evaluación 0.03 ptos c/u)',
                columns: {
                  Estudio: { title: 'Evento', width: '65%' },
                  Fecha: { title: 'Fecha', width: '10%' },
                  Horas: { title: 'Nro. Horas', width: '10%' }
                },
                values: [],
                score: { max: 7, min: 0, type: 'input-range' }
              }
            ]
          }
        ]
      },
      {
        subhead: '4. Elaboración de Material de Enseñanza Universitaria',
        score: 0,
        max_score: 4,
        headItems: [
          {
            head_item: 'Item_null',
            display: false,
            documentItems: [
              {
                id: 19,
                title_item:
                  'a) Publicación de texto a nivel universitario (3.0 ptos c/u)',
                columns: {
                  Nombre: { title: 'Nombre', width: '45%' },
                  Fecha: { title: 'Fecha de Publicacion', width: '25%' },
                  Institución: { title: 'N° de Paginas', width: '20%' }
                },
                values: [],
                score: { type: 'select', values: [0, 3] }
              },
              {
                id: 20,
                title_item:
                  'b) Publicación de libros de problemas resueltos (2.0 ptos c/u)',
                columns: {
                  Nombre: { title: 'Nombre', width: '45%' },
                  Fecha: { title: 'Fecha de Publicacion', width: '25%' },
                  Institución: { title: 'N° de Paginas', width: '20%' }
                },
                values: [],
                score: { type: 'select', values: [0, 2] }
              },
              {
                id: 21,
                title_item:
                  'c) Diseño y construcción de equipo de ensayo de laboratorio. Indicar fechas (2.0 ptos c/u)',
                columns: {
                  Grado: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 2] }
              },
              {
                id: 22,
                title_item: 'd) Software de apoyo académico (1.0 pto c/u)',
                columns: {
                  Grado: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 1] }
              },
              {
                id: 23,
                title_item:
                  'e) Separata (de al menos 20 págs., con su respectivo visto bueno) (1.0 pto c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 1] }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    heading:
      'Sección 3.- Actividades Proyección Social y Experiencia Profesional',
    score: 0,
    max_score: 15,
    subheads: [
      {
        subhead: '1. Proyección Social',
        score: 0,
        max_score: 5,
        headItems: [
          {
            head_item:
              'a) Organización o participación en actividades académicas, científicas, culturales o deportivas, refrendadas por alguna institución de prestigio en la que ha intervertido',
            display: true,
            documentItems: [
              {
                id: 24,
                title_item:
                  'a.1. Organización de actividades de divulgación científica o técnica (1.50 ptos c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 1.5] }
              },
              {
                id: 25,
                title_item:
                  'a.2. Organización de cursos de capacitación extracurricular (1.0 pto c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 1] }
              },
              {
                id: 26,
                title_item:
                  'a.3. Actividades de orientación vocacional, profesional, y tutoría (0.50 ptos c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 0.5] }
              },
              {
                id: 27,
                title_item: 'a.4. Visitas técnicas (0.50 ptos c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 0.5] }
              },
              {
                id: 28,
                title_item:
                  'a.5. Organización de programas de aniversario instituciónal (0.50 ptos c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 0.5] }
              },
              {
                id: 29,
                title_item:
                  'a.6. Organización de actividades culturales o deportivas (0.50 ptos c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 0.5] }
              }
            ]
          },
          {
            head_item:
              'b) Actividades de vinculación con el sector estatal o empresarial',
            display: true,
            documentItems: [
              {
                id: 30,
                title_item:
                  'b.1. Gestión de convenios y/o pasantías (0.25 ptos c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 0.25] }
              },
              {
                id: 31,
                title_item:
                  'b.2. Gestión de practicas pre-profesionales (0.25 ptos c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 0.25] }
              },
              {
                id: 32,
                title_item: 'b.3. Gestión de bolsa de trabajo (0.50 ptos c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 0.5] }
              },
              {
                id: 33,
                title_item: 'b.4. Pasantías (1.0 pto c/u por c/ciclo)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 1] }
              }
            ]
          },
          {
            head_item: 'c) Organización o participación en ayuda comunitaria',
            display: true,
            documentItems: [
              {
                id: 34,
                title_item:
                  'c.1. Organización de brigadas de auxilio y ayuda comunitaria (0.50 ptos c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 0.5] }
              },
              {
                id: 35,
                title_item:
                  'c.2. Participación de brigadas de auxilio y asistencia comunitaria (1.0 ptos c/u)',
                columns: {
                  Descripcion: { title: 'Descripción', width: '85%' }
                },
                values: [],
                score: { type: 'select', values: [0, 1] }
              }
            ]
          }
        ]
      },
      {
        subhead: '2. Experiencia Profesional',
        score: 0,
        max_score: 10,
        headItems: [
          {
            head_item: 'Item_null',
            display: false,
            documentItems: [
              {
                id: 36,
                title_item:
                  'a) Director de organismo público (1.50 ptos por año)',
                columns: {
                  Institución: { title: 'Institución', width: '40%' },
                  Cargo: { title: 'Cargo', width: '30%' },
                  Fecha_inicio: { title: 'Fecha De', width: '10%' },
                  Fecha_fin: { title: 'Fecha A', width: '10%' }
                },
                values: [],
                score: { max: 10, min: 0, type: 'input-range' }
              },
              {
                id: 37,
                title_item:
                  'b) Gerente General en empresas públicas o privadas (hasta 1.50 ptos por año)',
                columns: {
                  Institución: { title: 'Institución', width: '40%' },
                  Cargo: { title: 'Cargo', width: '30%' },
                  Fecha_inicio: { title: 'Fecha De', width: '10%' },
                  Fecha_fin: { title: 'Fecha A', width: '10%' }
                },
                values: [],
                score: { max: 10, min: 0, type: 'input-range' }
              },
              {
                id: 38,
                title_item:
                  'c) Responsable de actividades técnicas o administrativas (hasta 1.0 ptos por año)',
                columns: {
                  Institución: { title: 'Institución', width: '50%' },
                  Cargo: { title: 'Cargo', width: '30%' },
                  Fecha_inicio: { title: 'Fecha De', width: '10%' },
                  Fecha_fin: { title: 'Fecha A', width: '10%' }
                },
                values: [],
                score: { max: 10, min: 0, type: 'input-range' }
              },
              {
                id: 39,
                title_item:
                  'd) Jefe de Proyeto en sector público o privado (hasta 1.50 ptos c/u por c/12 meses)',
                columns: {
                  Institución: { title: 'Institución', width: '50%' },
                  Cargo: { title: 'Cargo', width: '30%' },
                  Fecha_inicio: { title: 'Fecha De', width: '10%' },
                  Fecha_fin: { title: 'Fecha A', width: '10%' }
                },
                values: [],
                score: { max: 10, min: 0, type: 'input-range' }
              },
              {
                id: 40,
                title_item:
                  'e) Consultoría y asesoría en el sector público o privado (hasta 1.0 pto c/u por c/12 meses)',
                columns: {
                  Institución: { title: 'Institución', width: '50%' },
                  Cargo: { title: 'Cargo', width: '30%' },
                  Fecha_inicio: { title: 'Fecha De', width: '10%' },
                  Fecha_fin: { title: 'Fecha A', width: '10%' }
                },
                values: [],
                score: { max: 10, min: 0, type: 'input-range' }
              },
              {
                id: 41,
                title_item:
                  'f) Servicio profesional dependientes o independientes (0.50 ptos por año)',
                columns: {
                  Institución: { title: 'Institución', width: '50%' },
                  Cargo: { title: 'Cargo', width: '30%' },
                  Fecha_inicio: { title: 'Fecha De', width: '10%' },
                  Fecha_fin: { title: 'Fecha A', width: '10%' }
                },
                values: [],
                score: { max: 10, min: 0, type: 'input-range' }
              }
            ]
          }
        ]
      }
    ]
  }
]
