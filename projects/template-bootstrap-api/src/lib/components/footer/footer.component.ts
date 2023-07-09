
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<img [src]="image"/>`
})
export class FooterComponent {
  title = 'app-test';
  public image='';
  constructor(@Inject('imagePath') private imagePath: string) {
   this.image =  imagePath+'/p1.svg'
    console.log('----his.image-----', this.image)
  }
}