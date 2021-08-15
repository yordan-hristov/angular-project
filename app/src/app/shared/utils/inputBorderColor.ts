import { FormGroup } from "@angular/forms";

export function setInputBorderColor(form: FormGroup, name: string): object | null {
    if(!form.get(name)?.touched){ return null; }

    return form.get(name)?.invalid ? {'border-color': 'red'} : {'border-color': 'green'}
  }