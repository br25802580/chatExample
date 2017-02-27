import {Component, OnInit, ViewEncapsulation} from '@angular/core';
//import {select} from "ng2-redux";
//import {Observable} from "rxjs";
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
    selector: 'game',
    styleUrls: ['game.css'],
    templateUrl: 'game.html',
    encapsulation: ViewEncapsulation.None
})
export class GameComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

    family:string = "aaa";
    faamily:string = "aaa";

    set(family:string)
    {
       this.family=family;
    };
}
