import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MyFarmModule } from './pages/my-farm/my-farm.module';
import { CustomFarmModule } from './pages/custom-farm/custom-farm.module';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { MyFarmRoutingModule } from './pages/my-farm/my-farm-routing.module';
import { CustomFarmRoutingModule } from './pages/custom-farm/custom-farm-routing.module';
import { NgStackFormsModule } from '@ng-stack/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgStackFormsModule,
    SharedModule,
    LayoutModule,
    LayoutRoutingModule,
    MyFarmModule,
    MyFarmRoutingModule,
    CustomFarmModule,
    CustomFarmRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
