import { NgModule } from '@angular/core';
import { MyFirstLibComponent } from './my-first-lib.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyFirstLibComponent,
    InputTextComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    MyFirstLibComponent,
    InputTextComponent
  ]
})
export class MyFirstLibModule { }
