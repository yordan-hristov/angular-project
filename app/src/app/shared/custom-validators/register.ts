import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function matchingPasswords(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let password = control.parent?.get('password')?.value;
        let rePassword = control.value;

        return password == rePassword ? null : { notMatching: true }
    }
}