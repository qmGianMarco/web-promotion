export const status = {
  authorize: "authorize",
  expect: "expect",
  generate: "generate",
  to_select: "to_select",
};

export const settingByStatus = {
  authorize: {
    title: {
      color: "warning",
      icon: "unlock-outline",
      label: "Autorizar Evaluación",
    },
    body: {
      paragraph: `Para iniciar la evaluación es necesario AUTORIZAR.`,
    },
    type: "authorize",
  },
  expect: {
    title: {
      color: "info",
      icon: "unlock-outline",
      label: "Esperar Authorizatión",
    },
    body: {
      paragraph: `Para GENERAR el ACTA DE APERTURA y continuar con el proceso de evaluación es necesario la confirmación de mínimo 8 miembros`,
    },
    type: "expect",
  },
  generate: {
    title: {
      color: "primary",
      icon: "file-add-outline",
      label: "Generar Acta de Apertura",
    },
    body: {
      paragraph: `
        El presidente de la comisión ya puede GENERAR el ACTA DE APERTURA.`,
    },
    type: "generate",
  },
  to_select: {
    title: {
      color: "success",
      icon: "checkmark-square-outline",
      label: "Evaluación Iniciada",
    },
    body: {
      paragraph: `La comisión ya puede INICIAR con la evalución de postulantes.`,
    },
    type: "to_select",
  },
};
