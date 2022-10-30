import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _history: string[] = [];
  private _baseUrl: string = '/';

  constructor(
    private _location: Location,
    private _router: Router
  ) {
    this._router.events.subscribe({
      next: (event: any) => {
        if (event instanceof NavigationEnd) {
          this._history.push(event.urlAfterRedirects);
        }
      },
      error: console.log
    });
  }

  back(): void {
    this._history.pop();
    if (this._history.length > 0) {
      this._location.back();
    } else {
      this._router.navigateByUrl(this._baseUrl);
    }
  }

}
