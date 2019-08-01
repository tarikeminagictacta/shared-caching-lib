import { Component } from '@angular/core';
import { CachedService } from '@coben/common';

@Component({
  selector: 'cbn-ui-fs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coben-ui-finance';
  data$ = this.cachedSerivce.getDataArray();

  constructor(private cachedSerivce: CachedService) {}
}
