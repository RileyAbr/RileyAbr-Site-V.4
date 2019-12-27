import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

// Handles fetching blog post information
import { BlogPost } from '../list-blog-posts/blog-post';
import { BLOGSLIST } from '../list-blog-posts/blogs-list';
import { BlogService } from '../list-blog-posts/blog.service';

// Controls the carousel of blog posts
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [NgbCarouselConfig]
})
export class BlogComponent implements OnInit {

  blogs: BlogPost[];

  constructor(
    private titleService: TitleService,
    private blogService: BlogService,
    config: NgbCarouselConfig,
  ) {
    this.titleService.setSecondaryTitle("Blog");
  }

  ngOnInit() {
    this.blogService.getAllBlogs().subscribe(fetchedBlogs => this.blogs = fetchedBlogs);
  }

}
