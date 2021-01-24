import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFarmComponent } from './custom-farm.component';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { NgStackFormsModule } from '@ng-stack/forms';
import { RenderComponent } from './render/render.component';


@NgModule({
  declarations: [CustomFarmComponent, CreateComponent, RenderComponent],
  imports: [
    CommonModule,
    NgStackFormsModule,
    RouterModule
  ]
})
export class CustomFarmModule { }
