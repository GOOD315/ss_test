import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Comment } from 'src/app/dto/SingleNews.dto';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-single-news.page',
  templateUrl: './single-news.page.component.html',
  styleUrls: ['./single-news.page.component.scss']
})
export class SingleNewsPageComponent implements OnInit {
  nid: any;
  private routeSubscription: Subscription;

  links: { prev: number | null, next: number | null } = { prev: null, next: null };

  constructor(private route: ActivatedRoute, private router: Router, public service: NewsService) {
    this.routeSubscription = route.params.subscribe(params => this.nid = params['nid']);
  }

  hasChild = (_: number, node: Comment) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    if (!this.service.allNewsLoaded) {
      this.service.getAllNews().subscribe(
        result => this.links = this.service.findPrevNextPages(this.nid))
    } else this.links = this.service.findPrevNextPages(this.nid);

    this.service.getSingleNews(this.nid);
  }

  onMainPage() {
    this.router.navigate(['']);
  }

  onPrev() {
    this.router.navigate(['news', this.links.prev]);
  }
  onNext() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['news', this.links.next]);
  }
}
