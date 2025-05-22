import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private imagesKey = 'images';
  private answersKey = 'answers';

  constructor() { }

  public FirstText_100: BehaviorSubject<string>[] = Array.from({ length: 36 }, (_, i) => new BehaviorSubject<string>((i + 1).toString()));

  setFirstText_100(index: number) {
    if (this.FirstText_100[index]) {
      this.FirstText_100[index].next("Completed");
    }
  }
}




