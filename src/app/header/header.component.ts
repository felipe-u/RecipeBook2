import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    @Output() menuOption = new EventEmitter<string>();

    goTo(option) {
        this.menuOption.emit(option)
    }
}
