import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CandidateService } from "../../services/candidate.service";
import { TokenService } from "../../../token.service";
@Component({
  selector: "list-candidates",
  templateUrl: "./list-candidates.component.html",
})
export class ListCandidatesComponent implements OnInit {
  @Output() setTeacher = new EventEmitter<any>();
  settings: any;
  data: any;
  showTable = true;
  constructor(
    private candidateService: CandidateService,
    private tokenService: TokenService
  ) {}

  async ngOnInit() {
    const customAction = [];
    if (this.tokenService.isAdmin()) {
      customAction.push({
        name: "active-account",
        title: '<i class="nb-search mt-4"></i>',
      });
    } else if (this.tokenService.isEvaluator()) {
      customAction.push({
        name: "view",
        title: '<i class="nb-search mt-4"></i>',
      });
    }

    this.settings = {
      actions: {
        columnTitle: "Acciones",
        add: false,
        edit: false,
        delete: false,
        position: "left",
        width: "5%",
        custom: customAction,
      },
      noDataMessage: "Sin registros para mostrar",
      columns: {
        name: {
          title: "Nombre",
          width: "15%",
        },
        lastname: {
          title: "Apellido Paterno",
          width: "15%",
        },
        motherLastname: {
          title: "Apellido Materno",
          width: "15%",
        },
        dni: {
          title: "Dni",
          width: "10%",
        },
        codeUni: {
          title: "Codigo UNI",
          width: "10%",
        },
        email: {
          title: "Email",
          width: "10%",
        },
        status: {
          title: "Estado",
          width: "20%",
        },
      },
    };

    this.showTable = true;
    await this.setData();
  }

  async onReloadData() {
    await this.setData();
  }

  async setData() {
    const result = await this.candidateService.findAll();
    this.data = result?.data;
  }

  async onActionTable(event) {
    switch (event.action) {
      // case "view":
      //   this.teacher = event.data;
      //   this.openDeclaraciones = true;
      //   this.listTeachers.selectTeacher(event.data);
      //   this.setTeacher.emit(this.teacher);
      //   break;
      case "active-account":
        if (!confirm(`¿Está seguro de activar la cuenta del candidato?`)) {
          return;
        }
        const candidate = event.data;
        await this.candidateService.register(candidate.id);
        await this.setData();
        break;
    }
  }
}
