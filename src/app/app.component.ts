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
  showModal = true;

  closeModal() {
    this.showModal = false; // Cierra el modal
  }

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
  posts = [
    {
      title: '21 savage',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdA9LHkFeXPCPXkp585S2JtlcHYqQUPqIwsA&s',
      text: 'Este es 21 savage.'
    },
  ];
  
}