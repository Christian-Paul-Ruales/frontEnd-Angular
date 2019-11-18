import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsComponent } from './results/results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SistemaRecomendarComidas';

  constructor(private router:Router){
    
  }
  Results(){
    this.router.navigate(["results"]);
  }
  
  Send(){
    this.router.navigate(["send"]);
  }

}
