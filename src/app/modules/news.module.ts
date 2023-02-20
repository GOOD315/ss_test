import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllNewsPageComponent } from '../pages/all-news.page/all-news.page.component';
import { SingleNewsPageComponent } from '../pages/single-news.page/single-news.page.component';
import { RouterModule } from '@angular/router';
import { NewsListComponent } from '../components/news-list/news-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NewsUrlPipe } from '../pipes/news-url.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';
import { CommentComponent } from '../components/comment/comment.component';



@NgModule({
  declarations: [AllNewsPageComponent, SingleNewsPageComponent, NewsListComponent, NewsUrlPipe, CommentComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTreeModule,

    RouterModule.forChild([
      { path: '', component: AllNewsPageComponent },
      { path: 'news/:nid', component: SingleNewsPageComponent }
    ])
  ] 
})
export class NewsModule { }
