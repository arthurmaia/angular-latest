import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
	selector: 'app-teste',
	standalone: true,
	imports: [],
	templateUrl: './teste.component.html',
	styleUrl: './teste.component.scss',
})
export class TesteComponent implements OnInit {
	public count = signal(0);
	public computed = computed(() => this.count() * 2);
	public isComputedRendered = signal(false);

	constructor() {
		effect(() => {
			console.log('effect count:', this.count());
		});
	}

	public increment(): void {
		this.count.update((currentValue) => currentValue + 1);
	}

	public decrement(): void {
		this.count.update((currentValue) => currentValue - 1);
	}

	ngOnInit(): void {
		setTimeout(() => {
			this.isComputedRendered.set(true);
		}, 5000);
	}
}
