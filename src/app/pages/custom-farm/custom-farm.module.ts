import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFarmComponent } from './custom-farm.component';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { NgStackFormsModule } from '@ng-stack/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [CustomFarmComponent, CreateComponent],
  imports: [
    CommonModule,
    NgStackFormsModule,
    RouterModule,
    ToastrModule.forRoot({})
  ]
})
export class CustomFarmModule { }
