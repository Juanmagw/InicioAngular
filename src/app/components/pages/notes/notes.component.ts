import { Component, ElementRef, OnInit, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { SharedModule } from '../../SharedModule';
import { INote } from 'src/app/model/INote';
import { NotesService } from 'src/app/services/notes.service';


@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule, HighlightDirective],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @ViewChild('colorpicker') cp!: ElementRef;

  public color:string = '#fff';
  public page = 'Inicio';


  public notes:INote[] = [
    {title:'Nota1',description:"Hola Mundo"},
    {title:'Nota2',description:"Hello World"},
  ];

  constructor(public notesS:NotesService) { }

  ngOnInit(): void {
  }

  refresh(){
    location.reload();
  }
  cambiaCorlor($event:any){
   this.color=$event.target.value;
  }

  public removingNote($event:INote){
    console.log("Elminando Nota");
    console.log($event);
  }
  public editingNote($event:INote){
    console.log("Editando Nota");
    console.log($event);
  }
  trackByNotes(index:number,item:INote){
    return item.id;
  }

}
