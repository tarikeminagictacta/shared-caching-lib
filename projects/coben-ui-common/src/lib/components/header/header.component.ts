import { Component, OnInit } from '@angular/core';
import { CachedService } from '../../services/cached.service';

@Component({
  selector: 'cbn-common-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private cachedService: CachedService) {}

  ngOnInit() {
    this.cachedService.getDataArray().subscribe();
  }

  refreshData() {
    this.cachedService.getDataArray().subscribe();
  }
}
