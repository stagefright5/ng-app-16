import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-counter-display',
    standalone: true,
    imports: [CommonModule],
    template: `
        <p>Count: {{ count.count }}</p>
        <p>Double count: {{ count.double_count }}</p>
    `,
    styleUrls: ['./counter-display.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterDisplayComponent {
    @Input() count = {
        count: 0,
        double_count: 0,
    };
}
