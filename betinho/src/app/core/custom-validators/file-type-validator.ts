import { FormControl } from '@angular/forms';

export function requiredFileType(type: string[]) {
  return function (control: FormControl) {
    const file = control.value;
    if (file && file.name) {
      const extension = file.name.split('.')[1].toLowerCase();
      if (!type.some(x=> x == extension.toLowerCase())) {
        return {
          fileType: extension
        };
      }

      return null;
    }

    return null;
  };
}