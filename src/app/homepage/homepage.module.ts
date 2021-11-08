import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutModule } from '../layout/common-layout/common-layout.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    CommonLayoutModule,
    HomepageRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomepageModule { }
