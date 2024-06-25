import { FormControl } from '@angular/forms';
export function imageSizeValidator(width: string, height: string) {
  return function (control: FormControl) {


    const file = control.value;

    if (file && control.valid && file instanceof File) {

      let reader = new FileReader();
      reader.readAsDataURL(file);
      let image = new Image();
      reader.onload = (e) => {

        image.src = <string>(<any>e.target)['result'];

        image.onload = (ev: any) => {
          if (ev.path[0].width > width || ev.path[0].height > height) {
            control.setErrors({ imageSize: { height, width } });
          }
          return null;
        };
      }
    };

    return null;
  }
}