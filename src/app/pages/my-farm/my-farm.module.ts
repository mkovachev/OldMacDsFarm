import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFarmRenderComponent } from './render/myfarm-render.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MyFarmRenderComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MyFarmModule { }
