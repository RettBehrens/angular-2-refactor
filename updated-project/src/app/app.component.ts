import { Component } from '@angular/core';
import { MyFactoryService } from './my-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
	title = 'app';

	showZoidberg: boolean = false;
	favoriteCartoon: string = "Futurama";
	imageurl: string = "https://i.imgflip.com/1cgykt.jpg";
	money: number = 24;
	characters: any = [
		{
			name: "Zoidberg",
			age: 58
		},
		{
			name: "Professor Farnsworth",
			age: 190
		},
		{
			name: "Philip J Fry",
			age: 32
		},
		{
			name: "Bender",
			age: 3000
		}
	];
	woopWoopWoop() {
		this.showZoidberg = !this.showZoidberg;
	}

	constructor(private myFactory : MyFactoryService) {

	}

	ngOnInit() {
		this.myFactory.easterEgg();
	}
}
