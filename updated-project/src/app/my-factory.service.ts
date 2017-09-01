import { Injectable } from '@angular/core';

@Injectable()
export class MyFactoryService {

	easterEgg() {
		console.log("You're a developer, you can see me!");
	}

  constructor() { }

}