import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { results } from '../model/result';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { food } from '../model/food';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  reply:results=new results();

  constructor(private router:Router,private service:ServiceService) { }
  res:results=new results();
  p1:results=new results();
  aderitivo_cevolla:results=new results();
  aderitivo_papa_tortilla:results=new results();
  aderitivo_pan:results=new results();
  aderitivo_crema:results=new results();
  principal:results[];
  aderitivo_proteinas:results=new results();
  preg3_:results=new results();
  cadena:String[];
  myresults:results[];
  ngOnInit() {
    
  }
  
  Sendr(){
    //console.log(" RESPUESTA::"+reply);
    this.res.response=this.p1.response+"-"+this.aderitivo_cevolla.response+"-"+this.aderitivo_papa_tortilla.response+"-"
    +this.aderitivo_pan.response+"-"+this.aderitivo_crema.response+"-"+this.aderitivo_proteinas.response+"-"+this.preg3_.response;
    console.log(" Antes de mandar:"+this.res.response);

    console.log(" RES:"+this.res);
      this.service.sendReply(this.res)
      .subscribe(data=>{
        //this.router.navigate(["results"]);
        this.reply=data;
        this.cadena=this.reply.response.split("-");
        var result1=new food();
        //results1.name
        this.myresults[0]
        console.log("Respuesta: "+this.reply.response);
      })


  }

}
