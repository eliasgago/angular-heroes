import { Component } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
	selector: 'hero-form',
	templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {

	constructor(
		private heroService: HeroService
	){}

	powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

	model: Hero = new Hero();
	submitted = false;

	onSubmit(): void {
		this.submitted = true;
		console.log(this.model);
		this.heroService.create(this.model).then(
			hero => {
			}
		)
	}

	get diagnostic() {
		return JSON.stringify(this.model);
	}
}