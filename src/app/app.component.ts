import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaticRouter } from './StaticRouter';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Macros';
    key: string;
    SideNavOpen: boolean = true;
    SideNavClass: string = 'sidebar sidebar-open';
    mainArea: string = 'col-md-12 extra';

    buttons: ButtonLinks[] = [
        {
            fa: 'fas fa-home',
            text: 'Home',
            link: '',
        },
        {
            fa: 'fas fa-tachometer-alt',
            text: 'Dashboard',
            link: 'drag',
        },
        {
            fa: 'fas fa-h-square',
            text: 'Something',
            link: '',
        },
    ];
    goto(i: ButtonLinks) {
        StaticRouter.GoTo(i.link);
    }

    constructor(route: Router) {
        StaticRouter.initialise(route);
    }
    // @HostListener('document:keypress', ['$event'])
    // handleKeyboardEvent(event: KeyboardEvent) {
    //     this.key = event.key;
    //     console.log(this.key);
    //     event.preventDefault();
    // }
    ngOnInit(): void {}
    ToggleSideNav() {
        this.SideNavOpen = !this.SideNavOpen;

        if (this.SideNavOpen) {
            this.SideNavClass = 'sidebar sidebar-open';
            this.mainArea = 'col-md-12 extra';
        } else {
            this.SideNavClass = 'sidebar';
            this.mainArea = 'col-md-12';
        }
    }
}

export class ButtonLinks {
    fa: string;
    text: string;
    link: string;
}
