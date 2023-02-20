import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { AllNewsDto } from '../dto/AllNews.dto';
import { DtoConverter } from '../dto/DtoConverter';
import { AllNews } from '../interfaces/AllNews';
import { SingleNewsDto } from '../dto/SingleNews.dto';
import { SingleNews } from '../interfaces/SingleNews';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private API_URL = "https://hn.algolia.com/api/v1/";
  private ALL_NEWS_PARAM = "search_by_date";
  private SINGLE_NEWS_PARAM = "items";

  private PARAMS_URL: HttpParams = new HttpParams().set(
    "tags", "front_page"
  )
  private allNews = new BehaviorSubject<AllNews[]>([]);
  allNews$: Observable<AllNews[]> = this.allNews.asObservable();
  allNewsLoaded = false;

  public singleNews?: SingleNews;

  constructor(private http: HttpClient) { }

  getAllNews() {
    const url = this.API_URL + this.ALL_NEWS_PARAM

    return this.http.get<AllNewsDto>(url, { params: this.PARAMS_URL }).pipe(
      map(result => DtoConverter.AllNewsFromDto(result)),
      map(result => this.allNews.next(result)),
      tap(() => this.allNewsLoaded = true)
    );
  }

  getSingleNews(nid: number) {
    const url = this.API_URL + this.SINGLE_NEWS_PARAM + '/' + nid;

    return this.http.get<SingleNewsDto>(url).pipe(
      map(result => DtoConverter.SingleNewsFromDto(result))
    ).subscribe(result => this.singleNews = result)
  }

  findPrevNextPages(id: number): { prev: number | null, next: number | null } {
    if (!this.allNews) return { prev: null, next: null };
    const index = this.allNews.value.findIndex(item => Number(item.id) === Number(id));

    let prev = null;
    let next = null;
    if (index > 0) prev = this.allNews.value[index - 1].id;
    if (index < this.allNews.value.length - 1) next = this.allNews.value[index + 1].id;
    return { prev, next }
  }
}
