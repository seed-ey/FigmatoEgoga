import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
 @Input() currentPage: number = 1;
 @Input() total: number = 0;
 @Input() limit: number = 20;
 @Output() changePage = new EventEmitter<number>();

 pages =[] = []

//  ngOnInit(): void {
//   this.service.
//   const pagesCount = Math.ceil(this.total / this.limit);
//   this.pages = this.range(1, pagesCount);
// }
// :
}
