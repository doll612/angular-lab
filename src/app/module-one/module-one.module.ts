import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOneRoutingModule } from './module-one-routing.module';
import { PageOneComponent } from './page-one/page-one.component';

@NgModule({
  declarations: [PageOneComponent],
  imports: [
    CommonModule,
    ModuleOneRoutingModule
  ]
})
export class ModuleOneModule { }
