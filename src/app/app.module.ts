import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationNewComponent } from './components/registration-new/registration-new.component';
import {FormsModule} from "@angular/forms";
import { kidAgesDirective } from './directives/car-year.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationNewComponent,
    kidAgesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
