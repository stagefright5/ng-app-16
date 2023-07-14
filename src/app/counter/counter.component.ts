import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CounterChangerComponent } from '../counter-changer/counter-changer.component';
import { CounterDisplayComponent } from '../counter-display/counter-display.component';

@Component({
    selector: 'app-counter',
    standalone: true,
    template: `
        <app-counter-display [count]="count"></app-counter-display>
        <app-counter-changer (increment)="increment()" (decrement)="decrement()"></app-counter-changer>
    `,
    styleUrls: ['./counter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, CounterChangerComponent, CounterDisplayComponent],
})
export class CounterComponent {
    // count = signal(0);
    // double_count = computed(() => this.count() * 2);
    count = {
        count: 0,
        double_count: 0,
    };
    increment() {
        this.count.count++;
        this.count.double_count = this.count.count * 2;
        // this.count.set(this.count() + 1);
    }
    decrement() {
        this.count.count--;
        this.count.double_count = this.count.count * 2;
        // this.count.set(this.count() - 1);
    }
}
