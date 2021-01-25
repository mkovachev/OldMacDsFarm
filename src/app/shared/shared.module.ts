import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from './animal/animal.component';
import { FarmComponent } from './farm.component';

@NgModule({
  declarations: [AnimalComponent, FarmComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FarmComponent
  ]
})
export class SharedModule { }
