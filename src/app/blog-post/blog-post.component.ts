import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TitleService } from '../title.service';
import { BlogService } from '../list-blog-posts/blog.service';
import { BlogPost } from '../list-blog-posts/blog-post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blog: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private titleService: TitleService,
    private blogService: BlogService
  ) {

  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  ngOnInit() {
    this.getBlog();
    this.titleService.setTertiaryTitle("Blog", this.blog.id.toString());
  }

  getBlog() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlogByID(id).subscribe(incomingBlog => this.blog = incomingBlog);
  }

  goBack(): void {
    this.location.back();
  }

}
