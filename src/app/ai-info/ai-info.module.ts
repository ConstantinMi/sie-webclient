import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiInfoRoutingModule } from './ai-info-routing.module';
import { TrezorerieComponent } from './trezorerie/trezorerie.component';
import { DurataRotatieComponent } from './durata-rotatie/durata-rotatie.component';
import { RmsComponent } from './rms/rms.component';
import { RnfrComponent } from './rnfr/rnfr.component';

@NgModule({
  imports: [
    CommonModule,
    AiInfoRoutingModule
  ],
  declarations: [TrezorerieComponent, DurataRotatieComponent, RmsComponent, RnfrComponent]
})
export class AiInfoModule { }
