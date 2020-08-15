import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'app-dragdroptest',
    templateUrl: './dragdroptest.component.html',
    styleUrls: ['./dragdroptest.component.css'],
})
export class DragdroptestComponent implements OnInit {
    dyn: string = '';

    constructor() {
        interval(1000).subscribe(
            (s) => {
                this.dyn = s.toString();
            },
            (e) => {},
            () => {}
        );
    }

    ngOnInit(): void {}

    items = [
        { name: 'Apple', type: 'fruit' },
        { name: 'Carrot', type: 'vegetable' },
        { name: 'Orange', type: 'fruit' },
    ];

    droppedItems = [];
    onItemDrop(e: any) {
        // Get the dropped data here
        this.droppedItems.push(e.dragData);
    }
}
