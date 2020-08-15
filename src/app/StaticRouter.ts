import { Router } from '@angular/router';
export class StaticRouter {
    static router: Router;
    static initialise(router: Router): void {
        this.router = router;
    }
    static GotoHome(): void {
        console.log('Going home');
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['..']);
    }

    static GoTo(l: string) {
        var loc = l;
        if (l) {
            loc = '../' + l;
        } else {
            loc = '..';
        }

        this.router.navigate([loc]);
    }
}

export class StaticHelpers {
    static dynamicSort(property: string) {
        var sortOrder = 1;
        if (property[0] === '-') {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a: any, b: any) {
            /* next line works with strings and numbers,
             * and you may want to customize it to your needs
             */
            var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
            return result * sortOrder;
        };
    }
}
