import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule { }
