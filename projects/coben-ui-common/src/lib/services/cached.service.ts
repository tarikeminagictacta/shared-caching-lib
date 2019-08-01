import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LocalStorageCacheService } from './local-storage-cache.service';
import { TimeSpan } from '../models/time-span.model';
import { Observable } from 'rxjs';

@Injectable()
export class CachedService extends LocalStorageCacheService<any> {
  constructor(protected http: HttpClient) {
    super(
      http,
      'https://reqres.in/api/unknown',
      'coben-features',
      TimeSpan.fromMinutes(5),
      TimeSpan.fromSeconds(10)
    );
  }

  getDataArray(): Observable<any[]> {
    return this.getData().pipe(map(x => x.data as any[]));
  }
}
