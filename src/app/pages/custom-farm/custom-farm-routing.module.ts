import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenderComponent } from './render/render.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
    { path: 'custom/create', component: CreateComponent },
    { path: 'custom', component: RenderComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CustomFarmRoutingModule { }