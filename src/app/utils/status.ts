export enum E_STATUS {
  REGISTERED = 1,
  REGISTRATION_PAYMENT = 2,
  CATEGORY_SELECTED = 3,
  COMPLETED_STATEMENTS = 4,
  COMPLETED_DATA = 5,
  UNFIT = 6,
  FIT = 7,
  EVALUATED = 8,
  OBSERVED = 9,
  CLAIM_REQUEST = 10,
  CLAIM_ACEPTED = 11,
  CLAIM_REJECTED = 12,
  RE_EVALUATED = 13,
  EVALUATED_CLASS = 14,
}

export const STATUS: { [key in number]: any } = {
  1: {
    name: "Registrado",
  },
  2: {
    name: "Pago Realizado",
  },
  3: {
    name: "Categoría Seleccionada",
  },
  4: {
    name: "Expediente Completado",
  },
  5: {
    name: "Fichas Completadas",
  },
  6: {
    name: "No Apto",
  },
  7: {
    name: "Apto",
  },
  8: {
    name: "Evaluado",
  },
  9: {
    name: "Observado",
  },
  10: {
    name: "Reclamo Solicitado",
  },
  11: {
    name: "Reclamo Aceptado",
  },
  12: {
    name: "Reclamo Rechazado",
  },
  13: {
    name: "Re-evaluado",
  },
  14: {
    name: "Evaluado Clase",
  },
};
