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
  auxObject:results=new results();
  
  auxfood:food=new food;
  auxfood1:food=new food;
  auxfood2:food=new food;
  auxfood3:food=new food;
  auxfood4:food=new food;
  auxfood5:food=new food;
  auxfood6:food=new food;


  foods:food[]=[this.auxfood,this.auxfood1,this.auxfood,this.auxfood,this.auxfood1,this.auxfood,this.auxfood];

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
        //this.foods=new food[7];
        /**     Ceviche */

        
        this.auxfood.name="Ceviche";
        this.auxfood.grade=parseInt(this.cadena[0].toString());
        this.auxfood.desciption="es un plato consistente en pescado, mariscos o ambos en aliños cítricos. Diferentes versiones del cebiche forman parte de la cultura culinaria de diversos países latinoamericanos litorales del océano Pacífico";
        this.auxfood.img="assets\\pictures\\ceviche.jpg";
        this.foods[0]=this.auxfood;
        
        //this.foods[0]=this.auxfood;
        /**     Encebollado */
        this.auxfood1.name="Encebollado";
        this.auxfood1.grade=parseInt(this.cadena[1].toString());
        this.auxfood1.desciption="El encebollado es un plato típico ecuatoriano originario de la región costa,1​ que se cree que se originó en las provincias de Babahoyo, Babahoyo o Los Ríos. Es considerado el plato de bandera de la gastronomía ecuatoriana.2​ En términos simples, el encebollado es un cocido o caldo de pescado que contiene albacora, yuca, cebolla colorada y cilantro.";
        this.auxfood1.img="assets\\pictures\\encebollado.jpg";
        this.foods[1]=this.auxfood1;
        //this.foods.push(this.auxfood);
        /**     Hornado */
        this.auxfood2.name="Hornado";
        this.auxfood2.grade=parseInt(this.cadena[2].toString());
        this.auxfood2.desciption="El hornado, nombre que proviene de la palabra hornear, es un plato típico de Ecuador. Se trata de un plato que contiene carne de cerdo hornado, principalmente es cocinado en leña, acompañado de distintas salsas y vegetales cocidos, como por ejemplo choclo, llapingachos, plátano maduro frito, aguacate, lechuga, tomate y demás ingredientes dependiendo la zona geográfica donde se lo prepare.";
        this.auxfood2.img="assets\\pictures\\hornado.jpg";
        this.foods[2]=this.auxfood2;
        //this.foods.push(this.auxfood);

        /**     morada */
        this.auxfood3.name="Colada Morada";
        this.auxfood3.grade=parseInt(this.cadena[3].toString());
        this.auxfood3.desciption="La colada morada es una bebida que se prepara a base de la harina de maíz morado, junto con frutas, formando una líquido morado y espeso. ";
        this.auxfood3.img="assets\\pictures\\morada.jpg";
        this.foods[3]=this.auxfood3;
        //this.foods.push(this.auxfood);
        /**     Fanesca */
        this.auxfood4.name="Fanesca";
        this.auxfood4.grade=parseInt(this.cadena[4].toString());
        this.auxfood4.desciption="La Fanesca es un guiso a base de granos tiernos y pescado seco que se prepara en Ecuador durante la cuaresma.";
        this.auxfood4.img="assets\\pictures\\fanesca.jpg";

        this.foods[4]=this.auxfood4;
        //this.foods.push(this.auxfood);

        /**     Higos */
        this.auxfood5.name="Higos";
        this.auxfood5.grade=parseFloat(this.cadena[5].toString());
        this.auxfood5.desciption="Postre típico ecuatoriano, en especial de la zona de la sierra del país, son muy apetecidos y se comen cocidos con miel de panela o raspadura. En Ecuador, los higos van acompañados con queso fresco.";
        this.auxfood5.img="assets\\pictures\\higos.jpg";

        this.foods[5]=this.auxfood5;
        //this.foods.push(this.auxfood);
        /**     Cuy */
        this.auxfood6.name="Cuy";
        this.auxfood6.grade=parseFloat(this.cadena[6].toString());
        this.auxfood6.desciption="El cuy es una especie de roedor de la familia Caviidae, originario de la Cordillera de los Andes.";
        this.foods[6]=this.auxfood6;
        this.auxfood6.img="assets\\pictures\\cuy.jpg";

        //this.foods.push(this.auxfood);

        this.foods=this.bubleSort(this.foods);
        
      })


  }

   bubleSort(params:food[]) {
      const l = params.length;
      for (let i = 0; i < l; i++ ) {
        for (let j = 0; j < l - 1 - i; j++ ) {
          if ( params[ j ].grade < params[ j +1 ].grade ) {
            [ params[ j ], params[ j +1 ] ] = [ params[ j + 1 ],  params[ j ] ];
          }
        }
      }
    
      return params;

  }

}
