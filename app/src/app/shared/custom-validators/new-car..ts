import { AbstractControl, ValidationErrors } from "@angular/forms";

export function isAllowed(){
    const allowedBrands = ['Audi', 'BMW', 'Mercedes', 'Porsche'];

    return (control: AbstractControl): ValidationErrors | null => {
        const brand = control.value;
        if(allowedBrands.includes(brand)){
            return null;
        }else{
            return {
                notAllowed: true
            }
        }
    }
}