import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HighlightDirective } from "../directives/highlight.directive";
import { NoteComponent } from "./note/note.component";


@NgModule({
    imports: [CommonModule],
    declarations: [NoteComponent],
    exports: [NoteComponent]
})
export class SharedModule { }