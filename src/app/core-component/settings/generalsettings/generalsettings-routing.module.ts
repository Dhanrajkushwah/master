import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralsettingsComponent } from './generalsettings.component';
import { BrandSettingComponent } from '../brand-setting/brand-setting.component';

const routes: Routes = [
  { path: '', component: BrandSettingComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralsettingsRoutingModule { }
