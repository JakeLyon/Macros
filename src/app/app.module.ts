import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyPasteComponent } from './copy-paste/copy-paste.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { DragdroptestComponent } from './dragdroptest/dragdroptest.component';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
    declarations: [AppComponent, CopyPasteComponent, DragdroptestComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule, HotkeyModule, NgDragDropModule.forRoot()],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
