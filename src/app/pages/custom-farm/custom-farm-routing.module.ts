import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomRenderComponent } from './render/custom-render.component';

const routes: Routes = [
    { path: 'custom', component: CustomRenderComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CustomFarmRoutingModule { }