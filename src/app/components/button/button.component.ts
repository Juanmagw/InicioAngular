import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, /*TranslateModule*/],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input('clase') clase:string = 'btn btn-primary';
  @Input('texto') texto:string = 'Botón';
  @Output() action = new EventEmitter();

  /*constructor(private traslateS:TranslateService) {
    traslateS.setDefaultLang('es');
    traslateS.use('es');
  }*/

  ngOnInit(): void {
  }

}
