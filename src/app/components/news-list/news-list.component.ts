import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AllNews } from 'src/app/interfaces/AllNews';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent {
  @Input() allNews?: AllNews[];
  @Output() select = new EventEmitter<AllNews>();

  constructor() { }

  onSelect(news: AllNews) {
    this.select.emit(news);
  }
}
