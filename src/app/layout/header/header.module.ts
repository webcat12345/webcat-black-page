import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { HeaderComponent } from './header/header.component';
import { NotificationTogglerComponent } from './notification-toggler/notification-toggler.component';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot()
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent, NotificationTogglerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule { }
