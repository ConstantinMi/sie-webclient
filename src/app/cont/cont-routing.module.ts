import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContListComponent } from './cont-list/cont-list.component';
import { ContCreateComponent } from './cont-create/cont-create.component';

const routes: Routes = [
  {path: 'cont', component: ContListComponent},
  {path: 'cont/create', component: ContCreateComponent},
  {path: 'cont/edit/:cod', component: ContCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContRoutingModule { }
