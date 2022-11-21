export enum ROLE {
  ADMIN = 1,
  CANDIDATE = 2,
  EVALUATOR = 3
}

export enum E_ROLES {
  ADMIN = 1,
  TEACHER = 2,
  PRESIDENT = 3,
  PROFESSOR_PRINCIPAL = 4,
  PROFESSOR_ASSOCIATE = 5,
  PROFESSOR_AUXILIARY = 6,
  STUDENT_MEMBER = 7,
  EXTERNAL_SPECIALIST_ADVISOR = 8,
  PROFESSOR_PRINCIPAL_ACCESSITARY = 9,
  PROFESSOR_ASSOCIATE_ACCESSITARY = 10,
  PROFESSOR_AUXILIARY_ACCESSITARY = 11,
  STUDENT_MEMBER_ACCESSITARY = 12,
  EVALUATOR_CLASS = 13,
}

export const ROLES = {
  1: {
    name: "Administrator",
  },
  2: {
    name: "Postulante",
  },
  3: {
    name: "Decano",
  },
  4: {
    name: "Profesor(a) Principal",
  },
  5: {
    name: "Profesor(a) Asociado",
  },
  6: {
    name: "Profesor(a) Auxiliar",
  },
  7: {
    name: "Miembro Estudiantil",
  },
  8: {
    name: "Asesor Especialista Externo",
  },
  9: {
    name: "Profesor(a) Principal Accesitario",
  },
  10: {
    name: "Profesor(a) Asociado Accesitario",
  },
  11: {
    name: "Profesor(a) Auxiliar Accesitario",
  },
  12: {
    name: "Miembro Estudiantil Accesitario",
  },
  13: {
    name: "Evaluador de Clase Magistral",
  },
};

export const MENU_BY_ROLES = {
  ADMIN: ["Init", "Administrador"],
  TEACHER: ["Init", "Candidato"],
  PRESIDENT: ["Init", "Evaluador"],
  PROFESSOR_PRINCIPAL: ["Init", "Evaluador"],
  PROFESSOR_ASSOCIATE: ["Init", "Evaluador"],
  PROFESSOR_AUXILIARY: ["Init", "Evaluador"],
  STUDENT_MEMBER: ["Init", "Evaluador"],
  EXTERNAL_SPECIALIST_ADVISOR: ["Init", "Evaluador"],
  PROFESSOR_PRINCIPAL_ACCESSITARY: ["Init", "Evaluador"],
  PROFESSOR_ASSOCIATE_ACCESSITARY: ["Init", "Evaluador"],
  PROFESSOR_AUXILIARY_ACCESSITARY: ["Init", "Evaluador"],
  STUDENT_MEMBER_ACCESSITARY: ["Init", "Evaluador"],
  EVALUATOR_CLASS: ["Init", "Evaluador"],
};
