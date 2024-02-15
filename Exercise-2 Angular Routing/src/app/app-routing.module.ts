import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  {path: 'settings', component: SettingsComponent},
  {path: 'applications', component: ApplicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
