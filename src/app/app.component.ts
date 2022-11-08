import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core/public_api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Proyecto inicial Ángular';

  private user!: string;

  /*constructor(public translateS:TranslateService){
    this.translateS.addLangs(["es","en"]);
    if(localStorage.getItem('language')){
      translateS.setDefaultLang(localStorage.getItem('language')!);
      translateS.use(localStorage.getItem('language')!);
    }
  }*/

  ngOnInit(): void {

  }

  /*public removingNote($event:INote){
    console.log("Elminando Nota");
    console.log($event);
  }
  public editingNote($event:INote){
    console.log("Editando Nota");
    console.log($event);
  }*/
  public alerta() {
    alert("Alerta Roja");
  }
}