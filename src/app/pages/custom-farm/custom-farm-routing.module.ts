import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CustomFarmComponent } from './custom-farm.component';

const routes: Routes = [
    { path: 'custom/create', component: CreateComponent },
    { path: 'custom', component: CustomFarmComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CustomFarmRoutingModule { }