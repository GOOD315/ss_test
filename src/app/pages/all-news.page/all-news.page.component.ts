import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AllNews } from 'src/app/interfaces/AllNews';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-all-news.page',
  templateUrl: './all-news.page.component.html',
  styleUrls: ['./all-news.page.component.scss']
})
export class AllNewsPageComponent implements OnInit {

  constructor(public service: NewsService) { }

  ngOnInit(): void {
    this.service.getAllNews().subscribe();
  }
}
