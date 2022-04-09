import { NgModule,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { DetailsComponent } from './details/details.component';
import { LightquoteDirective } from './lightquote.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FormComponent,
    DisplayComponent,
    DetailsComponent,
    LightquoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
