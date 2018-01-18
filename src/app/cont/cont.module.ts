import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContRoutingModule } from './cont-routing.module';
import { ContListComponent } from './cont-list/cont-list.component';
import { ContCreateComponent } from './cont-create/cont-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ContRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ContListComponent, ContCreateComponent]
})
export class ContModule { }
