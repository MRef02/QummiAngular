// boton-hamburguesa.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton-hamburguesa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-hamburguesa.component.html',
  styleUrl: './boton-hamburguesa.component.css'
})
export class BotonHamburguesaComponent {
  isMenuOpen = false;
  @Output() buttonClicked = new EventEmitter<string>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onButtonClick(option: string) {
    this.buttonClicked.emit(option);
    this.isMenuOpen = false;
  }
}