import { Observable, timer, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, shareReplay, tap } from 'rxjs/operators';

export abstract class LocalStorageCacheService<T> {
  private cache$: Observable<T>;

  constructor(
    protected http: HttpClient,
    private actionUrl: string,
    private cacheKey: string,
    private cacheDataValidity: number,
    private staleCheckInterval: number
  ) {}

  protected getData(): Observable<T> {
    if (!this.cache$) {
      const timer$ = timer(0, this.staleCheckInterval);
      this.cache$ = timer$.pipe(
        switchMap(_ => this.fetchDataFromStorage()),
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private fetchDataFromStorage(): Observable<T> {
    const timestamp = new Date().getTime();
    const cacheData = JSON.parse(localStorage.getItem(this.cacheKey));

    if (!cacheData) {
      return this.fetchData();
    }

    const { validUntil, data } = cacheData;

    if (timestamp && timestamp > validUntil) {
      return this.fetchData();
    }

    return of(data as T);
  }

  private fetchData(): Observable<T> {
    return this.http.get<T>(this.actionUrl).pipe(
      tap(x => {
        localStorage.setItem(
          this.cacheKey,
          JSON.stringify({ validUntil: new Date().getTime() + this.cacheDataValidity, data: x })
        );
      })
    );
  }
}
