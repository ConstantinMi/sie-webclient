import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrezorerieComponent } from './trezorerie/trezorerie.component';
import { DurataRotatieComponent } from './durata-rotatie/durata-rotatie.component';
import { RmsComponent } from './rms/rms.component';
import { RnfrComponent } from './rnfr/rnfr.component';

const routes: Routes = [
  { path: 'trezorerie', component: TrezorerieComponent},
  { path: 'durata-rotatie', component: DurataRotatieComponent},
  { path: 'rms', component: RmsComponent},
  { path: 'rnfr', component: RnfrComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiInfoRoutingModule { }
