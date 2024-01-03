import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function creatGroupValidator(fn: string, ln:string): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        const start = control.get(fn);
        const end = control.get(ln);

        if (start?.value == end?.value) {
            return {match:true};
        }

        return null;
    }
}