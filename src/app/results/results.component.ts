import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';
import { results } from '../model/result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  result:results[]
  constructor(private serv:ServiceService, private router:Router) { }

  ngOnInit() {
    this.serv.getresult()
    .subscribe(data=>{
      this.result=data;
    })
  }

}
