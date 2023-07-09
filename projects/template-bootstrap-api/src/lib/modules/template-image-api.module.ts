import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [],
})
export class TemplateImageModule {
  static forRoot(imagePath: string): ModuleWithProviders<TemplateImageModule> {
    return {
      ngModule: TemplateImageModule,
      providers: [{ provide: 'imagePath', useValue: imagePath }],
    };
  }
}
