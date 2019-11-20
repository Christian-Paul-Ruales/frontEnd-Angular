import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms' 
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import {FormsModule} from '@angular/forms';
import { ServiceService } from './Service/service.service';
import {HttpClientModule} from '@angular/common/http';
import { SendComponent } from './send/send.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    SendComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
