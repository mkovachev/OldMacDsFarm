import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFarmRenderComponent } from './render/myfarm-render.component';

const routes: Routes = [
    { path: 'myfarm', component: MyFarmRenderComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MyFarmRoutingModule { }