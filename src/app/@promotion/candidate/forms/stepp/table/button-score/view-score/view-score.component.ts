import { HttpResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { NbWindowRef } from "@nebular/theme";
import { SetScoreService } from "./set-score.service";

@Component({
  selector: "ngx-view-score",
  templateUrl: "./view-score.component.html",
  styleUrls: ["./view-score.component.scss"],
})
export class ViewScoreComponent {
  context: any = null;
  label: any = null;
  typeSelect = "select";
  typeInputStep = "input-step";
  typeInputRange = "input-range";
  canDownload = false;
  canSave = false;
  showAlert = {};
  settingScore: any;
  checkoutForm = this.fb.group({
    score: ["", [Validators.required]],
  });
  constructor(
    public windowRef: NbWindowRef,
    private fb: FormBuilder,
    private setScoreService: SetScoreService
  ) {
    this.context = windowRef.config.context;
    this.settingScore = this.context.settingScore;
  }
  isCorrectForm(form: any): boolean {
    const valueScore = form.controls["score"].value;
    if (valueScore === "") {
      this.showAlert = {
        message: "El campo Puntaje es obligatorio",
        status: 500,
      };
      return false;
    }
    if (this.settingScore.type === this.typeInputRange) {
      const valueMin = this.settingScore.min;
      const valueMax = this.settingScore.max;
      if (valueScore < valueMin || valueScore > valueMax) {
        this.showAlert = {
          message: "El puntaje debe estar entre " + valueMin + " y " + valueMax,
          status: 500,
        };
        return false;
      }
    }
    return true;
  }

  async onSubmit() {
    if (this.isCorrectForm(this.checkoutForm)) {
      const formId = this.context.id;
      const newScore = this.checkoutForm.value.score;
      await this.setScoreService.setScoreDocumentTeacher(formId, {
        score: newScore,
      });
      this.close();
    }
  }

  close() {
    this.windowRef.close();
  }
}
