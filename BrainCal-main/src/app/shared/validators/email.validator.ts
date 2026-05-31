import { AbstractControl,Validators } from '@angular/forms';

export function ValidateEmail(control: AbstractControl) {
    const emailError = Validators.email(control);
    if (control.value && emailError) {
        return {'email': {}};
    }

    return null;
}