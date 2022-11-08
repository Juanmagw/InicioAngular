import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { INote } from 'src/app/model/INote';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form-note',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, /*TranslateModule*/],
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css']
})
export class FormNoteComponent implements OnInit {

  /*@ViewChild('title') title!:ElementRef;
  public description!:string;*/

  @Input() note!: INote;
  @Output() onsubmit = new EventEmitter<INote>();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      description: [''],
      id: ['']
    })
  }

  ngOnInit(): void {
    if (this.note && this.note.title) {
      console.log("RECIBO")
      console.log(this.note)
      this.form.setValue(this.note);
    }
  }
  ngOnChanges($changes: any) {
    console.log($changes)
    if ($changes.note && $changes.note.currentValue) {
      this.form.setValue($changes.note.currentValue);
    }
  }
  submit() {
    //VALID
    let newNote: INote = {
      id: this.form.value.id,
      title: this.form.value.title,
      description: this.form.value.description
    }
    this.onsubmit.emit(newNote);
    this.form.reset();
  }
}
