import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // Esto indica que es un componente standalone
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  showCurtain = true;

  @ViewChild('curtainDiv') curtainDiv!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  changeOpacity() {
    if (this.showCurtain) {
      this.curtainDiv.nativeElement.classList.add('fade-out');
      setTimeout(() => {
        this.showCurtain = false;
        this.cdr.detectChanges(); // Forzar la detección de cambios
      }, 1000);
    } else {
      this.showCurtain = true;
      this.curtainDiv.nativeElement.classList.remove('fade-out');
      this.cdr.detectChanges(); // Forzar la detección de cambios
    }
  }
}