import { Inject, Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  constructor(@Optional() @Inject('imagePath') private imagePath: string) {
    this.imagePath = imagePath;
  }

  setImagePath(imagePath: string): void {
    this.imagePath = imagePath;
  }

  getImagePath(): string {
    return this.imagePath;
  }

  getImageUrl(imageFileName: string): string {
    return `${this.imagePath}/${imageFileName}`;
  }

  encodeImageToBase64(imageFile: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(imageFile);
    });
  }
}
