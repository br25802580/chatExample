// modules import
import {NgModule} from "@angular/core";
import { AgmCoreModule } from 'angular2-google-maps/core';

// components import
import {GameComponent} from './game.component';

@NgModule({
	imports: [AgmCoreModule],       // module dependencies
    exports: [GameComponent],
	declarations: [GameComponent],   // components and directives
})
export class GameModule {
	constructor() {		
	}
}

