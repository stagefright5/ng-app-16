import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-counter-changer',
    standalone: true,
    imports: [CommonModule],
    template: `
        <button (click)="increment.emit()">+</button>
        <button (click)="decrement.emit()">-</button>
    `,
    styleUrls: ['./counter-changer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterChangerComponent {
    @Output() increment = new EventEmitter<void>();
    @Output() decrement = new EventEmitter<void>();
}
