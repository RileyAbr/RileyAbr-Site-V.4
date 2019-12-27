import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular-native Bootstrap components
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Site page components
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavToTopComponent } from './nav-to-top/nav-to-top.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { BlogPostComponent } from './blog-post/blog-post.component';



@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    NavToTopComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    TwitterTimelineComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
