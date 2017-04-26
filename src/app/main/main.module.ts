import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './layout/header/header.module';
import { SidebarModule } from './layout/sidebar/sidebar.module';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule { }
