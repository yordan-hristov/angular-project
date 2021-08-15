import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export function notBeforeToday(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let todayDate = new Date().getTime();
        let controlDate = new Date(control.value).getTime();

        return controlDate > todayDate ? null : { invalidPickUpDate: true }
    }
}

export function notBeforePickUp(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let controlDate = new Date(control.value).getTime();
        let pickUpDate = new Date(control.parent?.get('startDate')?.value).getTime();

        return controlDate > pickUpDate ? null : { invalidReturnDate: true}
    }
}