import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NoteComponent } from "./note/note.component";
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
    imports: [CommonModule, /*TranslateModule*/],
    declarations: [NoteComponent],
    exports: [NoteComponent]
})
export class SharedModule { }