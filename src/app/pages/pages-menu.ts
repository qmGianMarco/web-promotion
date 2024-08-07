import { NbMenuItem } from "@nebular/theme";
import { ROLE } from '../utils/roles';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Inicio",
    icon: "home-outline",
    link: "/pages/home",
    home: true,
    data: {
      roles: [ROLE.ADMIN, ROLE.CANDIDATE, ROLE.EVALUATOR],
    }
  },
  {
    title: "Candidato",
    icon: "person-outline",
    children: [
      {
        title: "Ficha de Usuario",
        link: "/pages/candidate/general-data",
      },
      {
        title: "Ficha de Inscripción",
        link: "/pages/candidate/forms",
      },
    ],
    data: {
      roles: [ROLE.CANDIDATE],
    }
  },
  {
    title: "Evaluador",
    icon: "people-outline",
    link: "/pages/evaluator",
    data: {
      roles: [ROLE.EVALUATOR],
    }
  },
  {
    title: "Administrador",
    icon: "settings-outline",
    link: "/pages/admin",
    data: {
      roles: [ROLE.ADMIN],
    }
  },
];

export const getMenuByRoleId = (roleId: number | null) => {
  if (roleId === null) {
    return MENU_ITEMS;
  }
  return MENU_ITEMS.filter((item) => {
    if (item.data?.roles?.includes(roleId)) {
      return item;
    }
  });
}