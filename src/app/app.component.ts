import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './services/post.service'; 
import { Post } from './models/post.model'; // Import the Post interface or class

@Component({
  selector: 'app-root',
  standalone: true, // Esto indica que es un componente standalone
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'website';
  showCurtain = true;
  showModal = true;

  Posts: Post[] = [];

  constructor(private ps: PostService) {}

  ngOnInit(){
    this.load();
  }
  
  load() {
    this.ps.getPosts().subscribe({
      next: (data) => {
        console.log('Posts loaded:', data);
        this.Posts = data;
      },
      error: (err) => console.error('Error loading posts:', err)
    });
  }

  /*
  addPost() {
    const sample = {
      Title: 'Hola!',
      Image: 'https://via.placeholder.com/150',
      Content: 'Este es un post desde Angular',
    };
    this.ps.createPost(sample).subscribe(() => this.load());
  }
  */

  closeModal() {
    this.showModal = false; // Cierra el modal
  }

  @ViewChild('curtainDiv') curtainDiv!: ElementRef;

  

  
}