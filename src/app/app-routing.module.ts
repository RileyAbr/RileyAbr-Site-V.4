import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component'
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  //Home page
  { path: '', component: HomeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blog/:id', component: BlogPostComponent},
  { path: 'contact', component: ContactComponent},
  // Any lost paths are taken back to the homepage
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
