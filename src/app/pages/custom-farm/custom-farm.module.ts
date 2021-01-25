import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { NgStackFormsModule } from '@ng-stack/forms';
import { CustomRenderComponent } from './render/custom-render.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreateComponent, CustomRenderComponent],
  imports: [
    CommonModule,
    NgStackFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class CustomFarmModule { }
