import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INote } from '../../model/INote';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Output() editNote = new EventEmitter<INote>();
  @Output() removeNote = new EventEmitter<INote>();

  @Input('note') public note:INote = {
    id:-1,
    title:'',
    description:''
    };

  constructor() { }

  ngOnInit(): void {
    console.log("NGONINIT")
  }
  ngAfterContentInit(){
    console.log("NGAFTERCONTENTINIT");
  }

  public editNoteFn(){
    if(this.note.id==-1) return;
    this.editNote.emit(this.note);
  }
  public removeNoteFn(){
    if(this.note.id==-1) return;
    this.removeNote.emit(this.note);
  }

}
