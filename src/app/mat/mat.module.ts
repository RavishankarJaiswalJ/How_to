import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

const matarial =[
  MatButtonModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matarial
  ],
  exports:[matarial]
})
export class MatModule { }
