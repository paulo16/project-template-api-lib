import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateImageModule } from './template-image-api.module';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [CommonModule,
    TemplateImageModule.forRoot('/assets/img')
],
  declarations: [FooterComponent],
  providers: [],
  exports:[FooterComponent]
})
export class TemplateFooterModule {
}
