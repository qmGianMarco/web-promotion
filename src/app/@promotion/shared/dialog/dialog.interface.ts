import { E_STATUS } from "../../../utils/status";

export enum CLAIM {
  UNFIT = 1,
  REQUEST = 2,
  ACEPTED = 3,
  REJECTED = 4,
}

export const CONFIG_CLAIM = {
  [CLAIM.UNFIT]: {
    setStatus: E_STATUS.UNFIT,
    messageId: 'unfit',
    button: {
      color: "danger",
      text: "Declarar No Apto",
    },
    window: {
      title: "Declarar No Apto",
      confirm: "¿Esta seguro de declarar no apto?",
    },
  },
  [CLAIM.REQUEST]: {
    setStatus: E_STATUS.CLAIM_REQUEST,
    messageId: 'request',
    button: {
      color: "primary",
      text: "Solicitar Reclamo",
    },
    window: {
      title: "Solicitar Reclamo",
      confirm: "¿Esta seguro de solicitar reclamo?",
    },
  },
  [CLAIM.ACEPTED]: {
    setStatus: E_STATUS.CLAIM_ACEPTED,
    messageId: 'response',
    button: {
      color: "success",
      text: "Aceptar Reclamo",
    },
    window: {
      title: "Aceptar Reclamo",
      confirm: "¿Esta seguro de aceptar el reclamo?",
    },
  },
  [CLAIM.REJECTED]: {
    setStatus: E_STATUS.CLAIM_REJECTED,
    messageId: 'response',
    button: {
      color: "danger",
      text: "Rechazar Reclamo",
    },
    window: {
      title: "Rechazar Reclamo",
      confirm: "¿Esta seguro de rechazar el reclamo?",
    },
  },
};

export interface ISettingDialog {
  typeId: CLAIM;
  teacherId: string;
}
