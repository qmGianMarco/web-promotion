import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordEquality(): ValidatorFn {
  return (fg: FormGroup): ValidationErrors | null => {
    const passwordControl = fg.controls["password"];
    const repasswordControl = fg.controls["repassword"];

    if (passwordControl.value !== repasswordControl.value) {
      repasswordControl.setErrors({
        notEqualPassword: true,
      });
    }
    return null;
  };
}