import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { BlogPost } from './blog-post';
import { BLOGSLIST } from './blogs-list';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  //Returns the entire list of blogs
  getAllBlogs(): Observable<BlogPost[]> {
    return of(BLOGSLIST);
  }

  //Returns a single blog post
  getBlogByID(id: number): Observable<BlogPost> {
    return of(BLOGSLIST.find(BlogPost => BlogPost.id === id));
  }

}
