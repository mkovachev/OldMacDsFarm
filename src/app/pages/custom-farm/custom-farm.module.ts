import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { NgStackFormsModule } from '@ng-stack/forms';
import { CustomRenderComponent } from './render/custom-render.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreateComponent, CustomRenderComponent],
  imports: [
    CommonModule,
    NgStackFormsModule,
    SharedModule
  ]
})
export class CustomFarmModule { }
