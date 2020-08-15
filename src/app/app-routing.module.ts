import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopyPasteComponent } from './copy-paste/copy-paste.component';
import { DragdroptestComponent } from './dragdroptest/dragdroptest.component';

const routes: Routes = [
    { path: '', component: CopyPasteComponent },
    { path: 'drag', component: DragdroptestComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
