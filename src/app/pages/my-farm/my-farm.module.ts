import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFarmComponent } from './my-farm.component';
import { AnimalComponent } from './animal/animal.component';
import { RenderComponent } from './render/render.component';

@NgModule({
  declarations: [AnimalComponent, MyFarmComponent, RenderComponent],
  imports: [
    CommonModule
  ]
})
export class MyFarmModule { }
