import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-copy-paste',
    templateUrl: './copy-paste.component.html',
    styleUrls: ['./copy-paste.component.css'],
})
export class CopyPasteComponent implements OnInit {
    textInput: string = '';
    textOutPut: string = '';
    key: string;
    ukeys: string[] = new Array<string>();
    //private _keys: { [index: string]: T } = {};
    private _keys: Dic<string> = new Dic<string>();
    private _keysCode: Dic<string> = new Dic<string>();

    constructor() {
        this._keys.Add(' ', ' ');
        this._keys.Add('a', 'a');
        this._keys.Add('b', 'b');
        this._keys.Add('c', 'c');
        this._keys.Add('d', 'd');
        this._keys.Add('e', 'e');
        this._keys.Add('f', 'f');
        this._keys.Add('g', 'g');
        this._keys.Add('h', 'h');
        this._keys.Add('i', 'i');
        this._keys.Add('j', 'j');
        this._keys.Add('k', 'k');
        this._keys.Add('l', 'l');
        this._keys.Add('m', 'm');
        this._keys.Add('n', 'n');
        this._keys.Add('o', 'o');
        this._keys.Add('p', 'p');
        this._keys.Add('q', 'q');
        this._keys.Add('r', 'r');
        this._keys.Add('s', 's');
        this._keys.Add('t', 't');
        this._keys.Add('u', 'u');
        this._keys.Add('v', 'v');
        this._keys.Add('w', 'w');
        this._keys.Add('x', 'x');
        this._keys.Add('y', 'y');
        this._keys.Add('z', 'z');
        this._keys.Add('A', '+a');
        this._keys.Add('B', '+b');
        this._keys.Add('C', '+c');
        this._keys.Add('D', '+d');
        this._keys.Add('E', '+e');
        this._keys.Add('F', '+f');
        this._keys.Add('G', '+g');
        this._keys.Add('H', '+h');
        this._keys.Add('I', '+i');
        this._keys.Add('J', '+j');
        this._keys.Add('K', '+k');
        this._keys.Add('L', '+l');
        this._keys.Add('M', '+m');
        this._keys.Add('N', '+n');
        this._keys.Add('O', '+o');
        this._keys.Add('P', '+p');
        this._keys.Add('Q', '+q');
        this._keys.Add('R', '+r');
        this._keys.Add('S', '+s');
        this._keys.Add('T', '+t');
        this._keys.Add('U', '+u');
        this._keys.Add('V', '+v');
        this._keys.Add('W', '+w');
        this._keys.Add('X', '+x');
        this._keys.Add('Y', '+y');
        this._keys.Add('Z', '+z');
        this._keys.Add('1', '1');
        this._keys.Add('2', '2');
        this._keys.Add('3', '3');
        this._keys.Add('4', '4');
        this._keys.Add('5', '5');
        this._keys.Add('6', '6');
        this._keys.Add('7', '7');
        this._keys.Add('8', '8');
        this._keys.Add('9', '9');
        this._keys.Add('0', '0');
        this._keys.Add('!', '+1');
        this._keys.Add('"', '+2');
        this._keys.Add('£', '+3');
        this._keys.Add('$', '+4');
        this._keys.Add('%', '+5');
        this._keys.Add('^', '+6');
        this._keys.Add('&', '+7');
        this._keys.Add('*', '+8');
        this._keys.Add('(', '+9');
        this._keys.Add(')', '+0');
        this._keys.Add('_', '+-');
        this._keys.Add('+', '+=');
        this._keys.Add('-', '-');
        this._keys.Add('{', '+[');
        this._keys.Add('}', '+]');
        this._keys.Add('[', '[');
        this._keys.Add(']', ']');
        this._keys.Add(':', ':');
        this._keys.Add(';', ';');
        this._keys.Add('#', '#');
        this._keys.Add('~', '+#');
        this._keys.Add('<', '+,');
        this._keys.Add(',', ',');
        this._keys.Add('>', '+.');
        this._keys.Add('.', '.');
        this._keys.Add('?', '+/');
        this._keys.Add('/', '{NUMDIVIDE}');
        this._keys.Add('=', '=');

        this._keysCode.Add('10', '{ENTER}');
    }

    ngOnInit(): void {}

    perform() {
        this.textOutPut = '';
        for (var i = 0; i < this.textInput.length; i++) {
            var t = this.textInput.charAt(i);
            var cal = this._keys.Item(t);
            const aa = this.textInput.charCodeAt(i).toString();

            if (cal === undefined) {
                cal = this._keysCode.Item(aa);
            }
            if (cal === undefined) {
                this.ukeys.push(t + ' - ' + aa);
            }

            this.textOutPut += cal;
        }

        console.log(this.textOutPut);
    }
    // @HostListener('document:keypress', ['$event'])
    // public handleKeyboardEvent(event: KeyboardEvent) {
    //     console.log(event.key);
    //     // event.preventDefault();
    // }
    // @HostListener('document:keypress', ['$event'])
    // handleKeyboardEvent(event: KeyboardEvent) {
    //     //    event.preventDefault();
    //     this.key = event.key;
    //     console.log(this.key);
    // }

    @HostListener('document:keypress', ['$event'])
    public handleKeyboardEvent(event: Event) {
        var t = event as KeyboardEvent;

        //   console.log(t.key);
    }
}

// constructor(private _hotkeysService: HotkeysService) {
//     this._hotkeysService.add(
//         new Hotkey('meta+shift+g', (event: KeyboardEvent): boolean => {
//             console.log('Typed hotkey');
//             return false; // Prevent bubbling
//         })
//     );
// }

// ngOnInit(): void {}

// perform() {
//     for (var i = 0; i < this.textInput.length; i++) {
//         var t = this.textInput.charAt(i);
//         var x = this.textInput.charCodeAt(i);
//         console.log(t + '    ' + x);
//     }
// }

export interface IKeyedCollection<T> {
    Add(key: string, value: T);
    ContainsKey(key: string): boolean;
    Count(): number;
    Item(key: string): T;
    Keys(): string[];
    Remove(key: string): T;
    Values(): T[];
}
export class Dic<T> implements IKeyedCollection<T> {
    private items: { [index: string]: T } = {};

    private count: number = 0;

    public ContainsKey(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }

    public Count(): number {
        return this.count;
    }

    public Add(key: string, value: T) {
        if (!this.items.hasOwnProperty(key)) this.count++;

        this.items[key] = value;
    }

    public Remove(key: string): T {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    }

    public Item(key: string): T {
        return this.items[key];
    }

    public Keys(): string[] {
        var keySet: string[] = [];

        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }

        return keySet;
    }

    public Values(): T[] {
        var values: T[] = [];

        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }

        return values;
    }
}
