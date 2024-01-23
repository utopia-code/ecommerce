import { ValidatorFn } from "@angular/forms";
import { AbstractControl } from "@angular/forms";

export class CustomValidator {
    static NameArticleValidator(arrNames: Array<string>): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (control.value === null || control.value === undefined) {
                return null;
            }

            const nameValue = control.value.toLowerCase();
            if (arrNames !== null) {
                return arrNames.some((item: string) => item.toLowerCase() === nameValue)
                        ? { NameArticle: true }
                        : null;
            }
            return null;
        };
    }
}
