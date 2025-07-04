import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model'; // Import the Post interface or class


@Injectable({ providedIn: 'root' })
export class PostService {
  private apiUrl = 'http://0.0.0.0:8080/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const response = this.http.get<Post[]>(this.apiUrl);
    return response;
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }
}
